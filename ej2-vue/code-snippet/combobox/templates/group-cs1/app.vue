<template>
  <div id="app">
    <div class='combobox'>
      <ejs-combobox id='combobox' sortOrder="Ascending" :dataSource='employeeData' :groupTemplate='groupTemplate'
        :fields='fields' :query='query' placeholder="Select an employee"></ejs-combobox>
    </div>
  </div>
</template>
<script>
import { createApp } from "vue";
import { ComboBoxComponent } from "@syncfusion/ej2-vue-dropdowns";
import { Query, DataManager, Predicate, ODataV4Adaptor } from '@syncfusion/ej2-data';

let groupVue = createApp().component("groupTemplate", {
  template: `<strong>{{data.City}}</strong>`,
  data() {
    return {
      data: {}
    };
  }
});

export default {
  name: "App",
  components: {
    "ejs-combobox": ComboBoxComponent
  },
  data() {
    return {
      employeeData: new DataManager({
        url: 'https://services.odata.org/V4/Northwind/Northwind.svc/',
        adaptor: new ODataV4Adaptor,
        crossDomain: true
      }),
      query: new Query().from('Employees').select(['FirstName', 'City', 'EmployeeID']).take(6).where(new Predicate('City', 'equal', 'london').or('City', 'equal', 'seattle')),
      fields: { text: 'FirstName', value: 'EmployeeID', groupBy: 'City' },
      groupTemplate: function (e) {
        return {
          template: groupVue
        };
      },
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
  top: 10%;
  width: 90%;
}

.combobox {
  width: 30%;
  margin: 0 auto;
}
</style>
