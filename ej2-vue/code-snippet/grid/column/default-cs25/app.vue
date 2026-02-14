<template>
  <div id="app">
    <ejs-grid :dataSource='data' :allowReordering="true" :editSettings='editSettings' :allowSorting="true"
      :allowFiltering="true" :allowGrouping="true" height="220px">
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90 :allowReordering="false"></e-column>
        <e-column field='CustomerID' headerText='Customer ID' :allowEditing="false" width=120></e-column>
        <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90
          :allowFiltering="false"></e-column>
        <e-column field='OrderDate' headerText='Order Date' textAlign='Right' type='date' format='yMd'
          :allowGrouping="false" width=120 :allowSorting="false"></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script>

import { GridComponent, ColumnsDirective, ColumnDirective, Sort, Group, Filter, Reorder, Edit } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
export default {
  name: "App",
  components: {
    "ejs-grid": GridComponent,
    "e-columns": ColumnsDirective,
    "e-column": ColumnDirective
  },
  data() {
    return {
      data: data,
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
    };
  },
  provide: {
    grid: [Sort, Group, Filter, Reorder, Edit]
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