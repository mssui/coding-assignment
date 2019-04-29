<template>
  <div class="component">
    <h5>Your Minimum Salary Expectation</h5>
    <div>
      <input v-model.trim="employeeInput" class="input" type="number">
      <button @click.prevent="employeeSalary">Submit</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'employee',
  data () {
    return {
      employeeInput: null
    }
  },
  methods: {
    employeeSalary () {
      this.$emit('setSalary', {
        employeeInput: this.employeeInput
      })
    }
  }
}
</script>

<style>
</style>
