<script lang="ts" setup>
import { CalendarView, CalendarViewHeader } from 'vue-simple-calendar';

import '../../node_modules/vue-simple-calendar/dist/style.css';
import '../../node_modules/vue-simple-calendar/dist/css/default.css';
import '../../node_modules/vue-simple-calendar/dist/css/holidays-us.css';
</script>

<template>
  <div
    class="flex flex-col flex-1 w-full font-sans-secondary text-foreground overflow-x-scroll"
    id="app"
  >
    <CalendarView class="w-full"></CalendarView>
  </div>
</template>

<style>
.cv-header-days,
.cv-header-day,
.cv-weeks,
.cv-week,
.cv-day,
.cv-item {
  @apply border-muted;
}

.cv-wrapper {
  min-width: 800px;
}

.cv-header-days {
}

.cv-header-day {
  @apply p-2.5 !text-sm font-semibold text-accent uppercase;
}

.cv-week {
  @apply min-h-24 md:min-h-28;
}

.cv-weekdays {
  @apply h-full;
}

.cv-day {
  @apply justify-center items-center;
}

.cv-day-number {
  @apply w-auto self-center;
}

.outsideOfMonth {
  @apply text-foreground-secondary bg-foreground-secondary/10 cursor-not-allowed;
}
</style>
