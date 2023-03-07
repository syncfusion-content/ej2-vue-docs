


<template>
  <div id='container'>
    <div>
      <ejs-button content="Touch Mode" v-on:click.native='touchClick'>Button</ejs-button>
      <ejs-button content="Mouse Mode" v-on:click.native='mouseClick'>Button</ejs-button>
    </div>
    <div class="control">
      <ejs-calendar ></ejs-calendar>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { CalendarPlugin } from '@syncfusion/ej2-vue-calendars';
Vue.use(ButtonPlugin);
Vue.use(CalendarPlugin);
export default {
  methods : {
    touchClick: function(event) {
     document.body.classList.add('e-bigger');
    },
    mouseClick: function(event) {
      document.body.classList.remove('e-bigger');
    }
  }
}
</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import "../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css";
</style>



