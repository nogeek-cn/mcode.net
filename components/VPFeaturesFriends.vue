<template>
  <VPFeatures :features="footFriendList"
              style="max-width: 700px; margin: 0 auto; margin-top: -10px; margin-bottom: 140px"
  />
</template>

<script lang="ts" setup>

import VPFeatures from "vitepress/dist/client/theme-default/components/VPFeatures.vue";

const footFriendList = [];
footFriendList.push({
  title: 'title-1',
  details: 'details-1',
  link: 'link-1',
  // 显示更新时间
  linkText: 'linkText-1'
})

footFriendList.push({
  title: 'title-2',
  details: 'details-2',
  link: 'link-2',
  // 显示更新时间
  linkText: 'linkText-2'
})
footFriendList.push({
  title: 'title-3',
  details: 'details-3',
  link: 'link-3',
  // 显示更新时间
  linkText: 'linkText-3'
})
footFriendList.push({
  title: 'title-4',
  details: 'details-4',
  link: 'link-4',
  // 显示更新时间
  linkText: 'linkText-4'
})
</script>
