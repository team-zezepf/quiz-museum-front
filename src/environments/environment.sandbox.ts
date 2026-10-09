// 動作確認用の環境(sandbox)。npm run start:sandbox(configuration: sandbox)のときに
// fileReplacements(angular.json)で environment.ts と差し替えられ、sandbox の API(8091)に接続する。
export const environment = {
  production: false,
  apiBaseUrl: 'http://localhost:8091'
};
