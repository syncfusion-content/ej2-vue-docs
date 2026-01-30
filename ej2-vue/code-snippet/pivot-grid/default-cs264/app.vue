<template>
  <div id="app">
    <ejs-pivotview id="pivotview" :dataSourceSettings="dataSourceSettings" :height="height"
      :gridSettings="gridSettings"></ejs-pivotview>
  </div>
</template >
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
        rows: [{ name: 'Country' }, { name: 'Products' }],
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Amount', caption: 'Sold Amount' }, { name: 'Sold', caption: 'Units Sold' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
      },
      height: 350,
      gridSettings: {
        columnRender: function (args) {
          for (var i = 1; i < args.columns.length; i++) {
            if (args.stackedColumns[i].customAttributes &&
              args.stackedColumns[i].customAttributes.cell.valueSort.levelName === 'FY 2016.Units Sold') {
              args.stackedColumns[i].visible = false;
            }
          }
        }
      },
    }
  },
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/tailwind3.css";
</style>