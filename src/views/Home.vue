<template>
  <div class="home">
    <b-row>
      <b-col>
        <EventsCalendar :events="events"/>
      </b-col>
      <b-col cols="12" sm="12" md="12" lg="6">
        <div class="alert alert-warning mt-6" v-if="selectedEvents.length == 0">
          Nenhum evento foi disponível nessa data.
        </div>
        <transition-group name="card"
            enter-active-class="rotateInDownRight"
            mode="in-out"
            tag="div">
          <EventCard :event="event" :key="event.data" v-for="event in selectedEvents"></EventCard>
        </transition-group>
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
    this.$store.dispatch('loadEvents');
  },
  computed: {
    events() {
      return this.$store.state.events;
    },
    selectedEvents() {
      return this.$store.getters.selectedEvents;
    },
  },
};
</script>
