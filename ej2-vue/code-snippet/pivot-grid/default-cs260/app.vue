



<template>
  <div id="app">
      <ejs-pivotview id="pivotview_flist" :height="height" :gridSettings="gridSettings" :enginePopulated="enginePopulated" :width="width" :enableVirtualization="enableVirtualization"
      ></ejs-pivotview>
      <ejs-pivotfieldlist id="pivotfieldlist1" :dataSourceSettings="dataSourceSettings" :enginePopulated="fieldEnginePopulated" :load="load" :dataBound="dataBound" :allowCalculatedField="allowCalculatedField" :renderMode="renderMode"
      ></ejs-pivotfieldlist>
  </div>
</template>

<script>
import Vue from "vue";
import { PivotViewPlugin, PivotFieldListPlugin, FieldList, CalculatedField, VirtualScroll} from "@syncfusion/ej2-vue-pivotview";
import { pivotData } from './pivotData.js';

Vue.use(PivotViewPlugin);
Vue.use(PivotFieldListPlugin);

export default {
  data () {
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
      gridSettings: { columnWidth: 140 },
      allowCalculatedField: true,
      enableVirtualization: true,
      width: "99%",
    }
  },
  methods: {
    fieldEnginePopulated: function() {
      let fieldListObj = document.getElementById('pivotfieldlist1').ej2_instances[0];
      let pivotGridObj = document.getElementById('pivotview_flist').ej2_instances[0];
      fieldListObj.updateView(pivotGridObj);
    },
    dataBound: function () {
      let pivotObj = document.getElementById('pivotview_flist').ej2_instances[0];
      pivotObj.tooltip.destroy();
      pivotObj.refresh();
    },
    load: function () {
      let pivotObj = document.getElementById('pivotview_flist').ej2_instances[0];
      let fieldListObj = document.getElementById('pivotfieldlist1').ej2_instances[0];
      pivotObj.dataSourceSettings = fieldListObj.dataSourceSettings;
      pivotObj.updatePageSettings(true);
      fieldListObj.pageSettings = pivotObj.pageSettings;
    },
    enginePopulated: function () {
        let pivotObj = document.getElementById('pivotview_flist').ej2_instances[0];
        let fieldListObj = document.getElementById('pivotfieldlist1').ej2_instances[0];
        if (fieldListObj && pivotObj) {
          fieldListObj.update(pivotObj);
        }
    }
  },
  provide: {
    pivotview: [CalculatedField, FieldList, VirtualScroll],
  },
}
</script>
<style>
    @import "@syncfusion/ej2-vue-pivotview/styles/material.css";
    #pivotfieldlist1 {
      width: 400px;
      margin-top: 20px;
    }
</style>




