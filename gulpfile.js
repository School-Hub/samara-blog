var gulp = require("gulp");
var sass = require("gulp-sass");
var server = require("gulp-webserver");

gulp.task("first", function() {
  return gulp
    .src("./scss/main.scss")
    .pipe(sass())
    .pipe(gulp.dest("./css/"));
});

gulp.task("watch", function() {
  gulp.watch("./*.html", gulp.series("first"));
  gulp.watch("./scss/**/*.scss", gulp.series("first"));
  gulp.watch("./js/**/*.js", gulp.series("first"));
});

gulp.task("server", function() {
  gulp.src(".").pipe(
    server({
      livereload: true,
      open: true, // Otomatik tarayıcı acacak
      port: 8080  // http://localhost:8080
    })
  );
});

gulp.task("default", gulp.parallel("watch", "server"));
