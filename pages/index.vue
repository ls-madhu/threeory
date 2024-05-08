<script lang="ts" setup>
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

const initSmoothScroll = () => {
  const lenis = new Lenis();

  lenis.on('scroll', ScrollTrigger.update);

  const scrollFn = (time: number) => {
    lenis.raf(time);
    requestAnimationFrame(scrollFn);
  };

  requestAnimationFrame(scrollFn);
};

onMounted(() => {
  initSmoothScroll();
});
</script>

<template>
  <Header />
  <Section id="home"></Section>
  <Section id="artists">
    <template #heading>Featured Artists</template>
  </Section>
  <Section id="events">
    <template #heading>Upcoming Events</template>
  </Section>
  <Section id="gallery">
    <template #heading>Gallery</template>
  </Section>
  <Section id="partners">
    <template #heading>Our Partners</template>
  </Section>
  <Section id="contact">
    <template #heading>Contact Us</template>
  </Section>
  <Footer />
</template>
