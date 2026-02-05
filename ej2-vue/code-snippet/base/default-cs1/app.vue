<template>
  <div id="app">
    <ejs-button :content="name"></ejs-button>
  </div>
</template>
<script>
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';
export default {
name: "App",
components: {
"ejs-button":ButtonComponent
},
  data () {
    return {
      msg: 'Hi EJ2 Components for Vue',
      name: 'Button'
    }
  }
}
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css";
  #app {
    color: #008cff;
    height: 40px;
    left: 45%;
    position: absolute;
    top: 45%;
    width: 30%;
  }
</style>