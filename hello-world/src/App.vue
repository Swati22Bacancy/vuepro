<template>
  <div id="app">
    
    <app-counterfirst></app-counterfirst>
    <app-counterfirst></app-counterfirst>
    <app-counter :counter='2'></app-counter>

    <b-alert show>Default Alert</b-alert>

    <div>
      <b-button :variant="btntype" @click="taskComplete = !taskComplete">Click for variant</b-button>
      
    </div>
  </div>
</template>

<script>
import CounterApp from './components/CounterApp.vue'
import ServerStatus from './components/ServerStatus.vue'

export default {
  name: 'App',
  data : function(){
    return {
      taskComplete :false
    }
  },
  components: {
    'app-counter':CounterApp,
    'server-status':ServerStatus
  },
  computed: {
    btntype() {
      return this.taskComplete ? "success" : "danger"; 
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h2
{
  color: green
}
</style>
