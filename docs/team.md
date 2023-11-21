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
      { icon: 'facebook', link: 'https://www.facebook.com/polashmahmud4/' }
    ]
  },
  {
    avatar: 'https://avatars.githubusercontent.com/u/61494470?v=4',
    name: 'ওমর ফারুক',
    title: 'সম্পাদক',
    links: [
      { icon: 'github', link: 'https://github.com/Umar-Faruk96' },
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      ডকুমেন্টেশন টীম
    </template>
    <template #lead>
      ডকুমেন্টেশন টীম একটি স্বেচ্ছাসেবক দল যারা পিএইচপি ব‍্যাসিক কোর্সের ডকুমেন্টেশন সম্পাদনা করে। আপনিও যোগদান করতে পারেন। আপনার যেকোন ধরনের সাহায্য স্বাগতম।
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>