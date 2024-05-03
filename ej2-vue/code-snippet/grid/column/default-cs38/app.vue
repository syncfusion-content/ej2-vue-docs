

<template>
    <div id="app">
        <ejs-grid :dataSource="data" :showColumnChooser='true' :toolbar='toolbarOptions' :columnChooserSettings='columnChooserSettings' height='272px'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' width='120' textAlign="Right"></e-column>
                <e-column field='CustomerID' headerText='Customer Name' width='150'></e-column>
                <e-column field='Freight' headerText='Freight' width='120' format='C2' textAlign="Right"></e-column>
                <e-column field='ShipCountry' headerText='Ship Country' :visible='true' width='150'></e-column>
                <e-column field='ShipCity' headerText='Ship City' :visible='false' width='150'></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script>
import Vue from "vue";
import { GridPlugin, ColumnChooser, Toolbar } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);

export default {
  data() {
    return {
      data: data,
      toolbarOptions: ['ColumnChooser'],
      columnChooserSettings: { operator: 'contains' }
    };
  },
  provide: {
      grid: [ColumnChooser, Toolbar]
  }
}
</script>
<style>
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";
</style>