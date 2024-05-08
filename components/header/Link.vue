<script lang="ts" setup>
import Lenis from 'lenis';

type Props = {
  to: string;
  title: string;
};

const { to } = defineProps<Props>();

const onClick = (e: PointerEvent) => {
  e.preventDefault();

  const lenis = new Lenis();

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  lenis.scrollTo(to, {
    offset: -80,
  });
};

onUnmounted(() => {});
</script>

<template>
  <button
    class="relative inline-block text-sm font-bold uppercase overflow-hidden focus-visible:border-accent header--link"
    :data-replace="title.toUpperCase()"
    v-on:click="onClick"
  >
    <span class="inline-block">{{ title }}</span>
  </button>
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
