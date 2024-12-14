<template>
  <div id="app">
    <ejs-pivotview :dataSourceSettings="dataSourceSettings" :height="height" :width="width" :gridSettings="gridSettings" :showFieldList="showFieldList"> </ejs-pivotview>
  </div>
</template>
<script>
import { PivotViewComponent, FieldList } from "@syncfusion/ej2-vue-pivotview";
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
        enableSorting: true,
        columns: [{ name: 'Year' }, { name: 'Quarter' }],
        rows: [
          { name: 'Product_Categories', caption: 'Product Categories' },
          { name: 'Products' },
          { name: 'Order_Source', caption: 'Order Source' },
        ],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        drilledMembers: [
          { name: 'Product_Categories', items: ['Accessories', 'Bikes'] },
          { name: 'Products', delimiter: '##', items: ['Accessories##Helmets'] },
        ],
        filterSettings: [
          {
            name: 'Products',
            type: 'Exclude',
            items: ['Cleaners', 'Fenders'],
          },
        ],
        expandAll: false,
        values: [
          { name: 'Sold', caption: 'Units Sold' },
          { name: 'Amount', caption: 'Sold Amount' },
        ],
        filters: [],
      },
      height: '450px',
      width: '100%',
      showFieldList: true,
      gridSettings: {
        columnWidth: 120,
        layout: 'Tabular'
      }
    }
  },
  provide: {
    pivotview: [FieldList]
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/material.css";
</style>