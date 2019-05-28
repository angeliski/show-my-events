<template>
  <div class="home">
    <b-row>
      <b-col>
        <EventsCalendar :events="events"/>
      </b-col>
      <b-col cols="6">
        <EventCard :event="events[0]"></EventCard>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import EventsCalendar from '@/components/EventsCalendar.vue';
import EventCard from '@/components/EventCard.vue';

import { transform } from '../core/providers/event-transform';
import eventos from '../__mocks__/eventos.json';


export default {
  name: 'home',
  components: {
    EventsCalendar,
    EventCard,
  },
  data() {
    return {
      events: transform(eventos),
    };
  },
  mounted() {
    console.log(this.events);
  },
};
</script>
