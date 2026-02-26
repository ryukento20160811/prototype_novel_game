# 残業の夜に — Preact ビジュアルノベル

スマホファーストのビジュアルノベルゲームです。Vercelに即デプロイ可能。

## ファイル構成

```
novel-game/
├── index.html    # メインファイル（Preactエンジン + UIすべて）
├── story.js      # シナリオデータ（ここを編集してストーリーを変更）
├── vercel.json   # Vercelデプロイ設定
└── README.md
```

## Vercelへのデプロイ方法

### 方法①：ドラッグ＆ドロップ
1. [vercel.com](https://vercel.com) にログイン
2. "New Project" → "Upload" を選択
3. このフォルダをドラッグ＆ドロップ
4. デプロイ完了！

### 方法②：GitHub経由
```bash
# GitHubにプッシュ
git init && git add . && git commit -m "init"
git remote add origin <your-repo>
git push -u origin main
# Vercel上でリポジトリを連携
```

## ストーリーのカスタマイズ

`story.js` を編集するだけでストーリーを変えられます。

### キャラクター追加
```js
const CHARACTERS = {
  // ...既存キャラ
  yuki: { name: "山田 雪", color: "#b8d4ff", role: "後輩" },
};
```

### シーン追加
```js
{ 
  id: "s_new",       // ユニークID（必須）
  bg: "office_day",  // 背景（BACKGROUNDS のキー）
  char: "yuki",      // キャラクター（CHARACTERS のキー）
  expression: "😊",  // 絵文字（省略可）
  text: "セリフ内容",
  next: "s_next_id", // 次のシーンID（省略すると次の配列要素へ）
}
```

### 選択肢シーン
```js
{
  id: "c_new",
  type: "choice",
  bg: "rooftop",
  text: "どうしますか？",
  choices: [
    { label: "選択肢A", next: "scene_a_id" },
    { label: "選択肢B", next: "scene_b_id" },
  ]
}
```

### エンディングシーン
```js
{
  id: "end_new",
  type: "ending",
  bg: "office_night",
  title: "ENDING C",
  subtitle: "「タイトル」",
  description: "エピローグの文章がここに入ります。",
}
```

## 技術スタック

- **Preact 10** (CDN経由、ビルド不要)
- **Noto Serif JP / Noto Sans JP** (Google Fonts)
- Pure CSS アニメーション
- タイプライターエフェクト
- 背景グラデーション + パーティクル演出

## ライセンス

MIT — 自由にカスタマイズしてご利用ください。
