<template>
  <div class="home">
    <b-row>
      <b-col>
        <EventsCalendar :events="events"/>
      </b-col>
      <b-col cols="6">
        <EventCard :event="event" :key="event.data" v-for="event in selectedEvents"></EventCard>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import EventsCalendar from '@/components/EventsCalendar.vue';
import EventCard from '@/components/EventCard.vue';

export default {
  name: 'home',
  components: {
    EventsCalendar,
    EventCard,
  },
  data() {
    return {
    };
  },
  mounted() {
    console.log(this.events);
  },
  computed: {
    events() {
      return this.$store.state.events;
    },
    selectedEvents(){
      return this.$store.getters.selectedEvents;
    }
  }
};
</script>
