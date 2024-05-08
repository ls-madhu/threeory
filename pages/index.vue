<script lang="ts" setup>
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

const partners = [
  {
    title: 'Principal Founders',
    logos: [
      {
        link: 'https://open.spotify.com/',
        name: 'Spotify',
        src: '/images/placeholder-logo.png',
      },
    ],
  },
  {
    title: 'Programme Partners',
    logos: [
      {
        link: 'https://open.spotify.com/',
        name: 'Spotify',
        src: '/images/placeholder-logo.png',
      },
      {
        link: 'https://open.spotify.com/',
        name: 'Spotify',
        src: '/images/placeholder-logo.png',
      },
      {
        link: 'https://open.spotify.com/',
        name: 'Spotify',
        src: '/images/placeholder-logo.png',
      },
    ],
  },
  {
    title: 'Venue Partners',
    logos: [
      {
        link: 'https://open.spotify.com/',
        name: 'Spotify',
        src: '/images/placeholder-logo.png',
      },
      {
        link: 'https://open.spotify.com/',
        name: 'Spotify',
        src: '/images/placeholder-logo.png',
      },
      {
        link: 'https://open.spotify.com/',
        name: 'Spotify',
        src: '/images/placeholder-logo.png',
      },
    ],
  },
  {
    title: 'Media Partners',
    logos: [
      {
        link: 'https://open.spotify.com/',
        name: 'Spotify',
        src: '/images/placeholder-logo.png',
      },
      {
        link: 'https://open.spotify.com/',
        name: 'Spotify',
        src: '/images/placeholder-logo.png',
      },
      {
        link: 'https://open.spotify.com/',
        name: 'Spotify',
        src: '/images/placeholder-logo.png',
      },
    ],
  },
];

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
    <div class="relative xs:bg-muted w-full h-full">
      <div
        class="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 w-full h-full gap-[1px]"
      >
        <Partners
          :logos="partner.logos"
          :title="partner.title"
          v-for="partner in partners"
        />
      </div>
    </div>
  </Section>
  <Section id="contact">
    <template #heading>Contact Us</template>
  </Section>
  <Footer />
</template>
