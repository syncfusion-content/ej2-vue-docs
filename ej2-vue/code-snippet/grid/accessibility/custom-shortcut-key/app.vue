<template>
  <div id="app">
    <ejs-grid ref='grid' :dataSource="data" :keyPressed="keyPressed" :allowGrouping='true' :toolbar="toolbar" :editSettings='editSettings' :selectionSettings='selectionSettings'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' :isPrimaryKey='true' width=90></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
        <e-column field='ShipCountry' headerText='Ship Country' width=140></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>

<script>

import { GridComponent, Toolbar, Edit, Group } from "@syncfusion/ej2-vue-grids";
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
      toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
      selectionSettings: { type: 'Multiple'},
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, },
    }
  },
    methods: {
    keyPressed: function (e) {
      const key = e.key.toLowerCase();
      switch (key) {
        case 'n':
          e.preventDefault();
          this.$refs.grid.addRecord();
          break;
        case 's':
          if (e.ctrlKey) {
            e.preventDefault();
            this.$refs.grid.endEdit();
          }
          break;
        case 'd':
          if (e.ctrlKey) {
            e.preventDefault();
            this.$refs.grid.deleteRecord();
          }
          break;
        case 'a':
          if (e.ctrlKey) {
            e.preventDefault();
            this.$refs.grid.selectRowsByRange(0);
          }
          break;
        case 'g':
          if (e.ctrlKey) {
            e.preventDefault();
            this.$refs.grid.groupColumn('CustomerID');
          }
          break;
        case 'enter':
          e.preventDefault();
          e.cancel = true;
          this.$refs.grid.refreshColumns();
          break;
        case 'insert':
          e.preventDefault();
          e.cancel = true;
          break;
        case 'delete':
          e.preventDefault();
          e.cancel = true;
          break;
        case 'f2':
          e.preventDefault();
          e.cancel = true;
          break;
        case ' ':
          if (e.ctrlKey) {
            e.preventDefault();
            e.cancel = true;
          }
          break;
        // Add more custom shortcuts as needed
      }
    },
  },
  provide: {
    grid: [Group, Toolbar, Edit]
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