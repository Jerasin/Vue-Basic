<template>
  <div id="demo3">
    <h2>Data</h2>
    <div>{{ count }}</div>
    <div>{{ message }}</div>
    <div>{{ isLogged }}</div>
    <button @click="count++, (isLogged = true)">Add Count</button>

    <input type="text" v-model="message" />
    <h2 v-if="isLogged">Yahoo</h2>

    <div>{{ account }}</div>
    <div>{{ account.username }}</div>
    <div>{{ account.password }}</div>
    <div>{{ courses }}</div>
    <ul>
      <li v-for="(item, index) in courses" :key="index">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "demo3",
  mounted() {
    this.message = "GGEZ";
  },
  data() {
    return {
      count: 0,
      message: "",
      isLogged: false,
      account: {
        username: "admin",
        password: "123456",
      },
      courses: ["React", "Augular", "Vue"],
    };
  },
};
</script>

<style scoped>
li{
    color: red;
}
</style>