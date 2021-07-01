<template>
  <div id="header">
    <ul>
      <li>
        <router-link to="/"><button>Home</button></router-link>
      </li>
      <li>
        <router-link to="/demo1"><button>Demo1_Intro</button></router-link>
      </li>
      <li>
        <router-link to="/demo2"
          ><button>Demo2_EventMethod</button></router-link
        >
      </li>
      <li>
        <router-link to="/demo3"><button>Demo3_Data</button></router-link>
      </li>
      <li>
        <router-link to="/demo4"><button>Demo4_Compute</button></router-link>
      </li>
      <li>
        <router-link to="/demo5"><button>Demo5_Binding</button></router-link>
      </li>
      <li>
        <router-link to="/demo6"><button>Demo6_Form</button></router-link>
      </li>
      <li>
        <router-link to="/demo7"><button>Demo7_Slot</button></router-link>
      </li>
       <li>
        <router-link to="/demo8"><button>Demo8_Condition</button></router-link>
      </li>
      <li>
        <router-link to="/demo9"><button>Demo9_Loop</button></router-link>
      </li>
      <li>
        <router-link to="/demo10"><button>Demo10_LifeCycle</button></router-link>
      </li>
      <li>
        <router-link to="/demo11"><button>Demo11_Variable_State</button></router-link>
      </li>
      <li>
        <router-link to="/demo12"><button>Demo12_Ref</button></router-link>
      </li>
       <li>
        <router-link to="/demo13"><button>Demo13_Filter</button></router-link>
      </li>
      <li>
        <router-link to="/demo14"><button>Demo14_RefAndReactive</button></router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
ul {
  margin: 0px;
  padding: 0px;
}
li {
  display: inline;
  margin-right: 8px;
}
</style>