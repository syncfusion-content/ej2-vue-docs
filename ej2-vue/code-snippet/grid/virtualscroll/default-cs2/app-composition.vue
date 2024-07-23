<template>
    <div id="app">
      <div style="display:inline-block">
        <label style="padding: 30px 20px 0 0" > Select initialBlocks count:</label>
        <ejs-dropdownlist ref="dropdown" id='value' :index='2' 
        width='220' :dataSource='dropDownData' @change='valueChange' >
        </ejs-dropdownlist>
      </div>
      <div style="padding: 30px 17px 0 0">
        <ejs-grid ref="grid" :dataSource='griddata' height=300 id="grid" :enableInfiniteScrolling='true' :pageSettings='options' >
            <e-columns>
                <e-column field='TaskID' headerText='Task ID' textAlign='Right' width=70></e-column>
                <e-column field='Engineer' width=100></e-column>
                <e-column field='Designation' width=100></e-column>
                <e-column field='Estimation' textAlign='Right' width=100></e-column>
                <e-column field='Status' width=100></e-column>
            </e-columns>
        </ejs-grid>
      </div>
    </div>
</template>
<script setup>
import { ref, provide } from "vue";
import { DropDownListComponent as EjsDropdownlist } from "@syncfusion/ej2-vue-dropdowns";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, InfiniteScroll,Page } from "@syncfusion/ej2-vue-grids";
let names = ['TOM', 'Hawk', 'Jon', 'Chandler', 'Monica', 'Rachel', 'Phoebe', 'Gunther', 'Ross', 'Geller', 'Joey', 'Bing', 'Tribbiani', 'Janice', 'Bong', 'Perk', 'Green', 'Ken', 'Adams'];
let hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let designation = ['Manager', 'Engineer 1', 'Engineer 2', 'Developer', 'Tester'];
let status = ['Completed', 'Open', 'In Progress', 'Review', 'Testing']
let generateData  = (count) => {
  let result = [];
  for (let i = 0; i < count; i++) {
    result.push({
      TaskID: i + 1,
      Engineer: names[Math.round(Math.random() * names.length)] || names[0],
      Designation: designation[Math.round(Math.random() * designation.length)] || designation[0],
      Estimation: hours[Math.round(Math.random() * hours.length)] || hours[0],
      Status: status[Math.round(Math.random() * status.length)] || status[0]
    });
  }
  return result;
};
const griddata = generateData (1000);
const options = { pageSize: 50 };
const dropDownData= [
        { text: '1', value: '1' },
        { text: '2', value: '2' },
        { text: '3', value: '3' },
        { text: '4', value: '4' },
        { text: '5', value: '5' },
        { text: '6', value: '6' },
        { text: '7', value: '7' }
      ];
const grid=ref(null);
const valueChange=function(args) {
      if (args.itemData && args.itemData.value) {
       grid.value.ej2Instances.infiniteScrollSettings.initialBlocks = parseInt(args.itemData.value, 10);
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