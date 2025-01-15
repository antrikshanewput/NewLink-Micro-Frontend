import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig(({ command, mode, isSsrBuild, isPreview }) => {
  let additionalConfig = {};

  if (command === 'build' || isPreview) {
    additionalConfig = { logLevel: 'silent' };
  }
  return {
    plugins: [
      react(),
      federation({
        name: 'remote_app',
        filename: 'remoteEntry.js',
        // You can use any fileName but the same fileName must be used in the host application setup
        exposes: {
          './Home': './src/components/Home',
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
    ...additionalConfig,
  };
});
