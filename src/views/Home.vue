<template>
  <div class="home">
    <b-row>
      <b-col>
        <EventsCalendar :events="events"/>
      </b-col>
      <b-col cols="12" sm="12" md="12" lg="6">
        <transition-group name="card"
            enter-active-class="rotateInDownRight"
            leave-active-class="rotateOutDownLeft"
            tag="div">
        <div class="alert alert-warning mt-6" v-if="selectedEvents.length == 0" :key="empty-val">
          Nenhum evento foi disponível nessa data.
        </div>
          <EventCard
           :event="event"
           :key="`${event.data}-${index}`"
           v-for="(event, index) in selectedEvents" ></EventCard>
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

<style>
.rotateInDownRight {
  animation-delay: 1s;
}

</style> 