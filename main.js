import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

import * as common from './config/common';
Vue.prototype.$common = common;

import request from "./config/request.js";
Vue.prototype.$api = request;

const app = new Vue({
    ...App
})
app.$mount()
