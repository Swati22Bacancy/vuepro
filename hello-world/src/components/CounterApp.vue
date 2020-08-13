<template>
    <div>
        <h2>Counter in Component from Parent {{counter}}</h2>
        <button @click="increasecounter"> Add Count </button>
    </div>   
</template>

<script>
export default {
  props:['counter'],
  methods:{
    increasecounter()
    {
      this.counter = this.counter+1;
    }
  }
}
</script>
<style scoped>
h2
{
  color: blue;
}
</style>