<template>
  <div ref="events" class="events"></div>
</template>

<script>
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import bootstrapPlugin from '@fullcalendar/bootstrap';
import interactionPlugin from '@fullcalendar/interaction';
import ptBrLocale from '@fullcalendar/core/locales/pt-br';

export default {
  name: 'EventsCalendar',
  data(){
    return {
      calendarInstance: null
    }
  },
  props: {
    events: {
      default() {
        return [];
      },
    },
  },
  mounted() {
    this.createCalendar();
  },
  watch: {
    events: function(){
      console.log('here')
      this.calendarInstance.refetchEvents();
      // this.calendarInstance.render();
    }
  },
  methods: {
    createCalendar() {
          this.calendarInstance = new Calendar(this.$refs.events, {
      plugins: [interactionPlugin, dayGridPlugin, bootstrapPlugin],
      themeSystem: 'bootstrap',
      locale: ptBrLocale,
      selectable: true,
      events: (info, success) => {
        console.log('here2', this.events)
       success(this.events)
      },
      select: selectInfo => this.changeSelectedDate(selectInfo.start.getTime()),
      eventClick: info => this.changeSelectedDate(info.event.start.getTime()),
      header: {
        left: 'today',
        center: 'title',
        right: 'prev,next',
      },
    });

    this.calendarInstance.render();
    },
    changeSelectedDate(time) {
      this.$store.commit('changeSelectedDate', time);
    },
  },
};
</script>

<style lang="scss">
.events {
  .fc-event-container {
    cursor: pointer;
  }

}
</style>
