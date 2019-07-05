import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

import dayJs from 'dayjs';
import AdvancedFormat from 'dayjs/plugin/advancedFormat' // 按需加载

dayJs.extend(AdvancedFormat);
Vue.prototype.$dayJs = dayJs;

import * as common from './config/common';
Vue.prototype.$common = common;

import * as regular from './config/regular';
Vue.prototype.$regular = regular;

import request from "./config/request.js";
Vue.prototype.$api = request;

const app = new Vue({
    ...App
})
app.$mount()
