import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

import * as common from './config/common';
Vue.prototype.$common = common;

const app = new Vue({
    ...App
})
app.$mount()
