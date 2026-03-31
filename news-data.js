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
        category: "募集中",
        categoryClass: "status-active",
        title: "令和8年6月開講「デジタル事務・会計科」の募集を開始しました（石垣・名護・北谷）。",
        url: "#courses"
    },
    {
        id: 2,
        date: "2026.03.25",
        category: "お知らせ",
        categoryClass: "status-info",
        title: "受講生満足度調査で「非常に満足」が90%を超えました。",
        url: "#proof"
    },
    {
        id: 3,
        date: "2026.03.15",
        category: "重要",
        categoryClass: "status-important",
        title: "システムメンテナンスのお知らせ（2026年4月5日 深夜2:00〜4:00）",
        url: ""
    },
    {
        id: 4,
        date: "2026.03.10",
        category: "イベント",
        categoryClass: "status-info",
        title: "【オンライン】ITキャリア相談会を開催いたします（3月20日）。",
        url: ""
    },
    {
        id: 5,
        date: "2026.03.01",
        category: "実績",
        categoryClass: "status-active",
        title: "令和7年度の就職率が過去最高の81%を記録しました。",
        url: "#proof"
    }
];
