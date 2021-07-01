<template>
  <div id="footer" class="footer">
    <span :style="{color:color}"> {{ title }} </span>
  </div>
</template>

<script>
export default {
  name: "Footer",
  mounted() {
      setInterval(() => {
          this.$emit("onClock" , Date())
      }, 100);
  },
  props: ["title" , "color"],
};
</script>

<style scoped>
.footer {
  font-size: 12px;
  color: gray;
  margin-top: 12px;
}
</style>