import Vue from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue } from 'bootstrap-vue'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

Vue.component('app-counterfirst',{
  data : function(){
    return {
      counter :0
    }
  },
  methods:{
    increasecounter()
    {
      this.counter = this.counter+1;
    }
  },
  template :'<div><h2>Counter {{counter}}</h2><button @click="increasecounter"> Add Count </button></div>'
})

new Vue({
  render: h => h(App),
}).$mount('#app')
