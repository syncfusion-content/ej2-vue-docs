<template>
    <div id="app">
      <div class='wrap'>
        <ejs-datepicker ref="dateObj" id='date' placeholder="Choose a date" :focus='onFocus'></ejs-datepicker>
      </div>
    </div>
  </template>
  <script setup>
  
  import { DatePickerComponent as EjsDatepicker } from "@syncfusion/ej2-vue-calendars";
  import { ref } from 'vue';
  
  const dateObj = ref(null);
  const onFocus = () => {
    dateObj.value.show();
  }
  
  
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