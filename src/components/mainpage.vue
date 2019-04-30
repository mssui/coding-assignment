<template>
  <div class="wrapper">
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
    <div class="modal" :class="{ hidden: modalHide }">
      <div class="close-modal" @click.prevent="closeModal">X</div>
      <h1 class="modal-text">{{ msg }}</h1>
      <div class="weather">
        <h4>Temp. in {{ city }} : {{ temp }} °C</h4>
        <img :src="'http://openweathermap.org/img/w/' + icon + '.png'">
      </div>
    </div>
  </div>
</template>

<script>
import employee from './employee.vue';
import employer from './employer.vue';
import axios from 'axios';

export default {
  name: 'mainpage',
  data () {
    return {
      employeeInput: null,
      employerInput: null,
      activeComponent: 'employee',
      isActive: true,
      modalHide: true,
      msg: null,
      temp: null,
      city: null,
      icon: null
    }
  },
  components: { employee, employer },
  methods: {
    toggle: function () {
      this.isActive = !this.isActive
    },
    setDataemp: function (data, activeComponent) {
      if (activeComponent === 'employee') {
        this.employeeInput = data.employeeInput
      } else if (activeComponent === 'employer') {
        this.employerInput = data.employerInput
      }
      // if both input are true, run calculate
      if (this.employeeInput && this.employerInput) {
        this.calculate()
      }
    },

    calculate: function (employeeInput, employerInput) {
      axios
        .get(
          'https://api.openweathermap.org/data/2.5/find?q=London&units=metric&APPID=09086ba8a725d7121ab42507bf1de6ec'
        )
        .then(res => {
          console.log(res.data)
          this.city = res.data.list[0].name
          this.temp = res.data.list[0].main.temp
          this.icon = res.data.list[0].weather[0].icon
        })

      // calculate the data for succsess or failure
      if (this.employeeInput <= this.employerInput) {
        this.modalHide = !this.modalHide
        this.msg = 'success!';
      } else {
        this.modalHide = !this.modalHide
        this.msg = 'Failure!';
      }
    },

    closeModal: function () {
      this.modalHide = true
    }
  }
}
</script>

<style>
.wrapper {
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
}
/* Style the tab */
.tab {
  margin: 3em;
  min-height: 3em;
}

/* Style the buttons inside the tab */
.tab span {
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
  font-size: 17px;
}
.item {
  margin-top: 2em;
  background: #e6e6e6;
  color: rgb(56, 56, 56);
}
.active {
  background: #ffd24b;
  box-shadow: inset 0 0 0.5em 0.5em #ffce3c;
}
.modal {
  position: absolute;
  display: block;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 500px;
  color: rgb(255, 255, 255);
  background-color: teal;
  border: 1px solid #a3a3a3;
  border-radius: 4px;
}
.close-modal {
  position: relative;
  top: 0px;
  left: 45%;
  cursor: pointer;
  font-size: 2em;
  font-weight: 600;
  color: black;
}
.hidden {
  display: none;
}
.modal-text {
  font-size: 24px;
  margin-top: 2em;
}
</style>
