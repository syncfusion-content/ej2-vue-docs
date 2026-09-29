<template>
    <div id="app">
        <ejs-grid :dataSource='data' height='290px' :allowPaging="true" :aggregates='aggregates'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='right' width=120></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                <e-column field='Freight' headerText='Freight' format='C2' width=80></e-column>
                <e-column field='ShipCountry' headerText='Ship Country' width=150></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script>

import { GridComponent, ColumnsDirective, ColumnDirective, Aggregate, Page } from "@syncfusion/ej2-vue-grids";
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
      aggregates: [
      {
        columns: [
          {
            type: ['Sum', 'Max', 'Min'],
            field: 'Freight',
            columnName: 'Freight',
            format: 'C2',
            footerTemplate: 'Sum: ${Sum}, Min:${Min}, Max:${Max}',
          },
        ],
      },
    ],
    };
  },
  provide : {
      grid: [Aggregate, Page]
  }
}
</script>
<style>
 @import "../node_modules/@syncfusion/ej2-material3-theme/styles/grid/index.css";

</style>