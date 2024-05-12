<script lang="ts" setup>
type Props = {
  date: string;
  index: number;
  location: string;
  name: string;
};

defineProps<Props>();

/* const events = [
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
]; */

const useIdFunction = () => useId();
</script>

<template>
  <ConfigProvider :use-id="useIdFunction">
    <AccordionItem
      class="border border-muted"
      :value="name"
      v-bind="[$props, $attrs]"
    >
      <AccordionHeader class="flex">
        <AccordionTrigger
          class="flex flex-1 gap-x-4 justify-between border-none items-center px-4 py-3 transition-colors group"
        >
          <div class="font-bold text-lg leading-none self-start mt-2">
            {{ (index + 1).toString().padStart(2, '0') }}
          </div>
          <div class="flex flex-col items-start gap-y-1">
            <h3
              class="text-base xs:text-lg sm:text-xl md:text-2xl font-semibold line-clamp-1 text-left"
            >
              {{ name }}
            </h3>
            <p
              class="font-bold text-left text-xs xs:text-sm tracking-wide text-foreground-secondary"
            >
              {{ location }} - {{ date }}
            </p>
          </div>
          <Icon
            class="text-2xl font-medium ml-auto transition-transform duration-300 group-data-[state=open]:rotate-180"
            name="radix-icons:chevron-down"
          />
        </AccordionTrigger>
      </AccordionHeader>
      <AccordionContent
        class="text-foreground bg-background border-t border-muted data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-sm"
      >
        <div class="px-5 py-4">
          {{ name }}
        </div>
      </AccordionContent>
    </AccordionItem>
  </ConfigProvider>

  <!-- <AccordionRoot
        class="flex flex-col gap-y-2 bg-background"
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
      </AccordionRoot> -->
</template>
