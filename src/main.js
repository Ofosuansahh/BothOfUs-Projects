import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import ArgonDashboard from './plugins/argon-dashboard'
import axios from "axios";
import VeeValidate from "vee-validate";
import VueSwal from "vue-swal";
import VueNoty from "vuejs-noty";
import VueGoodTablePlugin from 'vue-good-table';
import store from "./store";

// import the styles
import 'vue-good-table/dist/vue-good-table.css'

Vue.config.productionTip = false

let apiURL = process.env.VUE_APP_API_URL ? process.env.VUE_APP_API_URL : "http://cv.builder/api/";

axios.defaults.baseURL = apiURL;

Vue.use(ArgonDashboard)
Vue.use(VeeValidate, {
  events: 'change'
});
Vue.use(VueGoodTablePlugin);
Vue.use(VueSwal);
import 'vuejs-noty/dist/vuejs-noty.css';
import i18n from './i18n'
Vue.use(VueNoty, {
  theme: "sunset",
  layout: "topRight",
  progressBar: true,
});
new Vue({
  router,
  store: store,
  i18n,
  render: h => h(App)
}).$mount('#app')
