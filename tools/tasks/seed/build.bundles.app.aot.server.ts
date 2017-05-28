import { join } from 'path';
import * as Builder from 'systemjs-builder';

import Config from '../../config';

const BUNDLER_OPTIONS: any = {
  format: 'cjs',
  minify: true,
  mangle: false
};

/**
 * Executes the build process, bundling the JavaScript files using the SystemJS builder.
 */
export = (done: any) => {
  let builder = new Builder(Config.SYSTEM_BUILDER_CONFIG);
  const d = builder
    .buildStatic(join(Config.TMP_DIR, Config.BOOTSTRAP_FACTORY_PROD_MODULE),
      join(Config.TMP_DIR, 'server-bundle.js'),
      BUNDLER_OPTIONS)
    .then(() => done())
    .catch((err: any) => done(err));
};
