<template>
  <div id="app">
    <ejs-grid :dataSource="data" id="gridcomp" :allowPaging="true" :allowGrouping="true" :allowSorting="true"
    :showColumnMenu="true" :groupSettings="groupOptions" :allowFiltering="true" :filterSettings="filterSettings">
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" width="90" textAlign="Right" :showColumnMenu="false"></e-column>
        <e-column field="CustomerID" headerText="Customer Name" width="100"></e-column>
        <e-column field="Freight" headerText="Freight" format="C2" textAlign="Right" width="80"></e-column>
        <e-column field="ShipCity" headerText="Ship City" width="100"></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>

<script>
import { GridComponent, ColumnsDirective, ColumnDirective,Sort, Group, ColumnMenu, Page, Filter} from "@syncfusion/ej2-vue-grids";
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
      data: data,
      groupOptions : { showGroupedColumn: true },
      filterSettings : { type: 'CheckBox' }
    };
  },
  provide() {
    return {
      grid: [Sort, Group, ColumnMenu, Page, Filter],
    };
  }
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind.css";
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";
</style>
