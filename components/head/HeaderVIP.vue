<script setup lang="ts">

import {VPButton, VPTeamPageSection} from "vitepress/theme";
import {useRoute} from "vitepress";
import {onMounted, watch} from "vue";

import DocTopToBeMember from '../DocTopToBeMember.vue';

function shutDownNoGeekVip() {
  console.log('shutDownNoGeekVip')
  let element = document.getElementById("header-ad-noGeek-vip-pop");
  element.style.display = "none";
}

let route = useRoute();

onMounted(() => {
  watch(
      () => route.path,
      () => {
        let element = document.getElementById("header-ad-noGeek-vip-pop");
        element.style.display = "block";
        let parentElement = element.parentElement;
        console.log('parentElement.offsetWidth:' + parentElement.offsetWidth);
        document.getElementById("header-ad-noGeek-vip-pop")
            .setAttribute("style", 'width:' +parentElement.offsetWidth+ 'px')
      },
      {immediate: true}
  )
});

</script>

<template>

  <div id="header-ad-noGeek-vip-pop">
    <DocTopToBeMember VPIconHeartMsg="关闭弹窗" VPIconHref="" v-on:click="shutDownNoGeekVip" style="margin-bottom: 5px"/>
    <DocTopToBeMember />
    <DocTopToBeMember />
    <br/>
  </div>

</template>

<style>

#header-ad-noGeek-vip-pop {
  display: block;
  position: fixed;
  width: 100%;
  max-width: 688px;
  z-index: 10000000;
  align-content: center;

}

</style>