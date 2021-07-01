<template>
  <div id="demo1">
      <h2>Demo1 Intro</h2>

    <!-- Interpolation -->
    <h3>{{ title }}</h3>
    <h3>{{ count }}</h3>
    <button @click="onClickAdd">Add</button>

    <!-- input -->
    <!-- MVVM -->
    <h2>v-model</h2>
    <input v-model="message" type="text" placeholder="Enter your Message" />
    <div>{{ message }}</div>

    <!-- แบบธรรมดา -->
    <button @click="message = ''">Reset</button>
    <!-- แบบใช้ฟังก์ชั่น -->
    <button @click="onClickReset">Reset Func</button>
  </div>
</template>

<script>

export default {
  name: "Demo1",
  data() {
    return {
      title: "Test1",
      count: 0,
      message: "",
    };
  },
  methods: {
    onClickAdd() {
      this.count = this.count + 1;
    },
    onClickReset() {
      this.message = "";
    },
  },
};
</script>

<style>
h1 {
  background: red;
}

h2{
    background: yellow;
}
</style>