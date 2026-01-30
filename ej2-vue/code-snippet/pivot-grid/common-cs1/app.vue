<template>
  <div id="app">
    <ejs-pivotview :dataSourceSettings="dataSourceSettings" :height="height"> </ejs-pivotview>
  </div>
</template>
<script>
import { PivotViewComponent } from "@syncfusion/ej2-vue-pivotview";

export default {
  name: "App",
  components: {
    "ejs-pivotview": PivotViewComponent
  },
  data() {
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
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-grids/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-pivotview/styles/tailwind3.css";
</style>