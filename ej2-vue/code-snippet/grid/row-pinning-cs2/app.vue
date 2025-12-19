<template>
    <div id="app">
      <ejs-grid :dataSource='data' :isRowPinned="isRowPinned" :allowPaging="true" :pageSettings="pageSettings" height='200px'>
        <e-columns>
          <e-column field="TaskID" headerText="Task ID" :isPrimaryKey="true" textAlign="Right" width="100"></e-column>
          <e-column field="Title" headerText="Title" width="120"></e-column>
          <e-column field="Priority" headerText="Priority" textAlign="Right" width="120" format="N0"></e-column>
          <e-column field="Status" headerText="Status" width="150"></e-column>
          <e-column field="Assignee" headerText="Assignee" width="150"></e-column>
        </e-columns>
      </ejs-grid>
    </div>
</template>
<script>
import { GridComponent, ColumnsDirective, ColumnDirective, Page, } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
export default {
name: "App",
components: {
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective
},
  data() {
    return {
      data: data,
      pageSettings: { pageSize: 15 }
    };
  },
  methods: {
    isRowPinned:function(data){
      if (data && data.Status === 'Open' && data.Priority === 'Critical') {
          return true;
      }
      return false;
    }
  },
  provide: {
    grid: [Page]
  }
}
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