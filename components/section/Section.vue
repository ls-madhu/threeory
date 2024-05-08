<template>
  <section class="w-full flex flex-col section" v-bind="$attrs">
    <div class="border-y border-muted" v-if="!!$slots.heading">
      <h2
        class="w-full max-w-screen-xl mx-auto outlined-text text-3xl font-bold text-center text-background tracking-wide uppercase p-6 border-x border-muted sm:text-6xl md:text-7xl lg:text-8xl md:text-left"
      >
        <slot name="heading" />
      </h2>
    </div>
    <div class="grow w-full max-w-screen-xl border-x border-muted mx-auto">
      <slot />
    </div>
  </section>
</template>

<style scoped>
.outlined-text {
  text-shadow: 1px 1px 0 hsl(var(--accent)), -1px 1px 0 hsl(var(--accent)),
    -1px -1px 0 hsl(var(--accent)), 1px -1px 0 hsl(var(--accent));
}

@media (min-width: 640px) {
  .outlined-text {
    text-shadow: 2px 2px 0 hsl(var(--accent)), -2px 2px 0 hsl(var(--accent)),
      -2px -2px 0 hsl(var(--accent)), 2px -2px 0 hsl(var(--accent));
  }
}
</style>
