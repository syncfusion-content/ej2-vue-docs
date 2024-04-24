

<template>
    <div id="app">
        <ejs-grid :dataSource="data" :allowReordering='true' :allowSelection='false' height='315px'>
          <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
            <e-column field='ShipCity' width=90 :lockColumn='true' :customAttributes="customAttributes"></e-column>
            <e-column field='ShipName' width=120></e-column>
            <e-column field='ShipCountry' width=120></e-column>
            <e-column field='ShipRegion' width=120></e-column>
          </e-columns>
        </ejs-grid>
    </div>
</template>
<script>
import Vue from "vue";
import { GridPlugin, Reorder } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);

export default {
  data() {
    return {
      data: data,
      customAttributes : {class: 'customcss'}
    };
  },
  provide: {
      grid: [Reorder]
  }
}
</script>
<style>
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";
 .e-grid .e-rowcell.customcss{
  background-color: #ecedee;
}
.e-grid .e-headercell.customcss{
  background-color: #ecedee;
}
</style>


