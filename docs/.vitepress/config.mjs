import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "PHP Basic Course",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'হোম পেজ', link: '/' },
      { text: 'ডকুমেন্টেশন', link: '/class-01' }
    ],

    sidebar: [
      {
        text: 'ক্লাস সমূহ',
        items: [
          { text: 'প্রথম ক্লাস', link: '/class-01' },
          { text: 'দ্বিতীয় ক্লাস', link: '/class-02' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/polashmahmud/php' },
      { icon: 'facebook', link: 'https://www.facebook.com/learnwithpolashmahmud' },
      { icon: 'youtube', link: 'https://www.youtube.com/polashmahmud4' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/polashmahmud4/' },
    ]
  }
})
