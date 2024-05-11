import {defineConfig} from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    ignoreDeadLinks: true,
    title: "পিএইচপি বাংলা ডকুমেন্টেশন",
    description:
        "একটি বিগেনার ফ্রেন্ডলি পিএইচপি কোর্স | আমরা যারা একদম নতুন তাদের সহজ ভাষায় পিএইচপি শিখানোর চেষ্টা করি ।",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: "হোম পেজ", link: "/"},
            {text: "ডকুমেন্টেশন", link: "/getting-started/what-is-php"},
            {text: "টিম", link: "/team"},
        ],

        sidebar: [
            {
                items: [
                    {text: 'পিএইচপি এর ইতিহাস', link: '/getting-started/what-is-php'},
                    {text: 'পিএইচপি ইনস্টলেশন', link: '/getting-started/install-php'},
                    {text: 'পিএইচপি ট্যাগ', link: '/getting-started/php-tags'},
                    {text: 'পিএইচপি ভেরিয়েবল', link: '/php-fundamentals/variables'},
                    {text: 'পিএইচপি ডেটা টাইপ', link: '/php-fundamentals/types-of-data-in-php'},
                    {text: 'পিএইচপি কনস্ট্যান্ট', link: '/php-fundamentals/constant'},
                    {text: 'পিএইচপি কমেন্টস', link: '/php-fundamentals/comments'},
                    {text: "পিএইচপি অপারেশন এবং এক্সপ্রেশন", link: "/class-02"},
                    {text: "পিএইচপি বেসিক", link: "/class-03"},
                    {text: "পিএইচপি ফাংশনাল প্রোগ্রামিং এবং Scope পরিচিতি", link: "/class-04"},
                    {text: "পিএইচপি Array পরিচিতি ও অপারেশন", link: "/class-05"},
                    {text: "পিএইচপি Array ভিত্তিক প্রয়োজনীয় কিছু ফাংশন", link: "/class-06"},
                    {text: "পিএইচপির সাহায্যে এইচটিএমএল ফর্ম ম্যানিপুলেশন", link: "/class-07"},
                    {text: "পিএইচপি দিয়ে HTML ফর্ম ডাটার Advance ম্যানিপুলেশন", link: "/class-08"},
                    {text: "পিএইচপি দিয়ে HTML ফর্ম ডাটার Advance ম্যানিপুলেশন", link: "/class-09"},
                    {text: "পিএইচপি প্রজেক্টঃ 01 - Build Image Gallery", link: "/class-10"},
                    {text: "পিএইচপি তারিখ ও সময় ফরম্যাটিং", link: "/class-11"},
                    {text: "PHP DateTime ফরম্যাটিংয়ে Carbon এর ব্যবহার", link: "/class-12"},
                ]
            },
        ],

        socialLinks: [
            {icon: "github", link: "https://github.com/polashmahmud/php"},
            {
                icon: "facebook",
                link: "https://www.facebook.com/learnwithpolashmahmud",
            },
            {icon: "youtube", link: "https://www.youtube.com/polashmahmud4"},
            {icon: "linkedin", link: "https://www.linkedin.com/in/polashmahmud4/"},
            {icon: "discord", link: "https://discord.gg/mktPP7n9xp"},
            {icon: "x", link: "https://twitter.com/polashmahmud4"},
        ],

        footer: {
            message: "Released under the MIT License.",
            copyright: "Copyright © 2023-present Polash Mahmud",
        },

        lastUpdated: {
            text: "Updated at",
            formatOptions: {
                dateStyle: "full",
                timeStyle: "medium",
            },
        },

        search: {
            provider: "local",
        },
    },
    head: [
        [
            "script",
            {
                async: "",
                src: "https://www.googletagmanager.com/gtag/js?id=G-7RDGBXJVRS",
            },
        ],
        [
            "script",
            {},
            `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-7RDGBXJVRS');`,
        ],
    ],
});
