// 開発用(ng serve / development configuration)のデフォルト値。普段使う環境の API(8090)に接続する。
// 本番ビルド(configuration: production)時は fileReplacements(angular.json)により environment.prod.ts に、
// sandbox(npm run start:sandbox)のときは environment.sandbox.ts に差し替えられる。
export const environment = {
  production: false,
  apiBaseUrl: 'http://localhost:8090'
};
