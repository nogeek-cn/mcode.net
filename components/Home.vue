<template>
  <VPHero name="MCODE 微码" text="始于极客 不止极客" :tagline="tagline" :image="image" :actions="actions"/>

  <div v-for="(featureOne, index) in homeFeatureDefault.homeFeatureList">
    <VPFeatures :features="featureOne"/>
  </div>

  <BookAndMovieComponent/>

  <NoGeekProduct/>
</template>

<script setup lang="ts">
import VPHero from 'vitepress/dist/client/theme-default/components/VPHero.vue'
import VPFeatures from 'vitepress/dist/client/theme-default/components/VPFeatures.vue'
import {data as pages} from '../.vitepress/create.data'

import {default as homeFeatureDefault} from '../.vitepress/homeFeature'


import BookAndMovieComponent from "./bookAndMovie/BookAndMovieComponent.vue";
import DocTopToBeMember from './DocTopToBeMember.vue';
import NoGeekProduct from "./product/NoGeekProduct.vue";
import {useRoute} from "vitepress";
import {onMounted, watch} from "vue";

const tagline = `一些特别有用的技术组件 <br/>` +
    `经验丰富的首席技术官和创始人`
const image = {light: '/MCodeAvatar.png', dark: '/MCodeAvatar.png'}
const actions = [
  {
    text: '付费产品',
    link: "#productList",
    theme: 'alt'
  },
  {
    text: '联系我购买',
    link: "#CallMe",
    theme: 'alt'
  },
  {
    text: '❤ UMLCN ❤',
    link: "http://umlcn.com",

  },
]

let route = useRoute();


onMounted(() => {
  watch(
      () => route.path,
      () => {
        document.getElementsByClassName("VPHome")
            [0].style.paddingBottom = '30px';
      },
      {immediate: true}
  );
});

</script>

<style scoped>
:deep(.details) {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-all;
}

.VPContent {
  .VPHome {
    padding-bottom: 0px;
  }
}
</style>
