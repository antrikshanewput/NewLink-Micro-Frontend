// babel.config.js
// @ts-check
const path = require('path');

/**
 * @typedef {import('@babel/core')} babel
 */

const errorCodesPath = path.resolve(__dirname, './docs/public/static/error-codes.json');
const missingError = process.env.MUI_EXTRACT_ERROR_CODES === 'true' ? 'write' : 'annotate';

/**
 * @param {string} relativeToBabelConf
 * @returns {string}
 */
function resolveAliasPath(relativeToBabelConf) {
  const resolvedPath = path.relative(process.cwd(), path.resolve(__dirname, relativeToBabelConf));
  return `./${resolvedPath.replace('\\', '/')}`;
}

/** @type {babel.PluginItem[]} */
const productionPlugins = [
  ['babel-plugin-react-remove-properties', { properties: ['data-mui-test'] }],
];

/** @type {babel.ConfigFunction} */
module.exports = function getBabelConfig(api) {
  const useESModules = api.env(['modern', 'stable']);

  const defaultAlias = {
    '@your/package': resolveAliasPath('./src/your-package'),
    // Add more aliases as needed
  };

  const presets = [
    [
      '@babel/preset-env',
      {
        bugfixes: true,
        browserslistEnv: process.env.BABEL_ENV || process.env.NODE_ENV,
        modules: useESModules ? false : 'commonjs',
      },
    ],
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
      },
    ],
    '@babel/preset-typescript',
  ];

  const plugins = [
    'babel-plugin-optimize-clsx',
    [
      '@babel/plugin-transform-runtime',
      {
        useESModules,
      },
    ],
    // Add any additional plugins as needed
  ];

  if (process.env.NODE_ENV === 'production') {
    plugins.push(...productionPlugins);
  }
  if (process.env.NODE_ENV === 'test') {
    plugins.push([
      'babel-plugin-module-resolver',
      {
        alias: defaultAlias,
        root: ['./'],
      },
    ]);
  }

  return {
    presets,
    plugins,
    ignore: [/@babel[\\|/]runtime/],
    env: {
      test: {
        sourceMaps: 'both',
        plugins: [
          [
            'babel-plugin-module-resolver',
            {
              root: ['./'],
              alias: defaultAlias,
            },
          ],
        ],
      },
    },
  };
};
