<template>
  <div id="demo6">

    <!-- .prevent เพื่อไม่ต้องไปใส่ e.preventDefault(); ที่ฟังก์ชั่น submit อีก -->
    <form @submit.prevent="submit">
      <!-- Firstname -->
      <div>
        <label for="firstname">Firstname:</label>
        <!-- .trim ใช้กรณีที่มีการ space ก่อนข้อความ เช่น "_Test1" -->
        <input type="text" name="first_name" v-model.trim="applicant.first_name" />
      </div>

      <!-- Lastname -->
      <div>
        <label for="firstname">Lastname:</label>
        <!-- .lazy เมื่อกรอกข้อความ value จะยังไม่อัพเดทจนกว่าจะกด enter เปลื่ยน focus -->
        <input type="text" name="last_name" v-model.lazy="applicant.last_name" />
      </div>

      <!-- Sex -->
      <!-- name เหมือนกันเลยเลือกได้แค่อย่างใดอย่างหนึ่ง -->
      <div>
        <label for="sex">Male:</label>
        <input type="radio" name="sex" value="male" v-model="applicant.sex" />
        <label for="sex">Female:</label>
        <input type="radio" name="sex" value="female" v-model="applicant.sex" />
      </div>

      <div>
        <label for="age">Age:</label> 
        <!-- .number ใช้ป้องกันกรณีที่กรอก input เปลื่ยนเป็น string -->
        <input type="number" name="age"  v-model.number="applicant.age">
      </div>

      <!-- Course -->
      <div>
        <select name="course" v-model="applicant.course">
          <option value="react">React</option>
          <option value="vue">Vue</option>
          <option value="angular">Angular</option>
        </select>
      </div>

      <div style="margin-top: 16px; color: red">
        <span> {{ JSON.stringify(applicant) }} </span>
      </div>

      <button type="submit">Submit</button>
      <button @click.exact="clear" @click.alt="useDefault" >Clear</button>

      <!-- <div>
        <span> {{ applicant }} </span>
      </div> -->
    </form>
  </div>
</template>

<script>
export default {
  name: "demo6",
  data() {
    return {
      applicant: {
        first_name: null,
        last_name: null,
        sex: "male",
        course: null,
        age: 0,
      },
    };
  },
  methods: {
    submit() {
      // e.preventDefault();
      alert(JSON.stringify(this.applicant))
    },
    clear(){
      this.applicant = {
        first_name: null,
        last_name: null,
        sex: "male",
        course: null,
        age: 0,
      }
    },
    useDefault(){
      this.applicant = {
        first_name: "UNKNOWN",
        last_name: "UNKNOWN",
        sex: "male",
        course: null,
        age: 10,
      }
    }
  },
};
</script>

<style>
</style>