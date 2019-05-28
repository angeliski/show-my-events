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
  props: {
    events: {
      default() {
        return [];
      },
    },
  },
  mounted() {
    const calendar = new Calendar(this.$refs.events, {
      plugins: [interactionPlugin, dayGridPlugin, bootstrapPlugin],
      themeSystem: 'bootstrap',
      locale: ptBrLocale,
      selectable: true,
      events: this.events,
      select: selectInfo => console.log(selectInfo),
      eventClick: (info) => {
        console.log(info);
      },

      header: {
        left: 'today',
        center: 'title',
        right: 'prev,next',
      },
    });

    calendar.render();
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
