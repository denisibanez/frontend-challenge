<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import 'node_modules/bootstrap/scss/bootstrap';
@import 'node_modules/bootstrap-vue/src/index.scss';
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url('assets/img/pattern.png');
  background-repeat: repeat;
  width: 100%;
  height: 100%;
  min-height: 100vh;

  .custom-control-input {
    border: 0;
    &:checked~.custom-control-label::before {
      background-color: #ffffff;
      border-color: #ffffff;
      width: 42px;
      height: 12px;
    }

    &:checked~.custom-control-label::after {
      background-color: #E33535;
      border-color: #E33535;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      left: -48px;
    }
  }

  .custom-switch {
    border: 0;
    .custom-control-label::after {
      background-color: #E33535;
      border-color: #E33535;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      top: -1px;
      left: -14px;
    }

    .custom-control-label::before {
      color: #fff;
      background-color: #fff;
      border-color: #fff;
      width: 42px;
      height: 12px;
    }
  }

  .custom-control-label::before {
    border: 0;
  }

  input, button, textarea {
    border-color: #E43636;
    &:focus, &:active {
      outline:none !important;
      outline-width: 0 !important;
      box-shadow: none;
      -moz-box-shadow: none;
      -webkit-box-shadow: none;
      border-color: #E43636;
    }
  }

  input, textarea {
    color: #E33535 !important;
    border-radius: 10px;
    font-size: 16px;
  }

  input::-webkit-input-placeholder {
    color: #E33535 !important;
  }
  
  input:-moz-placeholder {
    color: #E33535 !important;  
  }
  
  input::-moz-placeholder {
    color: #E33535 !important;  
  }
  
  input:-ms-input-placeholder {  
    color: #E33535 !important;  
  }

  textarea::-webkit-input-placeholder {
    color: #E33535 !important;  
  }
  
  textarea:-moz-placeholder { 
   color: #E33535 !important;  
  }
  
  textarea::-moz-placeholder {  
    color: #E33535 !important;  
  }
  
  textarea:-ms-input-placeholder {  
    color: #E33535 !important;  
  }

  textarea {
    overflow: hidden !important;
    resize: none !important;
  }
}
</style>
