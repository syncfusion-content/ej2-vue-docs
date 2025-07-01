<template>
  <div id="app">
    <div style="padding:10px 0px 20px 0px; display: flex; align-items: center;">
      <label style="margin-right: 20px; font-weight: bold; line-height: 1.5;">Enable/Disable Sticky Header</label>
      <ejs-switch id="switch" :checked="true" :change="toggleStickyHeader"></ejs-switch>
    </div>
    <div style="height:350px;">
      <ejs-treegrid ref="treegrid" :dataSource="data" childMapping="SubTasks" :enableStickyHeader="true" :treeColumnIndex="1">
        <e-columns>
          <e-column field="TaskID" headerText="Task ID" width="90" textAlign="Right"></e-column>
          <e-column field="TaskName" headerText="Task Name" width="180"></e-column>
          <e-column field="StartDate" headerText="Start Date" width="120" format="yMd" textAlign="Right"></e-column>
          <e-column field="Duration" headerText="Duration" width="110" textAlign="Right"></e-column>
        </e-columns>
      </ejs-treegrid>
    </div>
  </div>
</template>

<script setup>
import { TreeGridComponent as EjsTreegrid, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-treegrid";
import { SwitchComponent as EjsSwitch } from "@syncfusion/ej2-vue-buttons";
import { sampleData } from "./datasource.js";

const treegrid=ref(null);
const data = sampleData;
const toggleStickyHeader=(args)=>{
  treegrid.value.ej2Instances.enableStickyHeader = args.checked ?? false;;
}

</script>

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-calendars/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import "../node_modules/@syncfusion/ej2-grids/styles/material.css";
@import "../node_modules/@syncfusion/ej2-treegrid/styles/material.css";
</style>
