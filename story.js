// ===========================
// STORY DATA
// ===========================
// ノベルゲームのシナリオデータ
// このファイルを編集してストーリーをカスタマイズ

const CHARACTERS = {
  player: { name: "ろいちむ", color: "#a8d8ea" },
  ryu: { name: "真島　龍", color: "#f9c9b6", role: "同僚（ライバル）" },
  ajikan: { name: "鯵缶", color: "#b8d8b8", role: "同僚" },
  nanao: { name: "ななお", color: "#d4a5c9", role: "真島の友達" },
  narrator: { name: "", color: "#cccccc" },
};

// 背景定義
const BACKGROUNDS = {
  office_day:   { label: "オフィス（昼）",   gradient: "linear-gradient(160deg, #1a1a2e 0%, #16213e 40%, #0f3460 100%)" },
  office_night: { label: "オフィス（深夜）", gradient: "linear-gradient(160deg, #0d0d1a 0%, #1a0a2e 50%, #0a1628 100%)" },
  rooftop:      { label: "屋上",             gradient: "linear-gradient(180deg, #1a2a4a 0%, #2d4a6e 50%, #1a3a5a 100%)" },
  cafe:         { label: "カフェ",           gradient: "linear-gradient(160deg, #2a1a0e 0%, #3d2a14 50%, #2a1f0a 100%)" },
  meeting_room: { label: "会議室",           gradient: "linear-gradient(160deg, #0e1a1a 0%, #142a2a 50%, #0a1e1e 100%)" },
};

