<template>
  <div
      style="flex-grow: 1;flex-shrink: 0;width: 100%;
      justify-content: center;align-items: center; display: flex; display: -webkit-flex; margin: 0 auto;">
    <div class="VPDoc" style="padding:32px 24px 0px; width: 100%; max-width: 960px;display: inline-block; ">
      <div class="container" style="margin: 0 auto;width:100%; display: inline-block; ">

        <DocTopToBeMember
            VPIconHeartMsg="付费产品" VPIconHref="#productList"
            style="margin-top: 20px; margin-bottom: 10px; width: 100%"/>

        <h1 id="productList"></h1>
        <div>
          <BookAndMovie/>
        </div>


        <!--  隐性的锚点 -->
        <h1 id="CallMe"></h1>
        <DocTopToBeMember
            VPIconHeartMsg="联系我购买" VPIconHref="#CallMe"
            style="margin-top: 20px; margin-bottom: 10px; width: 100%"/>

        <!--    套的这个 div 可以实现居中   -->
<!--        <div style="justify-content: center;align-items: center; display: flex; display: -webkit-flex; margin: 0 auto;">-->
<!--          <div style="width: 30%">-->
<!--            <a href="https://qm.qq.com/q/u7oxjkwN9K" target="_blank">-->
<!--              <img src="/qrimg/QQ/QQ.png" style="align-self: center" alt="QQ"/>-->
<!--            </a>-->
<!--          </div>-->
<!--        </div>-->

      </div>
    </div>

  </div>

</template>

<script setup>
import BookAndMovie from "./BookAndMovie.vue";
import DocTopToBeMember from "../DocTopToBeMember.vue";
</script>