<script setup lang="ts">

import ProductPage from "./atomic/ProductPage.vue";
import ProductPageTitle from "./atomic/ProductPageTitle.vue";
import ProductMembers from "./atomic/ProductMembers.vue";
import ProductPageSection from "./atomic/ProductPageSection.vue";

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
    avatar: 'https://github.com/nogeek-cn.png',
    name: '1',
    title: '<a>111</a>',
    links: [
      {icon: 'github', link: 'https://github.com/yyx990803'},
      {icon: 'twitter', link: 'https://twitter.com/youyuxi'}
    ],
    sponsor: 'https://baidu.com'
  },

  {
    avatar: 'https://github.com/nogeek-cn.png',
    name: '2',
    title: '<a>222</a>',
    links: [
      {icon: 'github', link: 'https://github.com/yyx990803'},
      {icon: 'twitter', link: 'https://twitter.com/youyuxi'}
    ],
    sponsor: 'https://google.com'
  }

]
</script>

<template>
  <ProductPage>
    <ProductPageTitle>
      <template #title>Our Team</template>
      <template #lead>Our Team lead</template>
    </ProductPageTitle>
    <ProductMembers size="medium" :members="coreMembers"/>
    <ProductPageSection>
      <template #title>Partners</template>
      <template #lead>Partners lead</template>
      <template #members>
        <ProductMembers size="small" :members="partners"/>
      </template>
    </ProductPageSection>
  </ProductPage>
</template>



<style scoped>
</style>
