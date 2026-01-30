<template>
  <div id="app">
    <ejs-pivotview id="pivotview" ref="pivotview" :dataSourceSettings="dataSourceSettings" :height="height"
      :showToolbar="showToolbar" :toolbar="toolbar" :displayOption="displayOption" :chartTypes="chartTypes">
    </ejs-pivotview>
  </div>
</template>
<script>
import { PivotViewComponent, Toolbar, } from "@syncfusion/ej2-vue-pivotview";
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
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: []
      },
      height: 350,
      displayOption: { view: 'Both' },
      showToolbar: true,
      chartTypes: ['Column', 'Bar', 'Line', 'Area'],
      toolbar: ['Grid', 'Chart']
    };
  },
  provide: {
    pivotview: [Toolbar]
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/tailwind3.css";</style>