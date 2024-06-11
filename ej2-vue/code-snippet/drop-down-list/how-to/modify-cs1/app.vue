<template>
  <div id="app">
    <div id='container' style="margin:50px auto 0; width:250px;">
      <br>
      <ejs-dropdownlist id='dropdownlist' placeholder='Select a customer' :actionComplete='actionComplete'
        :dataSource='dataSource' :query='query' :fields='fields'></ejs-dropdownlist>
    </div>
  </div>
</template>
<script>
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";
import { DataManager, Query, ODataV4Adaptor } from "@syncfusion/ej2-data";

export default {
  name: "App",
  components: {
    "ejs-dropdownlist": DropDownListComponent
  },
  data() {
    return {
      query: new Query().from('Customers').select(['ContactName', 'CustomerID']).take(6),
      dataSource: new DataManager({
        url: 'https://services.odata.org/V4/Northwind/Northwind.svc/',
        adaptor: new ODataV4Adaptor,
        crossDomain: true
      }),
      fields: { text: 'ContactName', value: 'CustomerID' }
    }
  },
  methods: {
    actionComplete: function (e) {
      // initially result contains 6 items
      console.log("Before modified the result: " + e.result.length);
      // remove first 2 items from result.
      e.result.splice(0, 2);
      // now displays the result count is 4.
      console.log("After modified the result: " + e.result.length);
    }
  }
}

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
</style>
