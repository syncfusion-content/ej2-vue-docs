

<template>
    <div id="app">
        <ejs-button @click.native="show">open Column Chooser </ejs-button>
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
import Vue from "vue";
import { GridPlugin, ColumnChooser } from "@syncfusion/ej2-vue-grids";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { data } from './datasource.js';

Vue.use(GridPlugin);
Vue.use(ButtonPlugin);

export default {
  data() {
    return {
      data: data
    };
  },
  methods: {
    show: function() {
        this.$refs.grid.ej2Instances.columnChooserModule.openColumnChooser(200, 50); // give X and Y axis
    }
  },
  provide: {
      grid: [ColumnChooser]
  }
});
</script>
<style>
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>


