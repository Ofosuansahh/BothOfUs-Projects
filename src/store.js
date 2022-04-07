import Vue from 'vue'
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist'
import i18n, { selectedLocale } from '@/i18n'

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
});

export default new Vuex.Store({
  state: {
    locale: selectedLocale
  },
  mutations: {
    updateLocale(state, newLocale) {
      state.locale = newLocale
    }
  },
  actions: {
    changeLocale({ commit }, newLocale) {
      i18n.locale = newLocale // important!
      commit('updateLocale', newLocale)
    }
  },
  plugins: [vuexLocal.plugin]
});