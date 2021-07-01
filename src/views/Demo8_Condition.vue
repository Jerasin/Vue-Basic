<template>
  <div id="demo8">
    <!-- กำหรดเงื่อนไขถ้าตรงถึงจะแสดง -->
    <div v-if="type === 'A'">A</div>
    <div v-else-if="type === 'B'">B</div>
    <div v-else-if="type === 'C'">C</div>
    <div v-else>NOT A/B/C</div>

    <!-- ไม่ตรงเงื่อนไขจะทำลาย Element นั้น -->
    <div v-if="isShow">
        Bink 1
    </div>
    <div v-else>
        Bink 2
    </div>

    <!-- Element จะยังอยู่ไม่ถููกทำลายแต่จะโดนใส่ css display = none -->
    <div v-show="isShow">
        Bink V-Show
    </div>
  </div>
</template>

<script>
export default {
  name: "Demo8",
  mounted() {
      setInterval(() => {
          this.isShow = !this.isShow
      }, 1000);
  },
  data() {
    return {
      type: "F",
      isShow: true,
    };
  },
};
</script>

<style>
</style>