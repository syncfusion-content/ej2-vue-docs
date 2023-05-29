

<template>
    <div id="app">
        <ejs-pivotview :dataSourceSettings="dataSourceSettings" :height="height" :editSettings="editSettings"> </ejs-pivotview>
    </div>
</template>

<script>
import Vue from "vue";
import { PivotViewPlugin } from "@syncfusion/ej2-vue-pivotview";
import { pivot_flatdata } from './pivot_flatdata.js';

Vue.use(PivotViewPlugin);

export default {
  data () {
    return {
      dataSourceSettings: {
      dataSource: pivot_flatdata,
      expandAll: true,
      rows: [{ name: 'Country'}],
      columns: [{ name: 'Date' }, { name: 'Product' }],
      values: [{ name: 'Quantity', caption:'Units Sold' },{ name: 'Amount', caption:'Sold Amount' }],
      formatSettings: [{ name: 'Amount', format: 'C0' }],
      showColumnSubTotals:false
      },
      height: 350,
      editSettings: { allowEditing: true, allowInlineEditing: true }
    }
  }
}
</script>
<style>
@import "@syncfusion/ej2-vue-pivotview/styles/material.css";
</style>



