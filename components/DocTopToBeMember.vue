<script setup lang="ts">
// let VPIconHeartMsg = "成为不止极客的付费会员";


interface DocTopToBeMemberConstants {
  VPIconHeartMsg?: string,
  VPIconHref?: String,
}
const props = withDefaults(defineProps<DocTopToBeMemberConstants>(), {
  VPIconHeartMsg: '成为不止极客的付费会员',
  VPIconHref: "http://nogeek.cn"
})

import VPLink from "vitepress/dist/client/theme-default/components/VPLink.vue";
import VPIconHeart from "vitepress/dist/client/theme-default/components/icons/VPIconHeart.vue";


</script>

<template>

  <div class="VPTeamMembers medium count-1">
    <div class="container">
      <div class="item">
        <div class="sp">
          <VPLink class="sp-link" :href="VPIconHref" no-icon>
            <VPIconHeart class="sp-icon"/>
            {{ VPIconHeartMsg }}
          </VPLink>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>


.sp-link {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 16px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-sponsor);
  background-color: var(--vp-c-bg-soft);
  transition: color 0.25s, background-color 0.25s;
}

.sp .sp-link.link:hover,
.sp .sp-link.link:focus {
  outline: none;
  color: var(--vp-c-white);
  background-color: var(--vp-c-sponsor);
}

.sp-icon {
  margin-right: 8px;
  width: 16px;
  height: 16px;
  fill: currentColor;
}
</style>