

<template>
    <div id="app">
        <ejs-grid :dataSource="data" height='315px'>
          <e-columns>
            <e-column field='OrderID' headerText='Order ID' type='number' textAlign='Right'  headerTextAlign='Right' width=120></e-column>
            <e-column field='CustomerID' headerText='Customer ID' type='string' textAlign='Left' headerTextAlign='Left' width=90></e-column>
            <e-column field='OrderDate' headerText='Order Date' type='date' textAlign='Center' headerTextAlign='Center' format='yMd' width=140></e-column>
            <e-column field='ShipCountry' headerText='Ship Country' type='string' textAlign='Justify' headerTextAlign='Justify' width=120></e-column>
          </e-columns>
        </ejs-grid>
    </div>
</template>
<script>
import Vue from "vue";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";
import { sdata } from './datasource.js';

Vue.use(GridPlugin);

export default {
  data() {
    return {
      data: sdata
    };
  }
}
</script>
<style>
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";
</style>


