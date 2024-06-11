<template>
  <div id="app">
    <div class='combobox'>
      <br>
      <ejs-combobox id='combobox' sortOrder="Ascending" :dataSource='employeeData' :itemTemplate='itemTemplate'
        :headerTemplate='headerTemplate' :fields='fields' :query='query'
        placeholder="Select an employee"></ejs-combobox>
    </div>
  </div>
</template>
<script setup>
import { ComboBoxComponent as EjsCombobox } from "@syncfusion/ej2-vue-dropdowns";
import { Query, DataManager, ODataV4Adaptor } from '@syncfusion/ej2-data';

const employeeData = new DataManager({
  url: 'https://services.odata.org/V4/Northwind/Northwind.svc/',
  adaptor: new ODataV4Adaptor,
  crossDomain: true
});
const query = new Query().from('Employees').select(['FirstName', 'City', 'EmployeeID']).take(6);
const fields = { text: 'FirstName', value: 'EmployeeID' };
const headerTemplate = "<span class='head'><span class='name'>Name</span><span class='city'>City</span></span>";
const itemTemplate = "<span class='item' ><span class='name'>${FirstName}</span><span class='city'>${City}</span></span>";

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";

.head,
.item {
  display: table;
  width: 100%;
  margin: auto;
}

.head {
  height: 40px;
  font-size: 15px;
  font-weight: 600;
  text-indent: 1.067em;
}

.name,
.city {
  display: table-cell;
  vertical-align: middle;
  width: 50%;
}

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
