<template>
  <div class="control-section">
    <div id="flat-list">
      <!-- ListView element -->
      <ejs-listview id='sample-list' :dataSource='data' :query='query' :fields='fields' :headerTitle='headerTitle'
        showHeader='true'></ejs-listview>
    </div>
  </div>
</template>

<script setup>

import { ListViewComponent as EjsListview } from "@syncfusion/ej2-vue-lists";

import { DataManager, Query } from '@syncfusion/ej2-data';


const data = new DataManager({
  url: 'https://services.syncfusion.com/js/production/api/',
  crossDomain: true
});
const query = new Query().from("ListView").select("EmployeeID,FirstName").take(10);
const fields = { id: "EmployeeID", text: "FirstName" };
const headerTitle = 'Employees';

</script>

<style>
#sample-list {
  border: 1px solid #dddddd;
  border-radius: 3px;
  margin: auto;
}

#flat-list {
  width: 50%;
  padding: 10px;
  margin: auto;
}
</style>