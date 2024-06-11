<template>
  <div id="app">
    <ejs-grid ref='grid' :dataSource='data' height='200px' :allowGrouping='true' :groupSettings='groupOptions' :toolbar='toolbar' :toolbarClick='clickHandler'>
      <e-columns>
        <e-column field='EmployeeID' headerText='Employee ID' textAlign='Right' width=80></e-column>
        <e-column field='FirstName' headerText='First Name' width=100></e-column>
        <e-column field='Country' headerText='Country' width=100></e-column>
        <e-column field='PostalCode' headerText='Postal Code' width=100></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script>

import { GridComponent, ColumnsDirective, ColumnDirective, Toolbar, Group } from "@syncfusion/ej2-vue-grids";
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
      toolbar: [
        { text: 'Expand All', tooltipText: 'Expand All', prefixIcon: 'e-expand', id: 'expandall' },
        { text: 'Collapse All', tooltipText: 'collection All', prefixIcon: 'e-collapse-2', id: 'collapseall' , align:'Right'},
        { text: 'Search', align: 'Center'}
      ],
      groupOptions: { columns: ['FirstName'] }
    };
  },
  methods: {
    clickHandler: function(args) {
      if (args.item.id === 'expandall') {
        this.$refs.grid.ej2Instances.groupModule.expandAll();
      }

      if (args.item.id === "collapseall"){
        this.$refs.grid.ej2Instances.groupModule.collapseAll();
      }
    }
  },
  provide: {
      grid: [Toolbar, Group]
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