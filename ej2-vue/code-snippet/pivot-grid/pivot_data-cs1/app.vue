<template>
  <div id="app">
    <ejs-pivotview id="pivotview" :height="height" :dataSourceSettings="dataSourceSettings"
      :allowConditionalFormatting="allowConditionalFormatting" :toolbar="toolbar" :showToolbar="showToolbar">
    </ejs-pivotview>
  </div>
</template>
<script>
import { PivotViewComponent, ConditionalFormatting, Toolbar } from "@syncfusion/ej2-vue-pivotview";
import { Pivot_Data } from './Pivot_Data.js';

export default {
  name: "App",
  components: {
    "ejs-pivotview": PivotViewComponent
  },
  data() {
    return {
      dataSourceSettings: {
        dataSource: Pivot_Data,
        expandAll: false,
        enableSorting: true,
        drilledMembers: [{ name: 'Country', items: ['France', 'Germany'] }],
        columns: [{ name: 'Year' }, { name: 'Order_Source', caption: 'Order Source' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        values: [{ name: 'In_Stock', caption: 'In Stock' },
        { name: 'Sold', caption: 'Units Sold' }],
        filters: [{ name: 'Product_Categories', caption: 'Product Categories' }]
      },
      allowConditionalFormatting: true,
      height: 350,
      showToolbar: true,
      toolbar: [
        "ConditionalFormatting"
      ]
    }
  },
  provide: {
    pivotview: [ConditionalFormatting, Toolbar]
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/tailwind3.css";
</style>