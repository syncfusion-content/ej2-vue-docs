<template>
    <div id="app">
      <ejs-grid :dataSource='data' :isRowPinned="isRowPinned" :allowPaging="true" :pageSettings="pageSettings" height="200px">
        <e-columns>
          <e-column type="checkbox" width="70"></e-column>
          <e-column field="TaskID" headerText="Task ID" textAlign="Right" width="100"></e-column>
          <e-column field="Title" headerText="Title" width="120"></e-column>
          <e-column field="Priority" headerText="Priority" textAlign="Right" width="120" format="N0"></e-column>
          <e-column field="Status" headerText="Status" width="150"></e-column>
          <e-column field="Assignee" headerText="Assignee" width="150"></e-column>
        </e-columns>
      </ejs-grid>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Page } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

const pageSettings = { pageSize: 15 }; 
const isRowPinned = function(data){
    if (data && data.Status === 'Open' && data.Priority === 'Critical') {
        return true;
    }
    return false;
}

provide('grid', [Page]);
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