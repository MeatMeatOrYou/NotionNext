const CONFIG = {
  HEO_HOME_BANNER_ENABLE: true,

  HEO_SITE_CREATE_TIME: '2024-01-07', // 建站日期，用于计算网站运行的第几天

  // 首页顶部通知条滚动内容，如不需要可以留空 []
  HEO_NOTICE_BAR: [
    { title: '数据库持续更新', url: 'https://meatoryou.com' },
    { title: '详细内容请查看微博', url: 'https://weibo.com/5824153287' }
  ],

  // 英雄区(首页顶部大卡)
  HEO_HERO_TITLE_1: 'All For BTS',
  HEO_HERO_TITLE_2: '过去的他们和现在的他们一样可爱',
  HEO_HERO_TITLE_3: ' MEATORYOU.COM',
  HEO_HERO_TITLE_4: '请勿直接转载表格',
  HEO_HERO_TITLE_5: '那年今日',
  HEO_HERO_TITLE_LINK: 'https://7socute.notion.site/fce2ce690035468595640de3a5be3bec?v=f13f6a500d534d678828f46f9b82388d&pvs=4',

  // 英雄区显示三个置顶分类
  HEO_HERO_CATEGORY_1: { title: '必看精选', url: '/tag/必看精选' },
  HEO_HERO_CATEGORY_2: { title: '热门文章', url: '/tag/热门文章' },
  HEO_HERO_CATEGORY_3: { title: '实用教程', url: '/tag/实用教程' },

  // 英雄区右侧推荐文章标签, 例如 [推荐] , 最多六篇文章; 若留空白''，则推荐最近更新文章
  HEO_HERO_RECOMMEND_POST_TAG: '推荐',
  HEO_HERO_RECOMMEND_POST_SORT_BY_UPDATE_TIME: false, // 推荐文章排序，为`true`时将强制按最后修改时间倒序
  //   HERO_RECOMMEND_COVER: 'https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg', // 英雄区右侧图片

  // 右侧个人资料卡牌欢迎语，点击可自动切换
  HEO_INFOCARD_GREETINGS: [
    'ARMY',
    '整理上瘾',
    '间歇强迫症',
    '滤镜厚度613米',
    '紫色敏感人群',
    '阿fo防fo',
    '💜爱'
  ],
  HEO_INFO_CARD_URL: 'https://weibo.com/5824153287', // 个人资料底部按钮链接

  // 用户技能图标
  HEO_GROUP_ICONS: [
    {
      title_1: 'AfterEffect',
      img_1: '/images/heo/koya.gif',
      color_1: '#989bf8',
      title_2: 'Sketch',
      img_2: '/images/heo/shooky.gif',
      color_2: '#ffffff'
    },
    {
      title_1: 'Docker',
      img_1: '/images/heo/rj.gif',
      color_1: '#57b6e6',
      title_2: 'Photoshop',
      img_2: '/images/heo/mang_new1.gif',
      color_2: '#4082c3'
    },
    {
      title_1: 'FinalCutPro',
      img_1: '/images/heo/mang_new1.gif',
      color_1: '#ffffff',
      title_2: 'Python',
      img_2: '/images/heo/cooky.gif',
      color_2: '#ffffff'
    },
    {
      title_1: 'Swift',
      img_1: '/images/heo/cooky.gif',
      color_1: '#eb6840',
      title_2: 'Principle',
      img_2: '/images/heo/chimmy.gif',
      color_2: '#8f55ba'
    },
    {
      title_1: 'illustrator',
      img_1: '/images/heo/tata.gif',
      color_1: '#f29e39',
      title_2: 'CSS3',
      img_2: '/images/heo/koya.gif',
      color_2: '#2c51db'
    },
    {
      title_1: 'JS',
      img_1: '/images/heo/chimmy.gif',
      color_1: '#f7cb4f',
      title_2: 'HTML',
      img_2: '/images/heo/rj.gif',
      color_2: '#e9572b'
    },
    {
      title_1: 'Git',
      img_1: '/images/heo/shooky.gif',
      color_1: '#df5b40',
      title_2: 'Rhino',
      img_2: '/images/heo/tata.gif',
      color_2: '#1f1f1f'
    }
  ],

  HEO_SOCIAL_CARD: false, // 是否显示右侧，点击加入社群按钮
  HEO_SOCIAL_CARD_TITLE_1: '推特',
  HEO_SOCIAL_CARD_TITLE_2: 'Twitter',
  HEO_SOCIAL_CARD_TITLE_3: 'Twitter',
  HEO_SOCIAL_CARD_URL: 'https://twitter.com/MeatOrYou',

  // *****  以下配置无效，只是预留开发 ****
  // 菜单配置
  HEO_MENU_INDEX: true, // 显示首页
  HEO_MENU_CATEGORY: true, // 显示分类
  HEO_MENU_TAG: true, // 显示标签
  HEO_MENU_ARCHIVE: true, // 显示归档
  HEO_MENU_SEARCH: true, // 显示搜索

  HEO_POST_LIST_COVER: true, // 列表显示文章封面
  HEO_POST_LIST_COVER_HOVER_ENLARGE: false, // 列表鼠标悬停放大

  HEO_POST_LIST_COVER_DEFAULT: true, // 封面为空时用站点背景做默认封面
  HEO_POST_LIST_SUMMARY: true, // 文章摘要
  HEO_POST_LIST_PREVIEW: false, // 读取文章预览
  HEO_POST_LIST_IMG_CROSSOVER: true, // 博客列表图片左右交错

  HEO_ARTICLE_ADJACENT: true, // 显示上一篇下一篇文章推荐
  HEO_ARTICLE_COPYRIGHT: true, // 显示文章版权声明
  HEO_ARTICLE_RECOMMEND: true, // 文章关联推荐

  HEO_WIDGET_LATEST_POSTS: true, // 显示最新文章卡
  HEO_WIDGET_ANALYTICS: false, // 显示统计卡
  HEO_WIDGET_TO_TOP: true,
  HEO_WIDGET_TO_COMMENT: true, // 跳到评论区
  HEO_WIDGET_DARK_MODE: true, // 夜间模式
  HEO_WIDGET_TOC: true // 移动端悬浮目录
}
export default CONFIG
