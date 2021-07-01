import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Demo1 from '../views/Demo1_Intro.vue'
import Demo2 from '../views/Demo2_EventMethod.vue'
import Demo3 from '../views/Demo3_data.vue'
import Demo4 from '../views/Demo4_Compute.vue'
import Demo5 from '../views/Demo5_Binding.vue'
import Demo6 from '../views/Demo6_Form.vue'
import Demo7 from '../views/Demo7_Slot.vue'
import Demo8 from '../views/Demo8_Condition.vue'
import Demo9 from '../views/Demo9_Loop.vue';
import Demo10 from '../views/Demo10_LifeCycle.vue';
import Demo11 from '../views/Demo11_Variable_State.vue'
import Demo12 from '../views/Demo12_Ref.vue';
import Demo13 from '../views/Demo13_Filter.vue'
import Demo14 from '../views/Demo14_RefAndReactive.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Demo1',
    name: 'Demo1',
    component: Demo1
  },
  {
    path: '/Demo2',
    name: 'Demo2',
    component: Demo2
  },
  {
    path: '/Demo3',
    name: 'Demo3',
    component: Demo3
  },
  {
    path: '/Demo4',
    name: 'Demo4',
    component: Demo4
  },
  {
    path: '/Demo5',
    name: 'Demo5',
    component: Demo5
  },
  {
    path: '/Demo6',
    name: 'Demo6',
    component: Demo6
  },
  {
    path: '/Demo7',
    name: 'Demo7',
    component: Demo7
  },
  {
    path: '/Demo8',
    name: 'Demo8',
    component: Demo8
  },
  {
    path: '/Demo9',
    name: 'Demo9',
    component: Demo9
  },
  {
    path: '/Demo10',
    name: 'Demo10',
    component: Demo10
  },
  {
    path: '/Demo11',
    name: 'Demo11',
    component: Demo11
  },
  {
    path: '/Demo12',
    name: 'Demo12',
    component: Demo12
  },
  {
    path: '/Demo13',
    name: 'Demo13',
    component: Demo13
  },
  {
    path: '/Demo14',
    name: 'Demo14',
    component: Demo14
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
