<template>
  <div id='container'>
    <div>
      <ejs-button content="Touch Mode" v-on:click.native='touchClick'>Button</ejs-button>
      <ejs-button content="Mouse Mode" v-on:click.native='mouseClick'>Button</ejs-button>
    </div>
    <div class="control">
      <ejs-calendar></ejs-calendar>
    </div>
  </div>
</template>
<script>
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';
import { CalendarComponent } from '@syncfusion/ej2-vue-calendars';
export default {
  name: "App",
  components: {
    "ejs-button": ButtonComponent,
    "ejs-calendar": CalendarComponent
  },
  methods: {
    touchClick: function (event) {
      var controls = document.querySelectorAll('.control');
      for (var index = 0; index < controls.length; index++) {
        controls[index].classList.add('e-bigger');
      }
    },
    mouseClick: function (event) {
      var controls = document.querySelectorAll('.control');
      for (var index = 0; index < controls.length; index++) {
        controls[index].classList.remove('e-bigger');
      }
    }
  }
}
</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import "../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css";
</style>