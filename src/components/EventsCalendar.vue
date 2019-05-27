<template>
  <div ref="events" class="events"></div>
</template>

<script>
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import ptBrLocale from '@fullcalendar/core/locales/pt-br';

export default {
  name: 'HelloWorld',
  props: {
    events: {
      default() {
        return [];
      },
    },
  },
  mounted() {
    const calendar = new Calendar(this.$refs.events, {
      plugins: [interactionPlugin, dayGridPlugin],
      locale: ptBrLocale,
      selectable: true,
      events: this.events,
      select: (selectInfo) => console.log(selectInfo),
       eventClick: (info) => {
        info.el.style.borderColor = 'red';
      }
    });

    calendar.render();
  },
};
</script>

<style lang="scss">
.events {
  max-width: 800px;
  .fc-event-container {
    cursor: pointer;
  }

}
</style>
