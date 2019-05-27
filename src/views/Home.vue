<template>
  <div class="home">
    <b-row>
      <b-col>
        <EventsCalendar :events="events"/>
      </b-col>
      <b-col cols="8">
        <div>
          <b-card title="Titulo do Evento" sub-title="Sub">
            <b-card-text>
              Data: 05/04/2019
            </b-card-text>
            <b-card-text>
              Horario:  1:30 pm–2:30 pm
            </b-card-text>
            <b-card-text>
              Localização: XPTO
            </b-card-text>
            <b-card-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Curabitur eget lacinia arcu. Duis bibendum odio et commodo vehicula. 
              Suspendisse vulputate leo ac semper sodales. Donec commodo semper tempus. Sed vestibulum eu ligula vel sagittis. 
              Donec malesuada magna eu erat ultricies placerat. 
              Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Suspendisse id pulvinar libero, et vestibulum nunc. Pellentesque eget ultricies ligula. 
              Ut eleifend posuere urna, et porta lorem.
            </b-card-text>
            <a href="#" class="card-link">Site do Evento</a>
          </b-card>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
// @ is an alias to /src
import EventsCalendar from '@/components/EventsCalendar.vue';

export default {
  name: 'home',
  components: {
    EventsCalendar,
  },
  data() {
    return {
      events: [
        {
          title: 'event1',
          start: '2019-05-01',
        },
        {
          title: 'event2',
          start: '2019-05-05',
          end: '2019-05-07',
        },
        {
          title: 'Fevent3 as d asd asd asdsadsad asd sad asdas das asd',
          start: '2019-05-09T12:30:00',
          allDay: false,
        },
      ],
    };
  },
  mounted() {
    console.log(this.$refs);
  },
};
</script>
