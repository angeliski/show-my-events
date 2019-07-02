import Vue from 'vue';
import Vuex from 'vuex';
import moment from 'moment';

import { transform } from './core/providers/event-transform';
import eventos from './__mocks__/eventos.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    events: transform(eventos),
    selectDate: moment().format('DD/MM/YYYY'),
  },
  mutations: {
    changeSelectedDate(state, timeDate) {
      state.selectDate = moment(timeDate).format('DD/MM/YYYY');
    },
  },
  actions: {

  },
  getters: {
    selectedEvents: state => state.events.filter(event => state.selectDate === event.data),
  },
});
