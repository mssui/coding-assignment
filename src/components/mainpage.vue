<template>
  <div class="hello">
    <h1>Main Page</h1>
    <div class="tab">
      <span
        class="item"
        :class="{ active: isActive }"
        @click.prevent="activeComponent = 'employee'"
      >Employee</span>
      <span
        class="item"
        :class="{ active: !isActive }"
        @click.prevent="activeComponent = 'employer'"
      >Employer</span>
    </div>
    <keep-alive>
      <component :is="activeComponent"/>
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
      activeComponent: 'employee',
      isActive: true
    }
  },
  components: { employee, employer }
}
</script>

<style>
</style>
