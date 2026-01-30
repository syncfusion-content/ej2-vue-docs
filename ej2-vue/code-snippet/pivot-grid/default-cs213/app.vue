<template>
  <div id="app">
    <ejs-pivotview id="pivotview" :dataSourceSettings="dataSourceSettings" :height="height" :dataBound="trend"
      :showGroupingBar="showGroupingBar"> </ejs-pivotview>
  </div>
</template>
<script>
import { PivotViewComponent, GroupingBar } from "@syncfusion/ej2-vue-pivotview";
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
        expandAll: true,
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: []
      },
      height: 350,
      showGroupingBar: true
    }
  },
  methods: {
    trend: function () {
      let pivotGridObj = document.getElementById('pivotview').ej2_instances[0];
      if (pivotGridObj.showGroupingBar) {
        let columns = [];
        for (let i = 1; i < (pivotGridObj.grid).columnModel.length; i++) {
          columns.push((pivotGridObj.grid).columnModel[i].field);
        }
        pivotGridObj.grid.autoFitColumns(columns);
      }
    }
  },
  provide: { pivotview: [GroupingBar] }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/tailwind3.css";
</style>