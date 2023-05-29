


<template>
    <div id="app">
        <ejs-pivotview :height="height" :dataSourceSettings="dataSourceSettings" :hyperlinkSettings="hyperlinkSettings"> </ejs-pivotview>
    </div>
</template>

<script>
import Vue from "vue";
import { PivotViewPlugin } from "@syncfusion/ej2-vue-pivotview";
import { pivotData } from './pivotData.js';

Vue.use(PivotViewPlugin);

export default {
  data () {
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
          showColumnHeaderHyperlink: true,
          cssClass: 'e-custom-class'
      }
    }
  }
}
</script>
<style>
@import "@syncfusion/ej2-vue-pivotview/styles/material.css";
.e-custom-class {
  color: #008cff;
  text-decoration: underline;
}

.e-custom-class:hover {
  color: red;
  text-decoration: none;
}
</style>



