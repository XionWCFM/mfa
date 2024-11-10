const browserSync = require("browser-sync");

browserSync.init({
  proxy: "http://localhost:5100", // 호스트 앱이 실행되는 포트
  files: [
    "**/remoteEntry.js", // 리모트 빌드 파일 경로
  ],
  port: 5099,
  reloadDelay: 0, // 새로고침 딜레이
});
