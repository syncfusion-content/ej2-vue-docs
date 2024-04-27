

<template>
    <div id="app">
        <ejs-grid id="grid" :dataSource="data" :rowDataBound='rowDataBound'>
          <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
            <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
            <e-column field='Verified' headerText='Verified' displayAsCheckBox='true' width=120> </e-column>
          </e-columns>
        </ejs-grid>
    </div>
</template>
<script>
import Vue from "vue";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
Vue.use(GridPlugin);

export default {
  data() {
    return {
      data: data
    };
  },
  methods: {
      rowDataBound(args){
          let grid = document.getElementById('grid').ej2_instances[0];
          let count = 0;
          let keys = Object.keys(args.data);
          for (let i = 0; i < keys.length; i++) {
              if ( args.data[keys[i]] == null || args.data[keys[i]] == '' || args.data[keys[i]] == undefined) {
                  count++;
              }
          }
          if (count == keys.length) {
              for (let i = 0; i < grid.columns.length; i++) {
                  if (grid.columns[i].displayAsCheckBox) {
                      args.row.children[i].innerHTML = '';
                  }
              }
          }
      }
  }
}
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";
</style>


