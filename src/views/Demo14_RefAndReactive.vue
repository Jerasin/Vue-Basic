<template>
  <div id="demo14">
    <h1>Ref And Reactive</h1>
    <hr />
    <!-- Ref = State ใน React ไม่นิยมใช้กับ Obj -->
    <h2>Ref</h2>
    <h3>{{ countRef }}</h3>
    <button @click="addCountRef">Add Count</button>
    <hr />
    <!-- Reactive นิยมใช้กับพวก Obj -->
    <h2>Reactive</h2>
    <h3>{{ countReactive }}</h3>
    <button @click="addCountReactive">Add Count</button>
    <h3>Hook Reset Data</h3>
    <hr />
    <button @click="reSetCountAll">Reset All</button>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
import { resetCount } from "../hooks/resetCount";
export default {
  name: "Demo14",
  setup() {
    const countRef = ref(0);
    // ? Ref composition Api
    const addCountRef = () => {
      return countRef.value++;
    };

    const countReactive = reactive({ count: 0 });
    const addCountReactive = () => {
      return countReactive.count++;
    };

    // ? Hook Reset Data
    const reSetCountAll = () => {
      const hookdata = resetCount();
    //   console.log(hookdata)
      countReactive.count = hookdata.countHookReactive.countHook;
      countRef.value = hookdata.countHookRef.value;
      return;
    };

    return {
      addCountRef,
      addCountReactive,
      countRef,
      countReactive,
      reSetCountAll,
    };
  },
};
</script>

<style>
</style>