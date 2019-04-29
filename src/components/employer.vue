<template>
  <div class="component">
    <h4 v-if="msgBeforeInput">{{msgBeforeInput}}</h4>
    <h5>Your Maximum Salary Budget</h5>
    <h4>{{msgAfterInput}}</h4>
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
      isEmployerHidden: false,
      msgBeforeInput: 'Please enter',
      msgAfterInput: null
    }
  },
  methods: {
    employerBudget () {
      this.isEmployerHidden = true

      this.msgBeforeInput = null
      this.msgAfterInput = this.employerInput

      this.$emit('setSalary', {
        employerInput: this.employerInput
      })
    }
  }
}
</script>

<style>
</style>
