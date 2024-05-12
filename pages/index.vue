<script lang="ts" setup>
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import DoubleImageEffect from '~/utils/double-image-effect';

const gsapWrapper = ref();
let ctx: gsap.Context;

const artists = [
  {
    name: 'Mark Talur',
    image: '/images/artists/mark-talur.jpeg',
    role: 'Keyboard',
  },
  {
    name: 'Datta Sai Prasa',
    image: '/images/artists/datta-sai-prasa.jpeg',
    role: 'Violin',
  },
  {
    name: 'Tarun Vishal',
    image: '/images/artists/tarun-vishal.jpeg',
    role: 'Drums',
  },
  { name: 'Imtiakum', image: '/images/artists/imtiakum.jpeg', role: 'Bass' },
  {
    name: 'Sentilong Ao',
    image: '/images/artists/sentilong.jpeg',
    role: 'Guitar',
  },
  {
    name: 'Syntyche Mongro',
    image: '/images/artists/syntyche-mongro.jpeg',
    role: 'Female Vocalist',
  },
  {
    name: 'Akhileshwar Chennu',
    image: '/images/artists/akhileshwar-chennu.jpeg',
    role: 'Male Vocalist',
  },
  {
    name: 'Irfan Ahmed Khan',
    image: '/images/artists/irfan-ahmed-khan.jpeg',
    role: 'Sitar',
  },
  {
    name: 'Pavan Kumar MS',
    image: '/images/artists/pavan-kumar.jpeg',
    role: 'Tabala',
  },
];

const events = [
  {
    date: '10th May 2024',
    name: 'Lord Of The Drinks',
    location: 'Hyderabad',
  },
  {
    date: '19th May 2024',
    name: 'Akan Brewing Co.',
    location: 'Delhi',
  },
  {
    date: '26th May 2024',
    name: 'One Golf',
    location: 'Lucknow',
  },
  {
    date: '6th June 2024',
    name: 'Pablo The Art Lounge Cafe',
    location: 'Hyderabad',
  },
  {
    date: '13th June 2024',
    name: 'Flea Market (The Saga)',
    location: 'Jaipur',
  },
  {
    date: '4th July 2024',
    name: 'Mamalola Pent House',
    location: 'Hyderabad',
  },
  {
    date: '15th August 2024',
    name: '36 Downtown',
    location: 'Chennai',
  },
];

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

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const initSmoothScroll = () => {
  const lenis = new Lenis();

  lenis.on('scroll', ScrollTrigger.update);

  const scrollFn = (time: number) => {
    lenis.raf(time);
    requestAnimationFrame(scrollFn);
  };

  requestAnimationFrame(scrollFn);
};

const scroll = (
  columns: Function[],
  grid: gsap.DOMTarget,
  mergedItems: {
    element: any;
    column: number;
    wrapper: Function;
    image: Function;
  }[]
) => {
  columns.forEach((column, pos) => {
    gsap.to(column, {
      ease: 'none',
      yPercent: -1 * pos * 10,
      scrollTrigger: {
        trigger: grid,
        start: 'clamp(top bottom)',
        end: 'clamp(bottom top)',
        scrub: true,
      },
    });
  });

  mergedItems.forEach((item) => {
    gsap.fromTo(
      item.image,
      {
        y: 0,
      },
      {
        ease: 'none',
        scrollTrigger: {
          trigger: item.element,
          start: 'clamp(top bottom)',
          end: 'clamp(bottom top)',
          scrub: true,
        },
        y: -0,
      }
    );
  });
};

onMounted(() => {
  ctx = gsap.context((self) => {
    const grid = self.selector!('.columns');
    const columns = [...self.selector!('.column')];
    const items = columns.map((column, pos) => {
      return [...self.selector!('.column__item')].map((item) => ({
        element: item,
        column: pos,
        wrapper: self.selector!('.column__item-imgwrap'),
        image: self.selector!('.column__item-img'),
      }));
    });
    const mergedItems = items.flat();

    initSmoothScroll();
    [...self.selector!('.double')].forEach((el) => new DoubleImageEffect(el));
    scroll(columns, grid, mergedItems);
  }, gsapWrapper.value);
});

onUnmounted(() => {
  ctx.revert();
});
</script>

<template>
  <div ref="gsapWrapper">
    <Header />
    <Section class="h-dvh overflow-hidden" id="home" inner-class="relative">
      <NuxtImg
        alt="Threeory Band Members"
        class="w-full h-full object-cover opacity-75"
        src="/images/hero.jpeg"
      />
      <div
        class="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent to-background"
      />
    </Section>
    <Section id="events" inner-class="p-4">
      <template #heading>Events Calendar</template>
      <Calendar />
      <AccordionRoot
        class="flex flex-col gap-y-2 bg-background mt-4"
        type="multiple"
        :collapsible="true"
      >
        <Event
          :date="event.date"
          :index="index"
          :location="event.location"
          :name="event.name"
          v-for="(event, index) in events"
        />
      </AccordionRoot>
    </Section>
    <Section id="artists" inner-class="p-4">
      <template #heading>Featured Artists</template>
      <div
        class="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-6"
      >
        <div
          class="flex flex-col border border-muted"
          v-for="artist in artists"
        >
          <div
            class="double"
            data-effect="1"
            :style="{ backgroundImage: `url(${artist.image})` }"
          ></div>
          <h3 class="font-bold p-2">{{ artist.name }}</h3>
        </div>
      </div>
    </Section>
    <Section id="gallery" inner-class="p-4 overflow-hidden">
      <template #heading>Gallery</template>
      <div
        class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-7 place-items-center relative w-full overflow-hidden columns"
      >
        <div
          :class="[
            'relative grid grid-cols-[100%] gap-7 w-full will-change-transform -mb-[250px] xs:-mb-[350px] sm:-mb-56 md:-mb-96 column',
            num == 1 ? 'hidden md:grid' : '',
            num == 2 ? 'hidden sm:grid' : '',
          ]"
          v-for="num in [1, 2, 3, 4]"
        >
          <figure
            class="relative z-10 m-0 column__item"
            v-for="num in [1, 2, 3, 4, 5]"
          >
            <div
              class="relative w-full h-auto rounded-lg overflow-hidden aspect-square column__item-imgwrap"
            >
              <div
                class="absolute bg-cover bg-center column__item-img"
                style="background-image: url(/images/hero.jpeg)"
              ></div>
            </div>
          </figure>
        </div>
      </div>
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
  </div>
</template>

<style>
.double {
  display: grid;
  aspect-ratio: 0.75;
  position: relative;
  overflow: hidden;
  counter-increment: section;
}

.double__img {
  grid-area: 1 / 1 / -1 / -1;
  background-size: cover;
  width: 100%;
  height: 100%;
  position: relative;
}

.columns {
  --grid-item-translate: 30px;
}

.column__item-img {
  top: calc(-1 * var(--grid-item-translate));
  left: calc(-1 * var(--grid-item-translate));
  height: calc(100% + var(--grid-item-translate) * 2);
  width: calc(100% + var(--grid-item-translate) * 2);
  backface-visibility: hidden;
}
</style>
