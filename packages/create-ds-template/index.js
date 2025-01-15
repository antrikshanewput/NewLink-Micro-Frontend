#!/usr/bin/env node

import { Command } from 'commander';
import inquirer from 'inquirer';
import chalk from 'chalk';
import { execa } from 'execa';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { error, log } from 'console';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const program = new Command();

const TEMPLATE_TYPES = {
  REACT: 'react',
  REACT_TS: 'react-ts',
};

const MAX_MFE_COUNT = 5;

function logError(message) {
  error(chalk.red.bold(`${message}`));
  process.exit(0);
}

function logSuccess(message) {
  log(chalk.green(message));
}

function readJsonFile(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    throw new Error(`Failed to read JSON file at ${filePath}: ${error.message}`);
  }
}

function writeJsonFile(filePath, data) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
  } catch (error) {
    throw new Error(`Failed to write JSON file at ${filePath}: ${error.message}`);
  }
}

function updatePackageJson(projectPath, updateFn) {
  const packageJsonPath = path.join(projectPath, 'package.json');
  try {
    const packageJson = readJsonFile(packageJsonPath);
    updateFn(packageJson);
    writeJsonFile(packageJsonPath, packageJson);
  } catch (error) {
    logError(`Failed to update package.json: ${error.message}`);
  }
}

function replaceScriptInPackageJson(projectPath, scripts) {
  updatePackageJson(projectPath, (packageJson) => {
    packageJson.scripts = {
      ...packageJson.scripts,
      ...scripts,
    };
  });
}

function addDependencyToPackageJson(projectPath, dependencies, isDev) {
  updatePackageJson(projectPath, (packageJson) => {
    if (isDev) {
      packageJson.devDependencies = {
        ...packageJson.devDependencies,
        ...dependencies,
      };
    } else {
      packageJson.dependencies = {
        ...packageJson.dependencies,
        ...dependencies,
      };
    }
  });
}

function replaceFile({ projectPath = '', targetFile = '', templateFile = '', fileExtension = '', content = '' }) {
  try {
    if (!projectPath || !targetFile) {
      throw new Error('Project path and target file are required.');
    }

    const newFile = templateFile
      ? fs.readFileSync(path.join(__dirname, `template-${fileExtension}`, templateFile), 'utf-8')
      : content;

    if (!newFile) {
      throw new Error(`Failed to load content for the file: ${templateFile || `${targetFile}.${fileExtension}`}`);
    }

    const targetFilePath = path.join(projectPath, targetFile);
    fs.writeFileSync(targetFilePath, newFile, 'utf-8');
  } catch (error) {
    logError(`Error in replaceFile: ${error.message}`);
    process.exitCode = 1;
  }
}

function createLernaConfig(projectPath) {
  const lernaConfig = {
    version: 'independent',
    npmClient: 'npm',
    packages: ['micro-fe-*', 'main'],
    command: {
      publish: {
        ignoreChanges: ['ignored-file', '*.md'],
        message: 'chore(release): publish',
      },
    },
  };
  fs.writeFileSync(path.join(projectPath, 'lerna.json'), JSON.stringify(lernaConfig, null, 2), { encoding: 'utf-8', flag: 'w+' });
}

function mfeRoutesFile(routes, imports) {
  const mfeRoutes = `${imports.join('\n').trim()}

export const mfeRoutes = [${routes.join(',\n')}];`;
  return mfeRoutes;
}

function menuListForHost(menuListConfig) {
  const menuListFile = `import { Link } from 'react-router-dom';
export const menuList = [
  ${menuListConfig.join('\n       ').trim()}
];`;

  return menuListFile;
}

function viteConfigFileHost(remoteApps) {
  const hostFile = `import { defineConfig } from 'vite';
import federation from '@originjs/vite-plugin-federation';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'app',
      remotes: {
        ${remoteApps.join('\n        ')}
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});
`;

  return hostFile;
}

function createComponentFolder(mfePath, fileExtension, mfeName) {
  const componentFolderPath = path.join(mfePath, 'src', 'components', 'Home');
  fs.mkdirSync(componentFolderPath, { recursive: true });
  const indexFilePath = path.join(componentFolderPath, `index.${fileExtension}x`);

  const homeComponentContent = `
  const Home = () => {
    return (
    <div>
      <h1>Welcome to the Home Component of ${mfeName}</h1>
    </div>
    );
  };
  export default Home;
  `;

  if (!fs.existsSync(indexFilePath)) {
    fs.writeFileSync(indexFilePath, homeComponentContent.trim(), 'utf-8');
  } else {
    log(`File already exists: ${indexFilePath}`);
  }
}

