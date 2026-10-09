# quiz-museum-front

クイズゲーム quiz-museum のフロント(Angular)。API は [quiz-museum-api](https://github.com/team-zezepf/quiz-museum-api)。
構成は personal_dashboard-front に合わせている。

## 起動

ルートの `start-dev.bat`(普段使う環境)または `start-sandbox.bat`(動作確認用)から起動する。単体で起動するときは次のとおり。

| | コマンド | URL | 接続する API |
|---|---|---|---|
| 普段使う環境 | `npm start` | http://localhost:4300 | http://localhost:8090 |
| sandbox | `npm run start:sandbox` | http://localhost:4301 | http://localhost:8091 |

接続先は `src/environments/` の `environment*.ts` で切り替わる(`angular.json` の `fileReplacements`)。

## 静的ページ(docs/)

HTML・JS・CSS だけで動く静的なページは `docs/` に置く。単体でも開け、アプリにも同梱する。詳しくは [docs/README.md](docs/README.md)。

## テスト・ビルド

```bash
npm test                 # ユニットテスト(Vitest)
npm run test:coverage    # カバレッジ付き(CI と同じ)
npm run build
```

> npm は 10.9.8 を使う(`packageManager`)。古い npm(9.x)では依存関係の解決でエラーになることがある。

## 開発ルール

[CONTRIBUTING.md](CONTRIBUTING.md) を参照。
