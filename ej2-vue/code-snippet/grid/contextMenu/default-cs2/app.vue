<template>
  <div id="app">
    <ejs-grid ref='grid' id='gridcomp' :dataSource='data' :allowSelection='true' :allowPaging='true' height='265px' :contextMenuItems='contextMenuItems' :contextMenuClick='contextMenuClick'>
      <e-columns>
        <e-column field='EmployeeID' :isPrimaryKey='true' headerText='Employee ID' textAlign='Right' width=90></e-column>
        <e-column field='FirstName' headerText='FirstName' width=100></e-column>
        <e-column field='LastName' headerText='Last Name' width=100></e-column>
        <e-column field='City' headerText='City' width=100></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>

<script>
import { GridComponent, ColumnsDirective, ColumnDirective, ContextMenu, Page } from "@syncfusion/ej2-vue-grids";
import { employeeData } from './datasource.js';
export default {
name: "App",
components: {
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective
},
  data() {
    return {
      data: employeeData,
      contextMenuItems: [{text: 'Copy with headers', target: '.e-content', id: 'copywithheader'}]
    };
  },
  methods: {
    contextMenuClick: function(args) {
      if(args.item.id === 'copywithheader') {
        this.$refs.grid.copy(true);
      }
    }
  },
  provide: {
      grid: [ContextMenu, Page]
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