<script setup>
// Replacement for GitBook {% tabs %}. All panels are rendered (v-show) so the
// content stays in the static HTML and in local search.
import { ref } from 'vue'

defineProps({ titles: { type: Array, required: true } })
const active = ref(0)
</script>

<template>
  <div class="gb-tabs">
    <div class="gb-tabs-nav" role="tablist">
      <button
        v-for="(title, i) in titles"
        :key="i"
        type="button"
        role="tab"
        :aria-selected="active === i"
        :class="{ active: active === i }"
        @click="active = i"
      >
        {{ title }}
      </button>
    </div>
    <div v-for="(title, i) in titles" v-show="active === i" :key="i" class="gb-tabs-panel" role="tabpanel">
      <slot :name="`tab-${i}`" />
    </div>
  </div>
</template>

<style scoped>
.gb-tabs {
  margin: 16px 0;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
}
.gb-tabs-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  padding: 0 12px;
  border-bottom: 1px solid var(--vp-c-divider);
}
.gb-tabs-nav button {
  padding: 10px 12px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
  border-bottom: 2px solid transparent;
  margin-bottom: -1px;
}
.gb-tabs-nav button:hover {
  color: var(--vp-c-text-1);
}
.gb-tabs-nav button.active {
  color: var(--vp-c-brand-1);
  border-bottom-color: var(--vp-c-brand-1);
}
.gb-tabs-panel {
  padding: 0 16px;
  overflow-x: auto;
}
</style>
