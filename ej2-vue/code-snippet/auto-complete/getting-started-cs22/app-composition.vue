<template>
  <div id="app">
    <div class='autocomplete'>
      <ejs-autocomplete id='employees' :query='query' :dataSource='data' :fields='fields' :placeholder='waterMark'
        :headerTemplate='hTemplate' :sortOrder='sortOrder' :itemTemplate='iTemplate'
        popupHeight="450px"></ejs-autocomplete>
    </div>
  </div>
</template>
<script setup>
import { createApp } from "vue";
import { AutoCompleteComponent as EjsAutocomplete } from '@syncfusion/ej2-vue-dropdowns';
import { Query, DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';

const headerVue = createApp().component("headerTemplate", {
  template: `<span class='head'><span class='name'>Name</span><span class='city'>City</span></span>`,
  data() {
    return {
      data: {}
    };
  }
});

const itemVue = createApp().component("itemTemplate", {
  template: `<span class='item'><span class='name'> {{data.FirstName}}</span><span class ='city'>{{data.City}}</span></span>`,
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

const fields = { value: 'FirstName' };
const waterMark = 'Find an employee';
const sortOrder = 'Ascending';
const data = remoteData;
const iTemplate = function (e) {
  return {
    template: itemVue
  };
};
const hTemplate = function (e) {
  return {
    template: headerVue
  };
};
const query = new Query().from('Employees').select(['FirstName', 'City', 'EmployeeID']).take(6);

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

.city {
  right: 15px;
  position: absolute;
}
</style>
