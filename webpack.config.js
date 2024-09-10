import { resolve as _resolve } from 'path';

export const resolve = {
  alias: {
    assets: _resolve(__dirname, 'src/assets'),
    components: _resolve(__dirname, 'src/components'),
    constants: _resolve(__dirname, 'src/constants'),
    pages: _resolve(__dirname, 'src/pages'),
    router: _resolve(__dirname, 'src/router'),
  },
  extensions: ['.js', '.jsx', '.css'],
};
