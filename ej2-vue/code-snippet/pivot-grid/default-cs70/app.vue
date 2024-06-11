<template>
  <div id="app">
    <ejs-pivotview id="pivotview_flist" :dataSourceSettings="dataSourceSettings" :height="height"
      :showFieldList="showFieldList" :enginePopulated="fieldEnginePopulated"> </ejs-pivotview>
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
        drilledMembers: [{ name: 'Country', items: ['France'] }],
        columns: [{ name: 'Products' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: []
      },
      height: 350,
      showFieldList: true
    }
  },
  provide: {
    pivotview: [FieldList]
  },
  methods: {
    fieldEnginePopulated: function () {
      let pivotTableObj = document.getElementById('pivotview_flist').ej2_instances[0];
      Object.keys(pivotTableObj.engineModule.fieldList).forEach((key) => {
        if (key === 'Quarter') {
          pivotTableObj.engineModule.fieldList[key].caption = 'Production Quarter Year';
        }
        else if (key === 'Year') {
          pivotTableObj.engineModule.fieldList[key].caption = 'Production Year';
        }
      });
    }
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/material.css";
</style>