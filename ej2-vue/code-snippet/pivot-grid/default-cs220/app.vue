<template>
  <div id="app">
    <ejs-pivotview :height="height" :dataSourceSettings="dataSourceSettings" :gridSettings="gridSettings"
      :cellSelected="cellSelected"> </ejs-pivotview>
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
        drilledMembers: [{ name: 'Year', items: ['FY 2015'] }, { name: 'Country', items: ['France'] }],
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: []
      },
      height: 350,
      gridSettings: {
        allowSelection: true,
        selectionSettings: { mode: 'Both', type: 'Multiple' }
      }
    }
  },
  methods: {
    cellSelected: function () {
      //args.selectedCellsInfo -> get selected cells information.
      //args.pivotValues -> get the pivot values of the pivot table.
    },
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/tailwind3.css";
</style>