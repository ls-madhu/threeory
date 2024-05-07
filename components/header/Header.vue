<template>
  <header
    class="sticky top-0 left-0 bg-background w-full h-20 px-4 md:border-b md:border-muted"
  >
    <div
      class="flex justify-between items-center gap-4 w-full h-full max-w-screen-xl mx-auto"
    >
      <nav class="hidden md:flex justify-evenly items-center gap-4 grow">
        <HeaderLink title="Home" to="#home" />
        <HeaderLink title="Artists" to="#artists" />
        <HeaderLink title="Events" to="#events" />
      </nav>
      <NuxtLink
        class="flex justify-center items-center self-start bg-background size-24 sm:size-28 md:size-36 lg:size-48 md:relative md:-top-2 lg:-top-5 rounded-full"
        to="/"
      >
        <NuxtImg
          alt="Threeory"
          class="w-full h-auto"
          src="/images/logo-white.webp"
        />
      </NuxtLink>
      <nav class="hidden md:flex justify-evenly items-center gap-4 grow">
        <HeaderLink title="Gallery" to="#gallery" />
        <HeaderLink title="Partners" to="#partners" />
        <HeaderLink title="Contact" to="#contact" />
      </nav>
    </div>
  </header>
</template>

<style scoped>
.menu--button__outline1 {
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  animation: morph 2s linear infinite;
}

.menu--button__outline2 {
  border-radius: 53% 47% 43% 57% / 51% 39% 61% 49%;
}

.menu--button__hamburger span::before {
  position: absolute;
  right: 0;
  display: inline-block;
  content: '';
  width: 12px;
  height: 2px;
  background: hsl(var(--foreground));
  transform: translateY(-6px);
  transition: transform 0.25s;
}

.menu--button__hamburger active span {
  transform: rotate (45deg);
}

.menu--button__hamburger active span::before {
  top: unset;
  width: 20px;
  transform: rotate(-90deg);
}

@keyframes morph {
  0% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
  50% {
    border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
  }
  I 100% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
}
</style>
