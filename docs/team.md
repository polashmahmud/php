---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/8996190?v=4',
    name: 'পলাশ মাহমুদ',
    title: 'প্রধান সম্পাদক',
    links: [
      { icon: 'github', link: 'https://github.com/polashmahmud' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/polashmahmud4/' },
      { icon: 'facebook', link: 'https://www.facebook.com/polashmahmud4/' },
      { icon: 'x', link: 'https://twitter.com/polashmahmud4' }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/61494470?v=4',
    name: 'ওমর ফারুক',
    title: 'সম্পাদক',
    links: [
      { icon: 'github', link: 'https://github.com/Umar-Faruk96' },
      { icon: 'linkedin', link: 'https://linkedin.com/in/omorfaruksheikhraihan' },
      { icon: 'x', link: 'https://twitter.com/RashedOmor' },
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/61494470?v=4',
    name: 'রাসেল হোসাইন ',
    title: 'সহকারী সম্পাদক',
    links: [
      { icon: 'github', link: 'https://github.com/Rasel2f' },
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      ডকুমেন্টেশন টিম
    </template>
    <template #lead>
      ডকুমেন্টেশন টিম একটি স্বেচ্ছাসেবক দল, যারা এই পিএইচপি বেসিক কোর্সের ডকুমেন্টেশনটির সম্পাদনায় রত। এই দলে আপনিও যোগদান করতে পারেন। ডকুমেন্টেশনটির সমৃদ্ধি ও উন্নতির পথে আপনার যেকোন অবদান প্রশংসনীয়, উৎসাহব্যঞ্জক ও অনস্বীকার্য।
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>