<template>
    <div id="container">
      <div id='datepicker'>
        <ejs-datepicker dayHeaderFormat="Short" ref="datepickerObj"></ejs-datepicker>
      </div>
      <div id="format">
        <label id="custom-input-label">Header Format Types</label>
        <ejs-dropdownlist id="select" :fields="fields" :index="currentIndex" :dataSource="items"
          :popupHeight="popupHeight" :change="formatHandler">
        </ejs-dropdownlist>
      </div>
    </div>
  </template>
  <script setup>
  
  import { DatePickerComponent as EjsDatepicker } from "@syncfusion/ej2-vue-calendars";
  import { DropDownListComponent as EjsDropdownlist } from "@syncfusion/ej2-vue-dropdowns";
  import { ref } from 'vue';
  
  const datepickerObj = ref(null);
  const items = [
    { sizeVal: 'Short', sizeTxt: 'Short' },
    { sizeVal: 'Narrow', sizeTxt: 'Narrow' },
    { sizeVal: 'Abbreviated', sizeTxt: 'Abbreviated' },
    { sizeVal: 'Wide', sizeTxt: 'Wide' },
  ];
  const fields = { text: 'sizeTxt', value: 'sizeVal' };
  const popupHeight = 200;
  const currentIndex = 0;
  const formatHandler = (args) => {
    datepickerObj.value.ej2Instances.dayHeaderFormat = args.value;
  }
  
  </script>
  <style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
  
  #container {
    width: 100%;
  }
  
  #datepicker {
    width: 25%;
    margin-left: 30px;
    margin-top: 30px;
    display: inline-flex;
  }
  
  #format {
    width: 180px;
    margin-left: 400px;
    display: inline-block;
  }
  
  #select {
    height: 30px;
    width: 150px;
    margin-top: 10px;
  }
  
  #custom-input-label {
    font-size: 15px;
    font-weight: bold
  }
  </style>