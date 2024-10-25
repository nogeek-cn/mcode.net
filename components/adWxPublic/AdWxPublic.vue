<script setup lang="ts">

import {onMounted, ref, watch} from 'vue'
import {useRoute} from "vitepress";

const wxPublicQrList = [
  '/qrimg/wxpublic/out/00.png',
  '/qrimg/wxpublic/out/01.png',
  '/qrimg/wxpublic/out/02.png',
  '/qrimg/wxpublic/out/03.png',
  '/qrimg/wxpublic/out/04.png',
  '/qrimg/wxpublic/out/05.png',
  '/qrimg/wxpublic/out/06.png',
  '/qrimg/wxpublic/out/07.png',
  '/qrimg/wxpublic/out/08.png',
  '/qrimg/wxpublic/out/09.png',
  '/qrimg/wxpublic/out/10.png'
];


function randomWxPublicQr(): string {
  return wxPublicQrList[Math.floor(Math.random() * (wxPublicQrList.length - 1))]
}

let wxPublicQr = ref(randomWxPublicQr());

let route = useRoute();

onMounted(() => {
  watch(
      () => route.path,
      () => {
        wxPublicQr.value = randomWxPublicQr();
        console.log('watch.AdWxPublic.wxPublicQr: ' + wxPublicQr);
      },
      { immediate: true}
  )
})

// setInterval(function () {
//   wxPublicQr.value = randomWxPublicQr();
//   console.log('setInterval.AdWxPublic.wxPublicQr: ' + wxPublicQr);
//     },500)
</script>

<template>
<!--  <div style="align-self: center" ><h2>微信公众号</h2></div>-->
  <!-- (--vp-c-bg-soft) 这个带有白色和黑色的 主题都有 -->
  <div style="background-color: var(--vp-c-bg-soft)">
    <div style="margin: 20px 20px 20px 20px">
      <img v-bind:src="wxPublicQr" alt="">
    </div>
  </div>
  <br>
</template>