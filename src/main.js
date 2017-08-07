// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import axios from "axios";
import './config/rem';
import { getUrl } from './config/baseUrl.js';
import {Carousel,CarouselItem,Tabs,TabPane,Checkbox,CheckboxGroup,Select,Option} from 'element-ui';

Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Select);
Vue.use(Option);

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

axios.defaults.baseURL = getUrl(0);
axios.defaults.headers.post['Content-Type']='application/x-www-form-urlencoded';

axios.interceptors.request.use(function(config){
    return config;
},function(error){
    return Promise.reject(error);
});

axios.interceptors.response.use(function(response){
    return response;
},function(error){
    return Promise.reject(error);
});

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
