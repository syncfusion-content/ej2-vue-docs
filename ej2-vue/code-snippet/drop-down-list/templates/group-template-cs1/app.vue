

<template>
  <div id="app">
    <div id='container' style="margin:5px auto; width:250px;">
        <br>
        <ejs-dropdownlist id='dropdownlist' placeholder='Select an employee' sortOrder='Ascending' :groupTemplate="groupTemplate" :dataSource='dataSource' :query='query' :fields='fields'></ejs-dropdownlist>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";
Vue.use(DropDownListPlugin);
import { DataManager,Query,ODataV4Adaptor,Predicate } from "@syncfusion/ej2-data";

var groupVue = Vue.component("groupTemplate", {
  template: `<strong>{{data.City}}</strong>`,
  data() {
    return {
      data: {}
    };
  }
});
export default {
  data (){
      return {
        groupTemplate : function (e) {
          return {
            template: groupVue
          }
        },
        query :  new Query().from('Employees').select(['FirstName', 'City', 'EmployeeID']).take(6).where(new Predicate('City', 'equal', 'london').or('City', 'equal', 'seattle')),
        dataSource : new DataManager({
             url: 'https://services.odata.org/V4/Northwind/Northwind.svc/',
            adaptor: new ODataV4Adaptor,
            crossDomain: true
        }),
        fields: { text: 'FirstName', value: 'EmployeeID', groupBy: 'City' }
    }
  }
}
</script>
<style>
@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
  .city {
    right: 15px;
    position: absolute;
}
</style>


