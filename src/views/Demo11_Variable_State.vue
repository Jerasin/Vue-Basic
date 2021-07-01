<template>
  <div id="demo11">
    <div>{{ count }}</div>
    <div>{{timeStamp}}</div>
    <button @click="timeStamp = Date.now()">add</button>
  </div>
</template>

<script>
export default {
  name: "Demo11",
  created() {
    this.timeStamp = 0;
  },
  mounted() {
    setInterval(() => {
      // this.count++;
      console.log(this.timeStamp)
    }, 1000);
  },
  data() {
    return {
      count: 0, // local State
    };
  },
};
</script>

<style>
</style>