<template>
  <div id="app">
    <ejs-pivotview id="pivotview_flist" :height="height" :allowDeferLayoutUpdate="allowDeferLayoutUpdate"></ejs-pivotview>
    <ejs-pivotfieldlist id="pivotfieldlist1" :allowDeferLayoutUpdate="allowDeferLayoutUpdate"
      :dataSourceSettings="dataSourceSettings" :enginePopulated="fieldEnginePopulated"
      :renderMode="renderMode"></ejs-pivotfieldlist>
  </div>
</template>
<script>
import { PivotViewComponent, PivotFieldListComponent } from "@syncfusion/ej2-vue-pivotview";
import { pivotData } from './pivotData.js';

export default {
  name: "App",
  components: {
    "ejs-pivotview": PivotViewComponent,
    "ejs-pivotfieldlist": PivotFieldListComponent
  },
  data() {
    return {
      dataSourceSettings: {
        dataSource: pivotData,
        expandAll: false,
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: []
      },
      height: 350,
      renderMode: "Fixed",
      allowDeferLayoutUpdate: true
    }
  },
  methods: {
    fieldEnginePopulated: function (args) {
      let fieldlistObj = document.getElementById('pivotfieldlist1').ej2_instances[0];
      let pivotGridObj = document.getElementById('pivotview_flist').ej2_instances[0];
      if (fieldlistObj.isRequiredUpdate) {
        fieldlistObj.updateView(pivotGridObj);
      }
      pivotGridObj.notify('ui-update', pivotGridObj);
      fieldlistObj.notify('tree-view-update', fieldlistObj);
    }
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/material.css";

#pivotfieldlist1 {
  width: 400px;
  margin-top: 20px;
}</style>