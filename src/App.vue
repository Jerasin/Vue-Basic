<template>
  <div id="app">
    <h1>Hello App</h1>
    <Header />
    <!-- ใช้ในการแสดง Route ถ้าไม่มีจะไม่แสดง Route -->
    <Content />
    <Footer
      @onClock="onClock"
      title="Copyright 2020 by GGEZ Ltd."
      color="black"
    />
    <span>{{ time }}</span>
  </div>
</template>

<script>
// ใช้ @ เพื่อให้ path อยู่ใน src เลย
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
import Content from '@/components/layout/Content.vue'
import moment from 'moment'
export default {
  name: "app",
  components: {
    Header,
    Content,
    Footer,
  },
  methods: {
    onClock(value) {
      this.time = moment(value).format("MM/DD/YYYY hh:mm:ss")
    },
  },
  data() {
    return {
      time: null,
    };
  },
};
</script>

//? ใช้ scoped เพื่อให้ style เป็น local ถ้าไม่กำหนดจะเป็น gobal
<style scoped>

</style>