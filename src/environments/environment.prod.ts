// 本番ビルド用の設定。デプロイ先の API が決まったら、ここを1箇所書き換えるだけで全リクエスト先が切り替わる。
export const environment = {
  production: true,
  apiBaseUrl: 'http://localhost:8090'
};
