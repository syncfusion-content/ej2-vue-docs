<template>
  <div id="app">
    <div id='container' style="margin:50px auto 0; width:250px;">
      <br>
      <ejs-multiselect id='multiselect' sortOrder='Ascending' :itemTemplate='itemTemplate' :dataSource='employeeData'
        :query='query' :fields='fields' placeholder="Select an employee"></ejs-multiselect>
    </div>
  </div>
</template>
<script>
import { createApp } from "vue";
import { MultiSelectComponent } from "@syncfusion/ej2-vue-dropdowns";
import { Query, DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';

let itemVue = createApp().component("itemTemplate", {
  template: `<span><span class='name'>{{data.FirstName}}</span><span class ='city'>{{data.City}}</span></span>`,
  data() {
    return {
      data: {}
    };
  }
});

export default {
  name: "App",
  components: {
    "ejs-multiselect": MultiSelectComponent
  },
  data() {
    return {
      employeeData: new DataManager({
        url: 'https://services.odata.org/V4/Northwind/Northwind.svc/',
        adaptor: new ODataV4Adaptor,
        crossDomain: true
      }),
      query: new Query().from('Employees').select(['FirstName', 'City', 'EmployeeID']).take(6),
      fields: { text: 'FirstName', value: 'EmployeeID' },
      itemTemplate: function (e) {
        return {
          template: itemVue
        }
      }
    }
  }
}

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";

.city {
  right: 15px;
  position: absolute;
}
</style>
