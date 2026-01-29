<template>
  <div id="app">
    <ejs-pivotview :dataSourceSettings="dataSourceSettings" :height="height" :cellClick="cellClick"> </ejs-pivotview>
  </div>
</template>
<script>
import { PivotViewComponent } from "@syncfusion/ej2-vue-pivotview";
import { pivotData } from './pivotData.js';

export default {
  name: "App",
  components: {
    "ejs-pivotview": PivotViewComponent
  },
  data() {
    return {
      dataSourceSettings: {
        dataSource: pivotData,
        expandAll: false,
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: [],
      },
      height: 350
    }
  },
  methods: {
    cellClick: function (args) {
      //triggers on every cell click in pivot table
      args.currentCell.setAttribute("style", "background-color: red;")
    }
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/tailwind3.css";
</style>