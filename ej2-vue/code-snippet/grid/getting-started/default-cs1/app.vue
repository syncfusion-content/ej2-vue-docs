<template>
    <div id="app">
      <ejs-grid :dataSource='data' :allowPaging='true' :allowSorting='true' :allowFiltering='true' :pageSettings='pageSettings' 
        :filterSettings='filterSettings' :editSettings='editSettings' :toolbar='toolbar'>
        <e-columns>
          <e-column field='OrderID' headerText='Order ID' :isPrimaryKey='true' :validationRules='orderIDRules' textAlign='Right' width=90></e-column>
          <e-column field='CustomerName' headerText='CustomerName' :validationRules=' customerNameRules' width=120></e-column>
          <e-column field='OrderDate' headerText='OrderDate' width='100' format='yMd' editType='datepickeredit' textAlign='Right'></e-column>
          <e-column field='Freight' headerText='Freight' format='C2' editType='numericedit' textAlign='Right' width=90></e-column>
          <e-column field='ShipCountry' headerText='ShipCountry' editType='dropdownedit' width=120></e-column>
      </e-columns>
    </ejs-grid>
    </div>
</template>
<script>
// Import the required grid modules from the grid package
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Sort, Filter, Edit, Toolbar } from "@syncfusion/ej2-vue-grids";
// Import Grid data from external file
import { data } from "./datasource";
export default {
  name: "App",
  components: {
    'ejs-grid': GridComponent,
    'e-column': ColumnDirective,
    'e-columns': ColumnsDirective
  },
  data() {
    return {
      data: data,
      pageSettings: { pageSize: 6 },
      filterSettings: { type: "CheckBox" },
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
      toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
      orderIDRules: {required: true, number: true},
      customerNameRules: { required: true },
    };
  },
  // Inject required Grid features
  provide: {
    grid: [Page, Sort, Filter, Edit, Toolbar]
  }
}
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