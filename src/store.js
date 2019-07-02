import Vue from 'vue';
import Vuex from 'vuex';
import moment from 'moment';

import { transform } from './core/providers/event-transform';
import eventos from './__mocks__/eventos.json';
import { getEvents } from './api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    events: transform(eventos),
    selectDate: moment().format('DD/MM/YYYY'),
  },
  mutations: {
    changeSelectedDate(state, timeDate) {
      // eslint-disable-next-line no-param-reassign
      state.selectDate = moment(timeDate).format('DD/MM/YYYY');
    },
  },
  actions: {
    LOAD_EVENTS() {
      return getEvents()
        .then(console.log);
    },
  },
  getters: {
    selectedEvents: state => state.events.filter(event => state.selectDate === event.data),
  },
});
