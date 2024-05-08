<script lang="ts" setup>
import type { RouteLocationRaw } from 'vue-router';

type Props = {
  to: RouteLocationRaw;
  title: string;
};

defineProps<Props>();
</script>

<template>
  <NuxtLink
    class="relative inline-block text-sm font-bold uppercase overflow-hidden header--link"
    :data-replace="title.toUpperCase()"
    :to="to"
  >
    <span class="inline-block">{{ title }}</span>
  </NuxtLink>
</template>

<style scoped>
.header--link::after {
  @apply content-[''] absolute w-full left-0;
}

.header--link::after {
  @apply h-full top-0 text-accent;
  content: attr(data-replace);
  transform-origin: 100% 50%;
  transform: translate3d(0, 200%, 0);
  transition: transform 0.3s cubic-bezier(0.76, 0, 0.24, 1);
}

.header--link:hover::after {
  transform: translate3d(0, 0, 0);
}

.header--link span {
  transition: transform 0.3s cubic-bezier(0.76, 0, 0.24, 1);
}

.header--link:hover span {
  transform: translate3d(0, -200%, 0);
}
</style>
