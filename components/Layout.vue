<template>
  <Layout>
    <template #doc-before>
      <VipNotify/>
    </template>

    <template #doc-footer-before>
      <NoGeekProduct/>
    </template>

    <template #doc-after>
<!--      <Comment style="margin-top: 24px;" />-->
<!--      <Friends />-->
      <FootFriends/>
    </template>

    <template #not-found>
      <NotFound />
    </template>

    <template #aside-outline-before>
      <AdWxPublic/>
    </template>


  </Layout>

<!--
aside-top
aside-outline-before

目录

aside-outline-after
aside-ads-before
aside-ads-after
aside-bottom
-->
</template>

<script lang="ts" setup>
import DefaultTheme from 'vitepress/theme'
// import Comment from './Comment.vue';
import NotFound from './NotFound.vue';
import Friends from './Friends.vue';

import DocTopToBeMember from './DocTopToBeMember.vue';
import AdComponent from "./ad/AdComponent.vue";



import FootFriends from "./foot/FootFriends.vue";

import HeaderVIP from "./head/HeaderVIP.vue";


import NoGeekProduct from "./product/NoGeekProduct.vue";
import AdWxPublic from "./adWxPublic/AdWxPublic.vue";
import VipNotify from "./401/VipNotify.vue";

const { Layout } = DefaultTheme
</script>
