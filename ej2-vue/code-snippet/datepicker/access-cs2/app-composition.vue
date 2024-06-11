<template>
    <div id="app">
      <div class='wrap'>
        <ejs-datepicker id='date' :enabled="enable"></ejs-datepicker>
      </div>
    </div>
  </template>
  <script setup>
  
  import { DatePickerComponent as EjsDatepicker } from "@syncfusion/ej2-vue-calendars";
  
  const enable = false;
  
  </script>
  <style>
  @import '../node_modules/@syncfusion/ej2-base/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
  @import "../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css";
  
  .wrap {
    margin: 35px auto;
    width: 240px;
  }
  </style>