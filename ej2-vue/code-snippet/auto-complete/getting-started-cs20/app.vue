

<template>
    <div id="app">
      <div class='autocomplete'>
        <ejs-autocomplete id='employees' :query='query' :dataSource='data' :fields='fields' :placeholder='waterMark' :sortOrder='sortOrder' :itemTemplate='iTemplate' popupHeight="450px"></ejs-autocomplete>
     </div>
  </div>
</template>
<script>
import Vue from 'vue';
import { AutoCompletePlugin } from '@syncfusion/ej2-vue-dropdowns';
import { Query, DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';

Vue.use(AutoCompletePlugin);

var itemVue = Vue.component("itemTemplate", {
  template: `<span><span class='name'>{{data.FirstName}}</span><span class ='city'>{{data.City}}</span></span>`,
  data() {
    return {
      data: {}
    };
  }
});

var remoteData = new DataManager({
    url: 'https://services.odata.org/V4/Northwind/Northwind.svc',
    adaptor: new ODataV4Adaptor,
    crossDomain: true
});

export default {
  name: 'app',
   data () {
    return {
      fields: { value: 'FirstName' },
            waterMark: 'Find an employee',
            sortOrder: 'Ascending',
            data: remoteData,
            iTemplate: function(e) {
                return {
                    template: itemVue
                };
            },
          query: new Query().from('Employees').select(['FirstName', 'City', 'EmployeeID']).take(6),
    }
  }
}
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

  .city{
    right: 15px;
    position: absolute;
  }
</style>


