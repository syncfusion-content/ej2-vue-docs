


<template>
  <div id="app">
    <div style="padding: 20px 0px 20px 0px;display:flex">
      <label style="padding: 0px 20px 0px 0px;font-weight: bold">Enable/Disable Cache mode</label>
      <ejs-switch ref="switch" id="switch" :change="toggleCacheMode"></ejs-switch>
    </div>
    <div style="padding: 30px 17px 0 0">
      <ejs-grid ref="grid" :dataSource="gridData" height="300" :enableInfiniteScrolling="true" :pageSettings="options">
        <e-columns>
          <e-column field="TaskID" headerText="Task ID" textAlign="Right" width="70"></e-column>
          <e-column field="Engineer" width="100"></e-column>
          <e-column field="Designation" width="100"></e-column>
          <e-column field="Estimation" textAlign="Right" width="100"></e-column>
          <e-column field="Status" width="100"></e-column>
        </e-columns>
      </ejs-grid>
    </div>
  </div>
</template>

<script setup>
import { ref, provide } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, InfiniteScroll,Page } from "@syncfusion/ej2-vue-grids";
import { SwitchComponent as EjsSwitch } from "@syncfusion/ej2-vue-buttons";

let names = ['TOM', 'Hawk', 'Jon', 'Chandler', 'Monica', 'Rachel', 'Phoebe', 'Gunther', 'Ross', 'Geller', 'Joey', 'Bing', 'Tribbiani', 'Janice', 'Bong', 'Perk', 'Green', 'Ken', 'Adams'];
let hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let designation = ['Manager', 'Engineer 1', 'Engineer 2', 'Developer', 'Tester'];
let status = ['Completed', 'Open', 'In Progress', 'Review', 'Testing'];

let data = (count) => {
  let result = [];
  for (let i = 0; i < count; i++) {
    result.push({
      TaskID: i + 1,
      Engineer: names[Math.floor(Math.random() * names.length)],
      Designation: designation[Math.floor(Math.random() * designation.length)],
      Estimation: hours[Math.floor(Math.random() * hours.length)],
      Status: status[Math.floor(Math.random() * status.length)]
    });
  }
  return result;
};

const gridData = data(1000);
const options = { pageSize: 50 };
const grid = ref(null);

const toggleCacheMode = function(args) {
  if (grid.value && grid.value.ej2Instances) {
    grid.value.ej2Instances.infiniteScrollSettings.enableCache = args.checked;
    grid.value.ej2Instances.refresh(); 
  }
}
provide('grid', [Page,InfiniteScroll]);
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-calendars/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";
</style>
