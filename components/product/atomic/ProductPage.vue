<template>
  <div class="ProductPage">
    <slot />
  </div>
</template>

<style scoped>
.ProductPage {
  //padding-bottom: 96px;
}

@media (min-width: 768px) {
  .ProductPage {
    //padding-bottom: 128px;
  }
}

:slotted(.ProductPageSection + .ProductPageSection),
:slotted(.ProductMembers + .ProductPageSection) {
  margin-top: 64px;
}

:slotted(.ProductMembers + .ProductMembers) {
  margin-top: 24px;
}

@media (min-width: 768px) {
  :slotted(.ProductPageTitle + .ProductPageSection) {
    margin-top: 16px;
  }

  :slotted(.ProductPageSection + .ProductPageSection),
  :slotted(.ProductMembers + .ProductPageSection) {
    //margin-top: 96px;
  }
}

:slotted(.ProductMembers) {
  padding: 0 24px;
}

@media (min-width: 768px) {
  :slotted(.ProductMembers) {
    padding: 0 48px;
  }
}

@media (min-width: 960px) {
  :slotted(.ProductMembers) {
    padding: 0 64px;
  }
}
</style>
<script setup>
</script>