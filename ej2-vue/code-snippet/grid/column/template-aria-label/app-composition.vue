<template>
    <div id="app">
      <ejs-grid :dataSource="data" height=310>
        <e-columns>
          <e-column headerText='Employee Image' width='150' textAlign='Center' :template="'columnTemplate'" :templateOptions='imageTemplateOptions'></e-column>
          <e-column field='FirstName' headerText='FirstName' :template="'chipTemplate'" :templateOptions='nameTemplateOptions' width=120></e-column>
          <e-column field='LastName' headerText='Last Name' width='100'></e-column>
          <e-column field='City' headerText='City' width='100'></e-column>
        </e-columns>
        <template v-slot:columnTemplate="{data}">
          <div class="image">
            <img :src="'./images/' + data.EmployeeID + '.png'" :alt="data.EmployeeID"/>
          </div>
        </template>
        <template v-slot:chipTemplate="{data}">
          <div>
            <ejs-chiplist id="chip" :text='data.FirstName'></ejs-chiplist>
          </div>
        </template>
      </ejs-grid>
    </div>
</template>

<script setup>
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-grids";
import { ChipListComponent as EjsChiplist } from '@syncfusion/ej2-vue-buttons';
import { employeeData } from "./datasource.js";
const data = employeeData;
const imageTemplateOptions= { enableAriaLabel: true };
const nameTemplateOptions= { enableAriaLabel: false };
</script>

<style>
 .image img {
  height: 55px;
  width: 55px;
  border-radius: 50px;
  box-shadow: inset 0 0 1px #e0e0e0, inset 0 0 14px rgba(0,0,0,0.2);
}
 @import "../node_modules/@syncfusion/ej2-material3-theme/styles/grid/index.css";
</style>