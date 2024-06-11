<template>
  <div id="app">
    <div class='autocomplete'>
      <ejs-autocomplete ref='instance' :fields='fields' :query='query' id='employees' :dataSource='data'
        :placeholder='waterMark' :actionFailureTemplate='actionTemplate'></ejs-autocomplete>
    </div>
  </div>
</template>
<script setup>
import { createApp } from "vue";
import { AutoCompleteComponent as EjsAutocomplete } from '@syncfusion/ej2-vue-dropdowns';
import { Query, DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';

const actionVue = createApp().component("actionFailureTemplate", {
  template: `<span class="action-failure"> Data fetch got failed</span>`,
  data() {
    return {
      data: {}
    };
  }
});

const remoteData = new DataManager({
  url: 'https://services.odata.org/V4/Northwind/Northwind.svcs',
  adaptor: new ODataV4Adaptor,
  crossDomain: true
});

const waterMark = 'Find an employee';
const data = remoteData;
const actionTemplate = function (e) {
  return {
    template: actionVue
  };
};
const query = new Query().from('Employees').select(['FirstName']).take(6);
const fields = { value: 'FirstName' };

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