function createSrcFolderSetup(projectPath, fileExtension) {
  const templateFolderPath = path.join(__dirname, `template-${fileExtension}`, 'main');

  try {
    if (fs.existsSync(projectPath)) {
      fs.rmSync(projectPath, { recursive: true, force: true });
    }
    fs.cpSync(templateFolderPath, projectPath, { recursive: true });
  } catch (error) {
    logError(`Error updating 'src' folder: ${error.message}`);
  }
}

async function installDependencies(projectPath) {
  log(chalk.blue(`\n📦 Installing dependencies\n`));
  await execa('npm', ['install'], { cwd: projectPath, stdio: 'inherit' });
  log(chalk.green('\n✔︎ Dependencies installed successfully ✨'));
}

async function createRootProjectStructure(rootFolderName) {
  try {
    fs.mkdirSync(rootFolderName, { recursive: true });
    process.chdir(rootFolderName);
    await execa('npm', ['init', '-y'], { stdio: 'ignore' });
    logSuccess(`Root project initialized successfully ☃️`);

    createLernaConfig(process.cwd());
    replaceScriptInPackageJson(process.cwd(), {
      build: 'lerna run build',
      start: 'lerna run start',
      test: 'lerna run test',
    });
    addDependencyToPackageJson(
      process.cwd(),
      {
        lerna: '^8.1.9',
      },
      true
    );
  } catch (error) {
    logError(chalk.red(`Error creating project ${rootFolderName}: ${error.message}`));
    process.exit(1);
  }
}

async function createHostProjectStructure(projectName, template, fileExtension) {
  log(chalk.blue(`\n⚙️  Creating the host project: ${projectName}`));
  try {
    createSrcFolderSetup(projectName, fileExtension);
    logSuccess(`Main project ${projectName} created successfully ☃️`);
  } catch (error) {
    logError(chalk.red(`Error creating project ${projectName}: ${error.message}`));
    process.exit(1);
  }
}

async function createMicroFeProjectStructure(mfeName, template, fileExtension, index) {
  log(chalk.blue(`\n\n⚙️  Setting up micro-frontend: ${mfeName}`));
  try {
    await execa('npm', ['create', 'vite@latest', mfeName, '--', '--template', template], { stdio: 'inherit' });
    replaceFile({
      projectPath: mfeName,
      targetFile: `vite.config.${fileExtension}`,
      templateFile: `remoteViteConfig.${fileExtension}`,
      fileExtension,
    });
    addDependencyToPackageJson(path.join(mfeName), { '@originjs/vite-plugin-federation': '^1.3.6' });
    createComponentFolder(mfeName, fileExtension, mfeName);
    replaceScriptInPackageJson(mfeName, { start: `vite build && vite preview --port 311${index} --strictPort` });
  } catch (error) {
    logError(chalk.red(`Error setting up micro-frontend ${mfeName}: ${error.message}`));
    process.exit(1);
  }
}

