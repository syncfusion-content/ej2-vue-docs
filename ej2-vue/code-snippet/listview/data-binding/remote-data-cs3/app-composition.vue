<template>
  <div class="control-section">
    <div id="flat-list">
      <!-- ListView element -->
      <ejs-listview id='sample-list' :dataSource='data' :query='query' :fields='fields' :headerTitle='headerTitle'
        showHeader='true' :actionComplete='onComplete'></ejs-listview>
    </div>
    <div ref='spinnerEle' id="spinner"></div>
  </div>
</template>

<script setup>

import { ListViewComponent as EjsListview } from "@syncfusion/ej2-vue-lists";
import { DataManager, Query } from '@syncfusion/ej2-data';
import { createSpinner, showSpinner } from '@syncfusion/ej2-vue-popups';
import { ref, onMounted } from 'vue';

const spinnerEle = ref(null);
const data = new DataManager({
  url: 'https://services.syncfusion.com/js/production/api/',
  crossDomain: true
});
const query = new Query().from("ListView").select("EmployeeID,FirstName").take(10);
const fields = { id: "EmployeeID", text: "FirstName" };
const headerTitle = 'Employees';

onMounted(() => {
  createSpinner({ target: spinnerEle.value });
  showSpinner(spinnerEle.value);
});

const onComplete = () => {
  spinnerEle.value.style.display = "none";
};

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