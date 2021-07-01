<template>
  <div id="demo4">
    <h1>{{ firstname }}</h1>
    <h1>{{ lastname }}</h1>
    <h1>{{ fullname }}</h1>

    Computed จะใช้ค่าล่าสุดที่ Random ได้เท่านั้น ส่วน Method จะใช้ทุกค่าที่ Random ได้
    <h1 style="background-color: gray">
      Random No from computed property: {{ getrandomno }}
    </h1>
    <h1 style="background-color: gray">
      Random No from computed property: {{ getrandomno }}
    </h1>
    <h1 style="background-color: gray">
      Random No from computed property: {{ getrandomno }}
    </h1>
    <h1>Random No from method: {{ getrandomno1() }}</h1>
    <h1>Random No from method: {{ getrandomno1() }}</h1>
  </div>
</template>

<script>
export default {
  name: "demo4",
  data() {
    return {
      firstname: "Here",
      lastname: "EZ",
    };
  },
  methods: {
    getrandomno1() {
      return Math.random();
    },
  },
  computed: {
    fullname() {
      return this.firstname + " " + this.lastname;
    },
    getrandomno() {
      return Math.random();
    },
  },
};
</script>

<style>
</style>