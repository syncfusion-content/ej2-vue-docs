<template>
    <div id="app">
        <ejs-button class='e-primary' @click='show' style='margin-bottom:4px;'>open Column Chooser </ejs-button>
        <ejs-grid ref='grid' :dataSource="data" :showColumnChooser='true' height='272px'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' width='120' textAlign="Right"></e-column>
                <e-column field='CustomerID' headerText='Customer Name' width='150' :showInColumnChooser='false'></e-column>
                <e-column field='OrderDate' headerText='Order Date' width='130' format="yMd" textAlign="Right" type='date'></e-column>
                <e-column field='Freight' headerText='Freight' width='120' format='C2' textAlign="Right"></e-column>
                <e-column field='ShipCountry' headerText='Ship Country' :visible='false' width='150'></e-column>
                <e-column field='ShipCity' headerText='Ship City' :visible='false' width='150'></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script>

import { GridComponent, ColumnsDirective, ColumnDirective, ColumnChooser } from "@syncfusion/ej2-vue-grids";
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
  data() {
    return {
      data: data
    };
  },
  methods: {
    show: function() {
        this.$refs.grid.ej2Instances.columnChooserModule.openColumnChooser(100, 40); // give X and Y axis
    }
  },
  provide: {
      grid: [ColumnChooser]
  }
}
</script>
<style>
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";
</style>