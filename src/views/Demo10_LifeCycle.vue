<template>
  <div id="demo10">
      <h1>LifeCycle Hook</h1>
      <span>{{count}}</span>
      <hr>
      <button @click="addCount">Add</button>
  </div>
</template>

<script>
export default {
  name: "demo10",
  data() {
      return {
          count: 0,
      }
  },
  methods: {
      addCount(){
          this.count++;
      }
  },
  beforeCreate(){
      console.log("beforeCreate")
  },
  created(){
      console.log("Created")
  },
  mounted() {
      console.log("Mounted")
  },
  beforeUpdate(){
      console.log("beforeUpdate")
  },
  updated(){
      console.log("updated")
  },
  beforeUnmount() {
      console.log("beforeUnmount")
  },
  destroy(){
      console.log("destroy")
  },
};
</script>

<style>
</style>