<template>
    <div id="app">
        <ejs-grid :dataSource='gridData' height=300 :enableInfiniteScrolling='true' :pageSettings='options'>
            <e-columns>
                <e-column field='TaskID' headerText='Task ID' textAlign='Right' width=70></e-column>
                <e-column field='Engineer' width=100></e-column>
                <e-column field='Designation' width=100></e-column>
                <e-column field='Estimation' textAlign='Right' width=100></e-column>
                <e-column field='Status' width=100></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>

<script setup>
import { provide } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, InfiniteScroll,Page} from "@syncfusion/ej2-vue-grids";
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
provide('grid', [Page,InfiniteScroll]);
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-calendars/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/material3.css";
</style>
