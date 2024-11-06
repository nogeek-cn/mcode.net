


<template>

<!--  <div id="vip_notify">-->
  <div id="vip_notify" style="display: none">
    <br/>
      <DocTopToBeMember/>
    <br/>

    <div style="display: flex; align-items: center; justify-content: center;font-size: 28px">
      <h1 style="font-size: 28px; font-weight: 600; line-height:40px">
        您没有权限浏览 会员页面
      </h1>
    </div>

    <br/>

    <div style="display: flex; align-items: center; justify-content: center;">
      <h1 style="font-size: 28px; font-weight: 600; line-height:40px">
        请先成为会员
      </h1>
    </div>

    <br/>
      <DocTopToBeMember/>
    <br/>
  </div>

</template>
<script setup lang="ts">
import DocTopToBeMember from "./../DocTopToBeMember.vue";
</script>
<style>
</style>