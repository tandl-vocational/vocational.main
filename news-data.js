/**
 * 新着情報データ (簡易CMS)
 * 
 * 管理方法:
 * 下記の `newsData` 配列に新しい項目を追加するだけで、サイトに自動反映されます。
 * 
 * id: ユニークなID（任意）
 * date: 表示する日付 (YYYY.MM.DD)
 * category: カテゴリ名（例: 募集中, 重要, お知らせ）
 * categoryClass: カテゴリのスタイル（status-active 等、既存のクラスを利用可能）
 * title: お知らせのタイトル
 * url: リンク先のURL（空文字の場合はリンクなしとして表示されます）
 */

const newsData = [
    {
        id: 1,
        date: "2026.04.01",
        category: "イベント",
        categoryClass: "status-info",
        title: "4月10日にハローワーク八重山にて６月開講の説明会を開催します。",
        url: ""
    },
    {
        id: 2,
        date: "2026.04.01",
        category: "イベント",
        categoryClass: "status-info",
        title: "4月6日にハローワーク沖縄にて６月開講の説明会を開催します。",
        url: ""
    },
    {
        id: 3,
        date: "2026.04.01",
        category: "募集中",
        categoryClass: "status-active",
        title: "令和8年度沖縄県委託訓練6月開講の募集を開始しました（石垣・名護・北谷）。",
        url: "#courses"
    },
    {
        id: 4,
        date: "2026.02.27",
        category: "募集中",
        categoryClass: "status-active",
        title: "令和8年度求職者支援訓練4月開講の募集を開始しました（Eラーニング）",
        url: ""
    },
];
