const browserSync = require("browser-sync");

browserSync.init({
  proxy: "http://localhost:5000", // 호스트 앱이 실행되는 포트
  files: [
    "**/remoteEntry.js", // 리모트 빌드 파일 경로
  ],
  port: 4999,
  reloadDelay: 10, // 새로고침 딜레이
});
