<template>
  <div class="component">
    <h5>Your Maximum Salary Budget</h5>
    <div>
      <input v-model.trim="employerInput" class="input" type="number">
      <button @click.prevent="employerBudget">Submit</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'employer',
  data () {
    return {
      employerInput: null
    }
  },
  methods: {
    employerBudget () {
      console.log('Submitted')
    }
  }
}
</script>

<style>
</style>