// シーン定義（ここを編集してストーリーを変更）
const SCENES = [
  // ===== PROLOGUE =====
  {
    id: "title",
    type: "title",
    title: "残業の夜に",
    subtitle: "〜ある悲しき社会人の物語〜",
    bg: "office_night",
  },
  {
    id: "s01",
    bg: "office_night",
    char: "narrator",
    text: "月曜日の夜、午後10時。\nオフィスにはあなたともう一人だけが残っていた。",
  },
  {
    id: "s02",
    bg: "office_night",
    char: "ajikan",
    expression: "😔",
    text: "…私と遊んでくれないの？",
  },
  {
    id: "s03",
    bg: "office_night",
    char: "player",
    text: "（同僚のおっさんだ。何が言いたいのかよくわかんないんだよな）",
  },
  {
    id: "s04",
    bg: "office_night",
    char: "ajikan",
    expression: "😅",
    text: "あ、ごめんなさい。独り言でした。\n…ろいろい今日も遊ぼう？？",
  },
  // ===== CHOICE 1 =====
  {
    id: "c01",
    type: "choice",
    bg: "office_night",
    text: "おっさんに何と答えますか？",
    choices: [
      { label: "「ぼく、明日早いんだよな…」", next: "s05a" },
      { label: "「いいけど、何時から？」", next: "s05b" },
    ],
  },
  // === BRANCH A ===
  {
    id: "s05a",
    bg: "office_night",
    char: "ajikan",
    expression: "🤔",
    text: "ろいろいのばか！…\nもう知らない！！！！！！",
  },
  {
    id: "s06a",
    bg: "office_night",
    char: "player",
    text: "（喜怒哀楽激しすぎ…）",
  },
  {
    id: "s07a",
    bg: "office_night",
    char: "ajikan",
    expression: "😊",
    text: "冗談だよ。\nしょうがないね。また明日あそぼ。",
    // next: "s08",
    next: "end_bad",
  },
  // === BRANCH B ===
  {
    id: "s05b",
    bg: "office_night",
    char: "ajikan",
    expression: "😮",
    text: "じゃあ２１時？",
  },
  {
    id: "s06b",
    bg: "office_night",
    char: "player",
    text: "（眠いんだよな。ぼく）",
    // next: "s08",
    next: "end_good",
  },
  // ===== MERGE =====
  {
    id: "s08",
    bg: "cafe",
    char: "narrator",
    text: "二人はコーヒーを買いに行き、\n気づけば深夜まで語り合っていた。",
  },
  {
    id: "s09",
    bg: "cafe",
    char: "ajikan",
    expression: "✨",
    text: "仕事って、一人でやろうとするから辛くなるんですよね。\nあなたと話して、なんか気が楽になりました。",
  },
  {
    id: "s10",
    bg: "rooftop",
    char: "narrator",
    text: "翌日の昼休み。\n田中が屋上に呼んでくれた。",
  },
  {
    id: "s11",
    bg: "rooftop",
    char: "majima",
    expression: "😏",
    text: "昨日、伊藤先輩と深夜まで残ってたって？\nなんか良い雰囲気じゃないですか。",
  },
  {
    id: "s12",
    bg: "rooftop",
    char: "player",
    text: "（田中は冗談っぽく言うけど、あながち外れでもないかもしれない）",
  },
  // ===== CHOICE 2 =====
  {
    id: "c02",
    type: "choice",
    bg: "rooftop",
    text: "田中にどう返す？",
    choices: [
      { label: "「ただの仕事だよ」", next: "s13a" },
      { label: "「…どう思う、正直？」", next: "s13b" },
    ],
  },
  // === BRANCH A ===
  {
    id: "s13a",
    bg: "rooftop",
    char: "majima",
    expression: "😄",
    text: "そっか〜。でも伊藤先輩、\n昨日から何か楽しそうなんだよな。",
    next: "s14",
  },
  // === BRANCH B ===
  {
    id: "s13b",
    bg: "rooftop",
    char: "majima",
    expression: "🤝",
    text: "正直に言う！ちゃんと向き合った方がいい。\n仕事も恋愛も、逃げてたら何も変わらないって。",
    next: "s14",
  },
  {
    id: "s14",
    bg: "meeting_room",
    char: "narrator",
    text: "その夜、プレゼンの最終確認をしていると\n伊藤先輩から連絡が入った。",
  },
  {
    id: "s15",
    bg: "meeting_room",
    char: "ajikan",
    expression: "😤",
    text: "部長が急に方針変更って言い出して…！\n明日の朝イチまでに修正案が必要なんです。",
  },
  {
    id: "s16",
    bg: "meeting_room",
    char: "player",
    text: "（これは大変だ。でも、一緒に乗り越えられる気がした）",
  },
  {
    id: "s17",
    bg: "office_night",
    char: "narrator",
    text: "二人は深夜まで作業を続けた。\nコーヒーカップが三つ空になる頃、ようやく完成した。",
  },
  {
    id: "s18",
    bg: "office_night",
    char: "ajikan",
    expression: "😌",
    text: "…ありがとうございます。\nあなたがいなかったら、本当に詰んでました。",
  },
  {
    id: "s19",
    bg: "office_night",
    char: "player",
    text: "（先輩の横顔に、モニターの光が柔らかく当たっていた）",
  },
  // ===== FINAL CHOICE =====
  {
    id: "c03",
    type: "choice",
    bg: "office_night",
    text: "この気持ち、どうする？",
    choices: [
      { label: "「また一緒に仕事しましょう」", next: "end_a" },
      { label: "「今度、ちゃんとお礼させてください」", next: "end_b" },
    ],
  },
  // ===== ENDINGS =====
  {
    id: "end_good",
    bg: "office_night",
    char: "ajikan",
    expression: "😊",
    text: "…今日は寝かせないぞ♡",
  },
  {
    id: "end_good2",
    type: "ending",
    bg: "office_night",
    title: "ENDING A",
    subtitle: "「ともだち？」",
    description: "二人は最高のともだち？になった。\n果たして何時に寝れるだろうか、まだ誰にも分からない。",
  },
  {
    id: "end_bad",
    bg: "office_night",
    char: "ajikan",
    expression: "😳",
    text: "ﾁﾗｯ|•ω•｡)",
  },
  {
    id: "end_bad",
    type: "ending",
    bg: "office_night",
    title: "ENDING B",
    subtitle: "「また明日」",
    description: "本当の闘いはこれからだ。",
  },
];

// ルーティングテーブル（自動生成）
const SCENE_MAP = {};
SCENES.forEach((s, i) => {
  SCENE_MAP[s.id] = i;
});

// ===========================
// EXPORTS
// ===========================
if (typeof module !== 'undefined') {
  module.exports = { CHARACTERS, BACKGROUNDS, SCENES, SCENE_MAP };
}
