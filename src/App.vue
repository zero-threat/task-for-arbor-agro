<template>
  <div id="app">
      <div class="app-wrapper">
        <button @click="createForm(Math.random())"><img src="https://img.icons8.com/cotton/2x/add.png" alt="add"></button>
        <DistanceForm v-for="form in forms" :key="form.id"/>
        <RequestLog />
      </div>
  </div>
</template>

<script>
  import DistanceForm from './components/DistanceForm'
  import RequestLog from './components/RequestLog'

  export default {
    name: 'app',
    data() {
      return {
        forms: [1]
      }
    },
    components: {
      DistanceForm,
      RequestLog
    },
    methods: {
      createForm(newForm) {
        if (this.forms.length < 11) {
          this.forms = [...this.forms, newForm]
        }
      }
    }
  }
</script>

<style>
  #app {
    margin-top: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Source Sans Pro", sans-serif;
  }
  button {
    background: #ffffff;
    border: 1px solid #8888ce;
    border-radius: 12px;
    cursor: pointer;
    width: 10%;
    height: 30px;
    outline: none;
    margin-bottom: 20px;
  }
  button:hover {
    box-shadow: 0 0 3px #36cecc inset;
  }
  #app img {
    height: 25px;
  }
  .app-wrapper {
    width: 70%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
</style>
