<template>
  <div id="demo7"></div>

  <!-- ต้องใช้ Tag slot ใน Component Child ถึงจะใช้ Tag <Clock></Clock> ได้ -->
  <Clock>
    <span style="color: red">เวลาปัจจุบัน:</span>
  </Clock>

  <Clock>
    <span style="color: red">Time Current:</span>
  </Clock>

  <!-- Using Fallback Content -->
  <Clock />


  <Clock>
    <span style="color: orange">เวลาปัจจุบัน</span>


    <template v-slot:header>
      <h1>Header</h1>
    </template>

    <template v-slot:footer>
      <h1>Footer</h1>
    </template>

  </Clock>
</template>

<script>
import Clock from "@/helpers/Clock.vue";
export default {
  name: "Demo7",
  components: {
    Clock,
  },
};
</script>

<style>
</style>