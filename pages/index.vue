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
  <Section class="h-dvh overflow-hidden" id="home" inner-class="relative">
    <NuxtImg
      alt=""
      class="w-full h-full object-cover"
      src="/images/hero-bg.webp"
    />
    <div
      class="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent to-background"
    />
  </Section>
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
    <div class="bg-muted">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-[1px]">
        <div class="bg-background p-4">
          <p class="text-center font-bold sm:text-left sm:text-lg">
            For inquiries, wholesale ticket purchases, and accessibility
            arrangements, please reach out to us at :
          </p>
          <div class="grid grid-cols-2 gap-x-4 gap-y-8 px-4 py-8">
            <ContactInfoItem icon="fe:phone" name="Phone">
              <a href="tel:+1234567890">+(123) 456-7890</a></ContactInfoItem
            >
            <ContactInfoItem icon="heroicons:envelope-solid" name="Email"
              ><a href="mailto:help@threeory.com"
                >help@threeory.com</a
              ></ContactInfoItem
            >
            <ContactInfoItem
              icon="fluent:location-ripple-16-filled"
              name="Location"
              >Hyderabad</ContactInfoItem
            >
            <ContactInfoItem icon="bxl:instagram-alt" name="Socials">
              <div class="flex gap-x-4">
                <NuxtLink
                  :external="true"
                  target="_blank"
                  to="https://www.instagram.com/threeoryband"
                  >Instagram</NuxtLink
                >
                <NuxtLink
                  :external="true"
                  target="_blank"
                  to="https://www.youtube.com/@threeoryband"
                  >Youtube</NuxtLink
                >
              </div>
            </ContactInfoItem>
          </div>
        </div>
        <form
          class="flex flex-col gap-y-2 bg-background font-sans-secondary text-sm font-medium p-4"
        >
          <ContactInput placeholder="Name" type="text" />
          <ContactInput placeholder="Email" type="email" />
          <ContactInput placeholder="Phone" type="tel" />
          <textarea placeholder="Message" rows="5" />
          <Button>Submit</Button>
        </form>
      </div>
    </div>
  </Section>
  <button
    aria-label="WhatsApp"
    class="fixed right-0 bottom-0 m-8 border-transparent"
  >
    <Icon aria-hidden name="logos:whatsapp-icon" size="40" />
  </button>
  <Footer />
</template>
