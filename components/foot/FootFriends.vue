<script setup lang="ts">
import {default as friendLinksDefault} from '../../.vitepress/friendLinks'

import {VPButton, VPTeamPageSection} from "vitepress/theme";

</script>


<template>
  <main class="footer">
    <VPTeamPageSection>
      <template #title>friends</template>
    </VPTeamPageSection>
    <div v-if="friendLinksDefault.friendLinks" class="actions">
      <div v-for="action in friendLinksDefault.friendLinks" :key="action.href" class="action">
        <VPButton
            tag="a"
            size="medium"
            theme="sponsor"
            :text="action.label"
            :href="action.href"
        />
      </div>
    </div>

  </main>

</template>


<style>
.actions {
  display: flex;
  flex-wrap: wrap;
  margin: -6px;
  padding-top: 24px;

  margin-right: 10%;
  margin-left: 10%;
}

.VPHero.has-image .actions {
  justify-content: center;
}

@media (min-width: 640px) {
  .actions {
    padding-top: 32px;
  }
}

@media (min-width: 960px) {
  .VPHero.has-image .actions {
    justify-content: center;
  }
}

.action {
  flex-shrink: 0;
  padding: 6px;
}
</style>