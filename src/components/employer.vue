<template>
  <div class="component">
    <h5>Your Maximum Salary Budget</h5>
    {{employerInput}}
    <div class="btn-input" :class="{ hidden: isEmployerHidden }">
      <input v-model.trim="employerInput" class="input" type="number">
      <button class="btn" @click.prevent="employerBudget">Submit</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'employer',
  data () {
    return {
      employerInput: null,
      isEmployerHidden: false
    }
  },
  methods: {
    employerBudget () {
      this.isEmployerHidden = true
      this.$emit('setSalary', {
        employerInput: this.employerInput
      })
    }
  }
}
</script>

<style>
</style>
