<template>
  <div id="app">
    <ejs-grid :dataSource='dataGrid' :editSettings='editSettings' :toolbar='toolbar' height='265px'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' isPrimaryKey='true' width=100 :validationRules='orderIDRules'></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=120 :validationRules='customerIDRules'></e-column>
        <e-column field='Freight' :edit ='numericParams' headerText='Freight' textAlign= 'Right' editType='numericedit' :validationRules='freightRules' width=120></e-column>
        <e-column field='ShipCity' headerText='Ship City' editType= 'dropdownedit' :validationRules='shipCityRules' width=150></e-column>
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
      orderIDRules: { required: true, number: true },
      freightRules: { required: true, min: 1, max: 1000 },
      customerIDRules: { required: true },
      shipCityRules: { required: true },
      numericParams : {
            params: {
                decimals: 0,
                format: 'N',
                showClearButton: true,
                showSpinButton: false
            }
        }
    };
  },

  provide() {
    return {
      grid: [Edit, Toolbar],
    };
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