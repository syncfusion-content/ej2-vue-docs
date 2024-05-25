<template>
  <div id="app">
    <div class='autocomplete'>
      <ejs-autocomplete id='employees' :query='query' :dataSource='data' :fields='fields' :placeholder='waterMark'
        :sortOrder='sortOrder' :groupTemplate='gTemplate' popupHeight="450px">
      </ejs-autocomplete>
    </div>
  </div>
</template>
<script setup>
import { createApp } from "vue";
import { AutoCompleteComponent as EjsAutocomplete } from '@syncfusion/ej2-vue-dropdowns';
import { Query, Predicate, DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';

const groupTemplate = createApp().component("groupTemplate", {
  template: `<strong>{{data.City}}</strong>`,
  data() {
    return {
      data: {}
    };
  }
});

const remoteData = new DataManager({
  url: 'https://services.odata.org/V4/Northwind/Northwind.svc',
  adaptor: new ODataV4Adaptor,
  crossDomain: true
});

const fields = { value: 'FirstName', groupBy: 'City' };
const waterMark = 'Find an employee';
const sortOrder = 'Ascending';
const data = remoteData;
const gTemplate = function (e) {
  return {
    template: groupTemplate
  };
};
const query = new Query().from('Employees').select(['FirstName', 'City', 'EmployeeID']).take(6).where(new Predicate('City', 'equal', 'london').or('City', 'equal', 'seattle'));

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";

#app {
  color: #008cff;
  height: 40px;
  position: absolute;
  width: 90%;
  top: 10%;
}

.autocomplete {
  width: 30%;
  margin: 0 auto;
}
</style>
