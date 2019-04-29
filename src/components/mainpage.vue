<template>
  <div class="hello">
    <h1>Salary Negotiation</h1>
    <div class="tab">
      <span
        class="item"
        :class="{ active: isActive }"
        @click.prevent="activeComponent = 'employee'; toggle();"
      >Employee</span>
      <span
        class="item"
        :class="{ active: !isActive }"
        @click.prevent="activeComponent = 'employer'; toggle();"
      >Employer</span>
    </div>
    <keep-alive>
      <component :is="activeComponent" v-on:setSalary="setDataemp($event)"/>
    </keep-alive>
  </div>
</template>

<script>
import employee from './employee.vue';
import employer from './employer.vue';

export default {
  name: 'mainpage',
  data () {
    return {
      employeeInput: null,
      employerInput: null,
      activeComponent: 'employee',
      isActive: true
    }
  },
  components: { employee, employer },
  methods: {
    toggle: function () {
      this.isActive = !this.isActive
    },
    setDataemp: function (data) {
      console.log(data)
    },
    calculate () {
      // calculate the data for succsess or failure
    }
  }
}
</script>

<style>
</style>
