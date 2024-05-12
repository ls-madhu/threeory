<template>
  <header
    class="sticky top-0 left-0 z-50 bg-background w-full h-20 md:border-b md:border-muted"
  >
    <div
      class="flex justify-between items-center gap-4 w-full h-full max-w-screen-xl px-4 border-x border-muted mx-auto"
    >
      <nav class="hidden md:flex justify-evenly items-center gap-4 grow">
        <HeaderLink title="Home" to="#home" />
        <HeaderLink title="Events" to="#events" />
        <HeaderLink title="Artists" to="#artists" />
      </nav>
      <NuxtLink
        class="flex justify-center items-center self-start size-24 sm:size-28 md:size-36 lg:size-48 md:relative md:-top-2 lg:-top-5 rounded-full"
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
