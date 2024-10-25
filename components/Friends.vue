<script setup lang="ts">

import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'

const coreMembers = [
  {
    avatar: 'https://www.github.com/yyx990803.png',
    name: 'Evan You',
    title: 'Creator',
    org: "org",
    links: [
      {icon: 'github', link: 'https://github.com/yyx990803'},
      {icon: 'twitter', link: 'https://twitter.com/youyuxi'}
    ],
    sponsor: 'https://codeedu.cn'
  }
]

const partners = [

  {
    avatar: '1',
    name: '1',
    title: '<a>111</a>',
    links: [
      {icon: 'github', link: 'https://github.com/yyx990803'},
      {icon: 'twitter', link: 'https://twitter.com/youyuxi'}
    ],
    sponsor: 'https://codeedu.cn'
  },

  {
    avatar: '2',
    name: '2',
    title: '<a>222</a>',
    links: [
      {icon: 'github', link: 'https://github.com/yyx990803'},
      {icon: 'twitter', link: 'https://twitter.com/youyuxi'}
    ]
  }

]
</script>

<template>
  <VPTeamPage>
    <VPTeamPageTitle>
      <template #title>Our Team</template>
      <template #lead>Our Team lead</template>
    </VPTeamPageTitle>
    <VPTeamMembers size="medium" :members="coreMembers"/>
    <VPTeamPageSection>
      <template #title>Partners</template>
      <template #lead>Partners lead</template>
      <template #members>
        <VPTeamMembers size="small" :members="partners"/>
      </template>
    </VPTeamPageSection>
  </VPTeamPage>
</template>



<style scoped>
</style>
