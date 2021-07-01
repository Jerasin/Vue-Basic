<template>
  <div id="demo12">
    <!-- เข้าถึง Dom Element โดยใช้ refs -->
    <h1 ref="title">Hello World</h1>
    <input ref="input1" type="text" placeholder="auto forcus" />
  </div>
</template>

<script>
export default {
  name: "demo12",
  mounted() {
    this.$refs["title"].textContent = "Hello World222";
    this.$refs["input1"].focus();
  },
};
</script>

<style>
</style>