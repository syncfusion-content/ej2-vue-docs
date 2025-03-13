<template>
  <div id="app">
    <ejs-grid ref="grid" id="Grid" :dataSource='dataGrid' :editSettings='editSettings' :toolbar='toolbar' height='400px' :actionBegin="actionBegin">
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' isPrimaryKey='true' width=100 ></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=120 ></e-column>
        <e-column field="OrderDate" headerText="Order Date"  type="date"  width="150" format="yMd" editType="datepickeredit"></e-column>     
        <e-column field='Freight' headerText='Freight' textAlign='Right' editType='numericedit' width=120></e-column>
        <e-column field='ShipCity' headerText='Ship City' editType='dropdownedit' width=150></e-column>   
      </e-columns>
    </ejs-grid>
  </div>
</template>

<script>
import { GridComponent, ColumnsDirective, ColumnDirective, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
export default {
  name: "App",
  components: {
    "ejs-grid": GridComponent,
    "e-columns": ColumnsDirective,
    "e-column": ColumnDirective,
  },
  data() {
    return {
      dataGrid: data,
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
      toolbar: ["Add", "Edit", "Delete", "Update", "Cancel"],
    };
  },
  provide() {
    return {
      grid: [Edit, Toolbar],
    };
  },
  methods: {
    actionBegin: function (args) {
      if (args.requestType === 'beginEdit') {
        let minDate = args.rowData['OrderDate'];
        const gridInstance = this.$refs.grid.ej2Instances; // Access the Grid instance.
        const columns = gridInstance.getColumns(); // Retrieve columns array.
        columns.forEach((column) => {
          if (column.field === 'OrderDate') {
            column.edit.params = { min: minDate };
          }
        });
      }
    },
  },
};
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