<template>
  <div id="app">
    <div id='container' style="margin:50px auto 0; width:250px;">
      <br>
      <ejs-dropdownlist id='dropdownlist' placeholder='Select an employee' sortOrder='Ascending'
        :itemTemplate='itemTemplate' :valueTemplate='valueTemplate' :dataSource='dataSource' :query='query'
        :fields='fields'></ejs-dropdownlist>
    </div>
  </div>
</template>
<script>
import { createApp } from "vue";
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";
import { DataManager, Query, ODataV4Adaptor } from "@syncfusion/ej2-data";

let itemVue = createApp().component("itemTemplate", {
  template: `<span><span class='name'>{{data.FirstName}}</span><span class ='city'>{{data.City}}</span></span>`,
  data() {
    return {
      data: {}
    };
  }
});

let valueVue = createApp().component("valueTemplate", {
  template: `<span>{{data.FirstName}} - {{data.City}}</span>`,
  data() {
    return {
      data: {}
    };
  }
});

export default {
  name: "App",
  components: {
    "ejs-dropdownlist": DropDownListComponent
  },
  data() {
    return {
      itemTemplate: function () {
        return { template: itemVue };
      },
      valueTemplate: function () {
        return { template: valueVue };
      },
      query: new Query().from('Employees').select(['FirstName', 'City', 'EmployeeID']).take(6),
      dataSource: new DataManager({
        url: 'https://services.odata.org/V4/Northwind/Northwind.svc/',
        adaptor: new ODataV4Adaptor,
        crossDomain: true
      }),
      fields: { text: 'FirstName', value: 'EmployeeID' }
    }
  }
}

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";

.city {
  right: 15px;
  position: absolute;
}
</style>
