import * as gulp from 'gulp';
import { join } from 'path';
import Config from '../../config';
const replace = require('gulp-replace');

/**
 * Executes the build task, copying all TypeScript files over to the `dist/tmp` directory.
 */
export = () => {
  return gulp.src([
      join(Config.APP_SERVER_SRC, '**/*.ts'),
      join(Config.APP_SERVER_SRC, '**/*.json'),
      '!' + join(Config.APP_SERVER_SRC, '**/*.spec.ts'),
      '!' + join(Config.APP_SERVER_SRC, '**/*.e2e-spec.ts')
    ])
    .pipe(replace('../client/app/', '../app/'))
    .pipe(gulp.dest(Config.TMP_DIR + '/server'));
};
