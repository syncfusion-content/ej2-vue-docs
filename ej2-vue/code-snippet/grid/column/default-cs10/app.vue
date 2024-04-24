<template>
    <div id="app">
        <ejs-grid ref='grid' :dataSource="data" id="gridcomp" :allowPaging='true' :allowSorting='true' :showColumnMenu='true' :filterSettings='filterSettings' :columnMenuOpen='columnMenuOpen' :allowFiltering='true' :allowGrouping='true'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' width='140' textAlign="Right"></e-column>
                <e-column field='CustomerID' headerText='Customer Name' :showInColumnChooser='false'></e-column>
                <e-column field='Freight' headerText='Freight' format='C2' textAlign="Right"></e-column>
                <e-column field='ShipCountry' headerText='Ship Country' :visible='false' width='150'></e-column>
                <e-column field='ShipCity' headerText='Ship City' width='150'></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script>
import Vue from "vue";
import { GridPlugin, Sort, ColumnMenu, Page, Group, Filter } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);

export default {
  data() {
    return {
      data: data,
      filterSettings: {type: 'Menu'}
    };
  },
  methods: {
      columnMenuOpen: function (args) {
        for (let item of args.items) {
            if (item.text === 'Filter' && args.column.field === 'OrderID') {
                item.hide = true;
            } else {
                item.hide = false;
            }
        }
    }
  },
  provide: {
      grid: [Sort, ColumnMenu, Page, Group, Filter]
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