async function createProjectStructure(folderName, mainProjectName, template, fileExtension, mfeCount) {
  log(chalk.blue(`\n⚙️  Creating project folder: ${folderName}`));
  try {
    await createRootProjectStructure(folderName);
    await createHostProjectStructure(mainProjectName, template, fileExtension);

    if (mfeCount) {
      replaceScriptInPackageJson(mainProjectName, { serve: 'vite build && vite preview', start: 'vite' });
      addDependencyToPackageJson(path.join(mainProjectName), { '@originjs/vite-plugin-federation': '1.3.6' });
    }

    const remoteApps = [];
    const menuListConfig = [];
    const routes = [];
    const imports = [];

    for (let i = 1; i <= mfeCount; i++) {
      const mfeName = `micro-fe-${i}`;
      const remote = `remoteApp${i}: 'http://localhost:311${i}/assets/remoteEntry.js',`;
      const menu = `{
    title: 'Micro FE ${i}',
    description: 'Micro FE component from micro-fe-${i}',
    order: 4,
    menuItemProps: {
      to: '/mfe${i}',
      as: Link,
    },
  },`;
      const routeConfig = `{ path: 'mfe${i}', element: <MFE${i} /> }`;
      const mfeImport = `import MFE${i} from 'remoteApp${i}/Home';`;

      remoteApps.push(remote);
      menuListConfig.push(menu);
      routes.push(routeConfig);
      imports.push(mfeImport);

      try {
        await createMicroFeProjectStructure(mfeName, template, fileExtension, i);
      } catch (error) {
        logError(chalk.red(`Error setting up micro-frontend ${mfeName}: ${error.message}`));
        process.exit(1);
      }
    }

    updatePackageJson(process.cwd(), (packageJson) => {
      packageJson.workspaces = ['main', 'micro-fe-*'];
    });

    const viteConfig = viteConfigFileHost(remoteApps);
    const mfeRoute = mfeRoutesFile(routes, imports);
    const menuList = menuListForHost(menuListConfig);

    replaceFile({
      projectPath: mainProjectName,
      targetFile: `vite.config.${fileExtension}`,
      content: viteConfig,
      fileExtension,
    });
    replaceFile({
      projectPath: `${mainProjectName}/src/routes`,
      targetFile: `mfeRoutes.${fileExtension}x`,
      content: mfeRoute,
      fileExtension,
    });
    replaceFile({
      projectPath: `${mainProjectName}/src/utils`,
      targetFile: `menuList.${fileExtension}`,
      content: menuList,
      fileExtension,
    });
    await installDependencies(process.cwd());
  } catch (error) {
    logError(`Failed to create project structure: ${error.message}`);
  }
}

async function recievingPrompts(rootName) {
  const mainProjectName = 'main';
  let folderName = rootName;
  let template, fileExtension, mfeCount;

  try {
    if (!folderName) {
      const { inputName } = await inquirer.prompt([
        {
          type: 'input',
          name: 'inputName',
          message: 'Enter the name of the root folder:',
          validate: (input) => (input ? true : 'Root folder name cannot be empty.'),
        },
      ]);
      folderName = inputName;
    }

    const templateResponse = await inquirer.prompt([
      {
        type: 'list',
        name: 'template',
        message: 'Select a template for the main project:',
        choices: [
          { name: 'React + JavaScript', value: TEMPLATE_TYPES.REACT },
          { name: 'React + TypeScript', value: TEMPLATE_TYPES.REACT_TS },
        ],
      },
    ]);
    template = templateResponse.template;
    fileExtension = template === TEMPLATE_TYPES.REACT ? 'js' : 'ts';

    const mfeResponse = await inquirer.prompt([
      {
        type: 'number',
        name: 'mfeCount',
        message: 'How many micro-frontends do you want to set up?',
        validate: (value) => {
          if (isNaN(value) || value <= 0 || value > MAX_MFE_COUNT) {
            return `Please enter a number between 1 and ${MAX_MFE_COUNT}.`;
          }
          return true;
        },
      },
    ]);
    mfeCount = mfeResponse.mfeCount;
  } catch (error) {
    logError('❌ Operation cancelled by the user.');
    return null;
  }

  return { folderName, mainProjectName, template, fileExtension, mfeCount };
}

process.on('SIGINT', () => {
  logError('\nOperation cancelled by the user. Exiting...');
  process.exit(0);
});

program
  .name('create-react-mfe-setup')
  .description('CLI to set up a React project with micro-frontend architecture')
  .version('1.0.0')
  .argument('[root-name]', 'Name of the root folder')
  .action(async (rootName) => {
    log(chalk.green.bold(`\nWelcome to the React Micro-Frontend Setup CLI! 🎉`));

    const { folderName, mainProjectName, template, fileExtension, mfeCount } = await recievingPrompts(rootName);
    await createProjectStructure(folderName, mainProjectName, template, fileExtension, mfeCount);

    log(chalk.green.bold('\nSetup complete! 🎉\n'));
    log(chalk.cyan('Happy coding! 🎉\n'));
    log(chalk.blue(`Root Folder: ${folderName}`));
    log(chalk.blue(`- Main Project: ${mainProjectName}`));

    for (let i = 1; i <= mfeCount; i++) {
      log(chalk.blue(`- Micro-Frontend: micro-fe-${i}`));
    }
    await execa('npm', ['start'], { cwd: process.cwd(), stdio: 'inherit' });
  });

program.parse(process.argv);
