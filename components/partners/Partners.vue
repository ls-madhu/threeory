<script lang="ts" setup>
type Props = {
  logos: {
    link: string;
    name: string;
    src: string;
  }[];
  title: string;
};

defineProps<Props>();
</script>

<template>
  <div class="flex flex-col items-center bg-background">
    <h3 class="w-full font-bold text-center py-8 xs:border-b xs:border-muted">
      {{ title }}
    </h3>
    <div class="flex flex-col gap-6 py-6">
      <NuxtLink
        class="flex justify-center items-center bg-background p-2 max-w-36 aspect-video"
        :external="true"
        target="_blank"
        :to="logo.link"
        v-for="logo in logos"
      >
        <NuxtImg
          :alt="logo.name"
          class="w-full h-auto max-w-full max-h-full"
          :src="logo.src"
        />
      </NuxtLink>
    </div>
  </div>
</template>
