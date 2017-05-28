import * as gulp from 'gulp';
import { join } from 'path';
import Config from '../../config';

/**
 * Executes the build task, copying all TypeScript files over to the `dist/tmp` directory.
 */
export = () => {
  return gulp.src([
      join(Config.TMP_DIR, '**/**'),
      '!' + join(Config.TMP_DIR, '**/*.ts'),
      '!' + join(Config.TMP_DIR, '**/*index.html')
    ])
    .pipe(gulp.dest(Config.PROD_DEST));
};
