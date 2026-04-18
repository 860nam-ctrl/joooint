const siteData = {
  brand: {
    name: 'JOOOINTmagazin',
    tagline: 'Art culture magazine / visual archive'
  },

  featured: {
    tag: 'Upcoming',
    title: 'Issue 13 — Launching Soon',
    text: '次号13号をメインに配置。公開前はティザー、公開後は詳細ページへの導線に差し替え。',
    image: 'issue-12.JPG',
    link: 'issue-13.html'
  },

  focusCards: [
    {
      title: 'Issues 01–12 Archive',
      text: '創刊号から12号までの表紙と誌面をアーカイブ。',
      image: 'issue-12.JPG',
      link: '#issues'
    },
    {
      title: 'Topics / New Drops',
      text: '新商品、アパレル、イベント、入荷情報をここで更新。',
      image: 'issue-10.JPG',
      link: '#topics'
    },
    {
      title: 'Goods / Apparel',
      text: '雑誌から派生するグッズやアパレルも同じ世界観で見せる。',
      image: 'issue-08.JPG',
      link: 'store.html'
    }
  ],

  issues: [
    { no: '01', title: 'Issue 01', description: '創刊号。JOOOINTの起点になる一冊。', category: 'issue', image: 'issue-01.JPG', meta: 'cover / archive / print', year: '2013', theme: 'origin', status: 'published', link: 'issue-01.html' },
    { no: '02', title: 'Issue 02', description: '連続するタイポとノイズ感が強い初期フェーズ。', category: 'issue', image: 'issue-02.JPG', meta: 'type / monochrome / archive', year: '2014', theme: 'pattern', status: 'published', link: 'issue-02.html' },
    { no: '03', title: 'Issue 03', description: 'ロゴそのものを主役にしたポスター的な号。', category: 'issue', image: 'issue-03.JPG', meta: 'logo / graphic / archive', year: '2015', theme: 'logo', status: 'published', link: 'issue-03.html' },
    { no: '04', title: 'Issue 04', description: '和要素とグラフィック感が混ざる一冊。', category: 'issue', image: 'issue-04.JPG', meta: 'japanese / pattern / archive', year: '2016', theme: 'japanese motif', status: 'published', link: 'issue-04.html' },
    { no: '05', title: 'Issue 05', description: 'JOOOINTのビジュアル変化が見える号。', category: 'issue', image: 'issue-05.JPG', meta: 'archive / cover', year: '2017', theme: 'transition', status: 'published', link: 'issue-05.html' },
    { no: '06', title: 'Issue 06', description: 'クラシックな書体感とアンダーグラウンド感。', category: 'issue', image: 'issue-06.JPG', meta: 'script / art culture / archive', year: '2018', theme: 'script logo', status: 'published', link: 'issue-06.html' },
    { no: '07', title: 'Issue 07', description: 'フレームロゴが主役の構成。', category: 'issue', image: 'issue-07.JPG', meta: 'logo / shape / archive', year: '2019', theme: 'frame type', status: 'published', link: 'issue-07.html' },
    { no: '08', title: 'Issue 08', description: '立体物とタイポの組み合わせが印象的な号。', category: 'issue', image: 'issue-08.JPG', meta: 'object / cover / archive', year: '2020', theme: 'object', status: 'published', link: 'issue-08.html' },
    { no: '09', title: 'Issue 09', description: 'イラスト主体で組まれた号。', category: 'issue', image: 'issue-09.JPG', meta: 'illustration / archive / cover', year: '2021', theme: 'illustration', status: 'published', link: 'issue-09.html' },
    { no: '10', title: 'Issue 10', description: '複数ロゴとタグが重なる記念号。', category: 'issue', image: 'issue-10.JPG', meta: 'anniversary / logo / archive', year: '2022', theme: 'anniversary', status: 'published', link: 'issue-10.html' },
    { no: '11', title: 'Issue 11', description: 'キャラクター表現が強い一冊。', category: 'issue', image: 'issue-11.JPG', meta: 'character / illustration / archive', year: '2023', theme: 'character', status: 'published', link: 'issue-11.html' },
    { no: '12', title: 'Issue 12', description: '人物写真とタイポが前面に出た最新フェーズ。', category: 'issue', image: 'issue-12.JPG', meta: 'photo / latest / cover story', year: '2024', theme: 'photo / typography', status: 'published', link: 'issue-12.html' },
    { no: '13', title: 'Upcoming Issue 13', description: '次号ローンチ予定。公開前はティザー表示に使う。', category: 'upcoming', image: 'issue-12.JPG', meta: 'upcoming / teaser / launch', year: '2025', theme: 'launching soon', status: 'upcoming', link: 'issue-13.html' }
  ],

  topics: [
    { label: 'Apparel', title: 'New Apparel Drop', description: '新作Tシャツ、フーディー、限定アパレルの情報を追加。', image: 'issue-08.JPG', meta: 'drop / wear / new', link: 'store.html' },
    { label: 'Goods', title: 'Objects / Goods', description: '雑誌から派生したグッズや小物のアーカイブ。', image: 'issue-10.JPG', meta: 'objects / product / archive', link: 'store.html' },
    { label: 'Topic', title: 'Launch / Event / News', description: '13号の告知、ポップアップ、展示、入荷情報など。', image: 'issue-12.JPG', meta: 'news / update / launch', link: '#' }
  ],

  products: [
    { label: 'Apparel', title: 'JOOOINT Tee', description: 'ロゴやカバーアートを落とし込んだTシャツ。', image: 'issue-03.JPG', price: 'TBD', status: 'coming soon', link: '#' },
    { label: 'Goods', title: 'Zine / Archive Item', description: 'アーカイブ性の高いグッズや小物の展開。', image: 'issue-10.JPG', price: 'TBD', status: 'coming soon', link: '#' },
    { label: 'Special', title: 'Issue 13 Drop', description: '13号に合わせた限定アイテムや関連商品。', image: 'issue-12.JPG', price: 'TBD', status: 'coming soon', link: '#' }
  ]
};
