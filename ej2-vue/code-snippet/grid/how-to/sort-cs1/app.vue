<template>
    <div id="app">
     <ejs-button @click='singleSort'>SingleSort</ejs-button>
     <ejs-button @click='multiSort'>MultiSort</ejs-button>
        <ejs-grid ref='grid' :dataSource='data' :allowSorting='true' height='280px' >
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                <e-column field='Freight' headerText='Freight' textAlign='Center' format='C2'  width=80></e-column>
                <e-column field='OrderDate' headerText='Order Date' type='date' format='yMd' width=120></e-column>
                <e-column field='ShipCity' headerText='Ship City' width=120></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script>

import { GridComponent, ColumnsDirective, ColumnDirective, Sort } from "@syncfusion/ej2-vue-grids";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { data } from './datasource.js';
export default {
name: "App",
components: {
"ejs-button":ButtonComponent,
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective
},
  data: () => {
    return {
      data: data,
    };
  },
  provide: {
    grid: [Sort]
  },
  methods: {
    singleSort: function() {
      this.$refs.grid.sortColumn("OrderID","Descending")
    },
    multiSort: function() {
      this.$refs.grid.ej2Instances.sortModule.sortSettings.columns.push({ field: 'ShipCity',  direction: 'Ascending' },{ field: 'CustomerID', direction: 'Descending' });
      this.$refs.grid.refresh();
    }
  }
}
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>