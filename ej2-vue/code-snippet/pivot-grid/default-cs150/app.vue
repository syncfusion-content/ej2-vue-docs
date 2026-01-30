<template>
  <div id="app">
    <ejs-pivotview :height="height" :dataSourceSettings="dataSourceSettings" :hyperlinkSettings="hyperlinkSettings"
      :hyperlinkCellClick="hyperlinkCellClick"> </ejs-pivotview>
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
        enableSorting: true,
        drilledMembers: [{ name: 'Country', items: ['France'] }],
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: []
      },
      height: 350,
      hyperlinkSettings: {
        showHyperlink: true,
        cssClass: 'e-custom-class'
      }
    }
  },
  methods: {
    hyperlinkCellClick: function (args) {
      args.cancel = false;
      args.currentCell.setAttribute("data-url", "https://ej2.syncfusion.com/");//here we have redirected to EJ2 Syncfusion on hyperlinkcell click
    }
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/tailwind3.css";

.e-custom-class {
  color: #008cff;
  text-decoration: underline;
}

.e-custom-class:hover {
  color: red;
  text-decoration: none;
}
</style>