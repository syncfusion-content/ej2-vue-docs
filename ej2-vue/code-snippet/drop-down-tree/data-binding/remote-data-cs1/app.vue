


<template>
  <div id="app">
    <div id='container' style="margin:50px auto 0; width:250px;">
        <br>
        <ejs-dropdowntree id='dropdowntree' :fields='fields'></ejs-dropdowntree>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { DropDownTreePlugin } from "@syncfusion/ej2-vue-dropdowns";
Vue.use(DropDownTreePlugin);
import { DataManager,Query,ODataV4Adaptor } from "@syncfusion/ej2-data";

export default {
  data (){
    var remotedata = new DataManager({
        url: 'https://services.odata.org/V4/Northwind/Northwind.svc',
        adaptor: new ODataV4Adaptor,
        crossDomain: true,
    });
    return {
     fields: { dataSource: remotedata, query: new Query().from('Employees').select('EmployeeID,FirstName,Title').take(5), value: 'EmployeeID', text: 'FirstName', hasChildren: 'EmployeeID',
        child: { dataSource: remotedata, query: new Query().from('Orders').select('OrderID,EmployeeID,ShipName').take(5), value: 'OrderID', parentValue: 'EmployeeID', text: 'ShipName'}
    }
    }
  }
}

</script>

<style>
@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
</style>



