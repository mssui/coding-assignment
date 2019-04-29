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
      <component :is="activeComponent" v-on:setSalary="setDataemp($event, activeComponent)"/>
    </keep-alive>
    <h1 class="modal-text">{{ msg }}</h1>
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
      isActive: true,
      msg: null
    }
  },
  components: { employee, employer },
  methods: {
    toggle: function () {
      this.isActive = !this.isActive
    },
    setDataemp: function (data, activeComponent) {
      console.log(data)

      if (activeComponent === 'employee') {
        this.employeeInput = data.employeeInput
      } else if (activeComponent === 'employer') {
        this.employerInput = data.employerInput
      }
    },
    calculate (employeeInput, employerInput) {
      // calculate the data for succsess or failure
      if (this.employeeInput <= this.employerInput) {
        console.log('success!')
        this.msg = 'success!';
      } else {
        console.log('Failure! Another condition')
        this.msg = 'Failure!';
      }
    }
  }
}
</script>

<style>
</style>
