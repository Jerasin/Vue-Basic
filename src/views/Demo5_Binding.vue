<template>
  <div id="demo5">
<img v-bind:src="imgUrl" alt="" v-bind:height="height">
<div>
    <!-- Binding ใช้สำหรับนำ value ที่ประกาศไว้ใน data ไปใช้ใน addtibute -->
    <!-- ใช้ได้ 2 แบบ -->
    <a v-bind:href="webUrl">My Web</a>
    <br>
    <a :href="webUrl">My Web</a>
</div>

<div :class="[false ? error : '' , important]">GGEZ</div>
<div :style="{color , fontSize}">Binding Style</div> 
<div :style="isActive ? styleobj: ''">Binding Style Obj</div> 
<button @click="isActive = !isActive">ToggleActive</button>
  </div>
</template>

<script>
export default {
data() {
    return {
        imgUrl: "https://cdn.tigthai.com/imguploads/202106/21/06280320016242854376326_02.jpg",
        height: 550,
        webUrl: "http://191.101.38.12/jinyong_1/stock",
        error: "error_class",
        important: "important",
        color: "green",
        fontSize: "50px",
        styleobj: {
            backgroundColor: "yellow",
            color: "green"
        },
        isActive: false
    }
},
}
</script>

<style>
.error_class{
    background-color: red;
    color:white;
}

.important{
    font-weight: 900;
}
</style>