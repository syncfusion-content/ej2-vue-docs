<template>
  <div id="app">
    <ejs-autocomplete :autofill='autofill' :dataSource='searchData' :fields='fields'
      :placeholder="waterMark"></ejs-autocomplete>
  </div>
</template>
<script setup>
import { AutoCompleteComponent as EjsAutocomplete } from '@syncfusion/ej2-vue-dropdowns';

const waterMark = 'Find a country';
const searchData = [
  { Name: 'Australia', Code: 'AU' },
  { Name: 'Bermuda', Code: 'BM' },
  { Name: 'Canada', Code: 'CA' },
  { Name: 'Cameroon', Code: 'CM' },
  { Name: 'Denmark', Code: 'DK' },
  { Name: 'France', Code: 'FR' },
  { Name: 'Finland', Code: 'FI' },
  { Name: 'Germany', Code: 'DE' },
  { Name: 'Greenland', Code: 'GL' },
  { Name: 'Hong Kong', Code: 'HK' },
  { Name: 'India', Code: 'IN' },
  { Name: 'Italy', Code: 'IT' },
  { Name: 'Japan', Code: 'JP' },
  { Name: 'Mexico', Code: 'MX' },
  { Name: 'Norway', Code: 'NO' },
  { Name: 'Poland', Code: 'PL' },
  { Name: 'Switzerland', Code: 'CH' },
  { Name: 'United Kingdom', Code: 'GB' },
  { Name: 'United States', Code: 'US' }
];
const fields = { value: 'Name' };
const autofill = true

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";

#app {
  color: #008cff;
  height: 40px;
  left: 35%;
  position: absolute;
  top: 15%;
  width: 30%;
}
</style>
