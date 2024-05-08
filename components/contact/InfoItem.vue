<script lang="ts" setup>
import type { FunctionalComponent } from 'vue';

type Props = {
  icon: string;
  name: string;
};

defineProps<Props>();
</script>

<template>
  <div class="flex flex-col gap-2 pl-4 border-l-2 border-accent">
    <div
      class="flex items-center gap-x-2 text-sm font-medium text-accent tracking-wider"
    >
      <Icon class="text-base" :name="icon" />
      <h3 class="uppercase">{{ name }}</h3>
    </div>
    <div class="font-sans-secondary text-sm font-medium select-text">
      <slot />
    </div>
  </div>
</template>
