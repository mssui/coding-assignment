<template>
  <div class="component">
    <h5>Your Minimum Salary Expectation</h5>
    {{employeeInput}}
    <div class="btn-input" :class="{ hidden: isEmployeeHidden }">
      <input v-model.trim="employeeInput" class="input" type="number">
      <button class="btn" @click.prevent="employeeSalary">Submit</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'employee',
  data () {
    return {
      employeeInput: null,
      isEmployeeHidden: false
    }
  },
  methods: {
    employeeSalary () {
      this.isEmployeeHidden = true
      this.$emit('setSalary', {
        employeeInput: this.employeeInput
      })
    }
  }
}
</script>

<style>
.component {
  display: flex;
  flex-direction: column;
  flex: 1;
}
/* Btn-input style will change */
.btn-input {
  flex-direction: row;
}
.btn {
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-top: 1em;
}
.btn:hover {
  background-color: #438f45;
  color: white;
}
</style>
