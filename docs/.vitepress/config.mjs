import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "পিএইচপি বেসিক কোর্স",
  description: "একটি বিগেনার ফ্রেন্ডলি পিএইচপি কোর্স | আমরা যারা একদম নতুন তাদের সহজ ভাষায় পিএইচপি শিখানোর চেষ্টা করি ।",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'হোম পেজ', link: '/' },
      { text: 'ডকুমেন্টেশন', link: '/class-01' },
      { text: 'টিম', link: '/team' },
    ],

    sidebar: [
      {
        text: 'ক্লাস সমূহ',
        items: [
          { text: 'প্রথম ক্লাস', link: '/class-01' },
          { text: 'দ্বিতীয় ক্লাস', link: '/class-02' },
          { text: 'তৃতীয় ক্লাস', link: '/class-03' },
          { text: 'চতুর্থ ক্লাস', link: '/class-04' },
          { text: 'পঞ্চম ক্লাস', link: '/class-05' },
          { text: 'ষষ্ঠ ক্লাস', link: '/class-06' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/polashmahmud/php' },
      { icon: 'facebook', link: 'https://www.facebook.com/learnwithpolashmahmud' },
      { icon: 'youtube', link: 'https://www.youtube.com/polashmahmud4' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/polashmahmud4/' },
      { icon: 'discord', link: 'https://discord.gg/mktPP7n9xp' },
      { icon: 'twitter', link: 'https://twitter.com/polashmahmud4' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Polash Mahmud'
    },

    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },

    search: {
      provider: 'local'
    }
  }
})
