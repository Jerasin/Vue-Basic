<template>
  <div id="demo2">
    <h2>Demo2</h2>
    <h4>Event and Method</h4>
    <button v-on:click="clickMe">Click me1</button>

    <button @click="clickMe">Click me2</button>

    <button @click="clickMe2('Click me2')">Click me3</button>

    <h2>{{ getTimeStamp() }}</h2>
  </div>
</template>

<script>
export default {
  name: "Demo2",
  mounted() {
    this.initial();
  },
  methods: {
    initial() {
      console.log("Home");
    },
    clickMe() {
      alert("Hi");
    },
    clickMe2(data) {
      alert(data);
    },
    getTimeStamp() {
      return Date();
    },
  },
};
</script>

<style>
</style>