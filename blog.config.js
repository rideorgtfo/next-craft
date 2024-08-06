const BLOG = {
  lang: 'ru-RU', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW']
  appearance: 'auto', // ['light', 'dark', 'auto'],
  font: 'sans-serif', // ['sans-serif', 'serif']
  lightBackground: '#FFFFFF', // use hex value, don't forget '#' e.g #fffefc
  darkBackground: '#222222', // use hex value, don't forget '#'
  autoCollapsedNavBar: false, // The automatically collapsed navigation bar
  craftConfigShareUrl: process.env.CRAFT_CONFIG_SHARE_URL
    ? process.env.CRAFT_CONFIG_SHARE_URL
    : 'https://rideorgtfo.craft.me/kUoH5a9sFOIED4', // The link to share your craft config
  seo: {
    keywords: ['Blog', 'rideorgtfo']
  },
  analytics: {
    provider: '', // Currently support Umami, fill with 'umami' to enable or leave it empty to disable it.
    umamiConfig: {
      scriptUrl: '', // The url of your Umami script
      websiteId: '' // The website id of your Umami instance
    }
  },
  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = BLOG
