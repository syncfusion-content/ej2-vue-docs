<template>
  <div id="app">
    <div class="control_wrapper">
      <ejs-treeview id='treeview' :fields="fields"></ejs-treeview>
    </div>
  </div>
</template>
<script setup>

import { TreeViewComponent as EjsTreeview } from "@syncfusion/ej2-vue-navigations";
import { DataManager, Query, ODataV4Adaptor } from "@syncfusion/ej2-data";

var remotedata = new DataManager({
  url: 'https://services.odata.org/V4/Northwind/Northwind.svc',
  adaptor: new ODataV4Adaptor,
  crossDomain: true,
});

const fields = {
  dataSource: remotedata, query: new Query().from('Employees').select('EmployeeID,FirstName,Title').take(5), id: 'EmployeeID', text: 'FirstName', hasChildren: 'EmployeeID',
  child: { dataSource: remotedata, query: new Query().from('Orders').select('OrderID,EmployeeID,ShipName').take(5), id: 'OrderID', parentID: 'EmployeeID', text: 'ShipName' }
};


</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";

.control_wrapper {
  display: block;
  max-width: 350px;
  max-height: 350px;
  margin: auto;
  overflow: auto;
  border: 1px solid #dddddd;
  border-radius: 3px;
}
</style>