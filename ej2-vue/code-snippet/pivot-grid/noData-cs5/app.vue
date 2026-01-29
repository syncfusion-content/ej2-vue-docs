<template>
  <div id="app">
    <ejs-pivotview :dataSourceSettings="dataSourceSettings" :height="height" :enginePopulating="enginePopulating">
    </ejs-pivotview>
  </div>
</template>
<script>
import { PivotViewComponent } from "@syncfusion/ej2-vue-pivotview";
import { noData } from './noData.js';

export default {
  name: "App",
  components: {
    "ejs-pivotview": PivotViewComponent
  },
  data() {
    return {
      dataSourceSettings: {
        dataSource: noData,
        expandAll: true,
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        columns: [{ name: 'Date' }],
        values: [{ name: 'Quantity', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'State' }],
        filters: [],
        emptyCellsTextContent: '**'
      },
      height: 350
    }
  },
  methods: {
    enginePopulating: function (args) {
      args.dataSourceSettings.columns[0].caption = 'Full Year';
      args.dataSourceSettings.emptyCellsTextContent = '##';
    }
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/tailwind3.css";
</style>