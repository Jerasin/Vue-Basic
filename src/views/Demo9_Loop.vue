<template>
  <div id="demo9">
    <ul>
      <li v-for="(item, index) in mCouses" :key="index">
        title:{{ item.title }} price:{{ item.price }}
      </li>
    </ul>

    <hr />
    <ul>
      <!-- Destructuring -->
      <li v-for="({ title, price }, index) in mCouses" :key="index">
        title:{{ title }} price:{{ price }}
      </li>
    </ul>

    <hr />
    <input type="text" placeholder="title" v-model="course.title" /><br />
    <input
      type="number"
      placeholder="price"
      v-model.number="course.price"
    /><br />
    <button @click="addCourse">Add</button>
    <!-- Dynamic -->
    <ul>
      <li v-for="(course, index) in dynamic" :key="index">
        title:{{ course.title }} price:{{ course.price }}
        <button @click="removeCourse(index)">remove</button>
      </li>
      
    </ul>
  </div>
</template>

<script>
export default {
  name: "Demo9",
  data() {
    return {
      course: { title: "", price: 0 },
      dynamic: [],
      mCouses: [
        { title: "react", price: 12 },
        { title: "ios", price: 124 },
        { title: "android", price: 1244 },
        { title: "angular", price: 512 },
      ],
    };
  },
  methods: {
    addCourse() {
      this.dynamic.push(this.course);
      this.course = { title: "", price: 0 };
    },
    removeCourse(index) {
        this.dynamic.splice(index,1)
    }
  },
};
</script>

<style>
</style>