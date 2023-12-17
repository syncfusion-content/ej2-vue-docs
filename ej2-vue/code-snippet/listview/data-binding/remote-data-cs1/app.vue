

<template>
  <div class="control-section">
  <div id="flat-list">
    <!-- ListView element -->
    <ejs-listview id='sample-list' :dataSource='data' :query='query' :fields='fields' :headerTitle='headerTitle' showHeader='true'></ejs-listview>
    </div>
</div>
</template>
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
<script>
import Vue from "vue";
import { ListViewPlugin } from "@syncfusion/ej2-vue-lists";
Vue.use(ListViewPlugin);
import { DataManager, Query } from '@syncfusion/ej2-data';

export default {
  data: function() {
    return {
      data: new DataManager({
        url: 'https://services.syncfusion.com/js/production/api/',
        crossDomain: true
      }),
      query: new Query().from("ListView").select("EmployeeID,FirstName").take(10),
      fields:  { id: "EmployeeID", text: "FirstName" },
      headerTitle: 'Employees',
    };
  }
}
</script>


