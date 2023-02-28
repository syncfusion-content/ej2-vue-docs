



<template>
    <div id="app">
        <ejs-pivotview :height="height" :dataSourceSettings="dataSourceSettings" :gridSettings="gridSettings" :cellSelecting="cellSelecting"> </ejs-pivotview>
    </div>
</template>

<script>
import Vue from "vue";
import { PivotViewPlugin, PivotCellSelectedEventArgs } from "@syncfusion/ej2-vue-pivotview";
import { pivotData } from './pivotData.js';

Vue.use(PivotViewPlugin);

export default {
  data () {
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
    cellSelecting: function(args: PivotCellSelectedEventArgs) {
        //args.selectedCellsInfo -> get selected cells information.
        //args.pivotValues -> get the pivot values of the pivot table.
    },
  }
}
</script>
<style>
@import "@syncfusion/ej2-vue-pivotview/styles/material.css";
</style>




