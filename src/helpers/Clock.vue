<template>
  <div id="clock">
    <!-- Tag slot ใช้สำหรับ pass Content จาก Component Parent มาได้ -->
    <!--กรณี set ค่า default Tag slot  จาก Component Child ไปยัง Parent-->
    <slot>Now</slot> {{ time }}

    <slot name="header"></slot>
    <slot name="footer"> </slot>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "Clock",
  data() {
    return {
      time: "",
    };
  },
  mounted() {
    setInterval(() => {
      this.time = moment(Date()).format("MM/DD/YYYY hh:mm:ss");
    }, 1000);
  },
};
</script>

<style>
</style>