


<template>
    <div id="app">
        <ejs-pivotview :dataSourceSettings="dataSourceSettings" :height="height"> </ejs-pivotview>
    </div>
</template>

<script>
import Vue from "vue";
import { PivotViewPlugin } from "@syncfusion/ej2-vue-pivotview";

Vue.use(PivotViewPlugin);

export default {
  data () {
    return {
      dataSourceSettings: {
        url: 'https://cdn.syncfusion.com/data/sales-analysis.json',
        expandAll: false,
        rows: [
          { name: 'EnerType', caption: 'Energy Type' },
        ],
        columns: [
          { name: 'EneSource', caption: 'Energy Source' }
        ],
        values: [
          { name: 'PowUnits', caption: 'Units (GWh)' },
          { name: 'ProCost', caption: 'Cost (MM)' }
        ],
        filters: []
      },
      height: 350
    }
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-grids/styles/material.css";
@import "../node_modules/@syncfusion/ej2-pivotview/styles/material.css";
</style>



