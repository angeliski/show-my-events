import Vue from 'vue';
import Vuex from 'vuex';
import moment from 'moment';

import { transform } from './core/providers/event-transform';
import { getEvents } from './api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    events: [],
    selectDate: moment().format('DD/MM/YYYY'),
  },
  mutations: {
    changeSelectedDate(state, timeDate) {
      // eslint-disable-next-line no-param-reassign
      state.selectDate = moment(timeDate).format('DD/MM/YYYY');
    },
    loadedEvents(state, events) {
      // eslint-disable-next-line no-param-reassign
      state.events = events;
    },
  },
  actions: {
    loadEvents({ commit }) {
      return getEvents()
        .then(({ data }) => {
          commit('loadedEvents', transform(data.values));
        });
    },
  },
  getters: {
    selectedEvents: state => state.events.filter(event => state.selectDate === event.data),
  },
});
