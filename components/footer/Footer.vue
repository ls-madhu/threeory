<template>
  <footer class="bg-background w-full h-20 border-t border-muted">
    <div
      class="flex flex-col gap-4 sm:flex-row justify-center items-center sm:justify-between max-w-screen-xl w-full h-full font-sans-secondary text-xs font-medium text-foreground-secondary px-4 border-x border-muted mx-auto"
    >
      <p>&copy; 2024 threeory.com. All rights reserved.</p>
      <div class="flex flex-row gap-4">
        <NuxtLink class="hover:underline hover:underline-offset-4" to="/"
          >Terms & Conditions</NuxtLink
        >
        <NuxtLink class="hover:underline hover:underline-offset-4" to="/"
          >Privacy Policy</NuxtLink
        >
      </div>
    </div>
  </footer>
</template>
