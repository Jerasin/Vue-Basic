<template>
  <div class="content-warpper">
      <router-view />
    </div>
</template>

<script>
export default {
name: "Content"
}
</script>

<style>
.content-warpper{
  border: 1px solid black;
  margin: 24px;
  padding: 12px;

}
</style>