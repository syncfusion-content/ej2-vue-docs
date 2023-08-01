



<template>
    <div id="app">
        <ejs-pivotview id="pivotview" :dataSourceSettings="dataSourceSettings" :height="height" 
        :showToolbar="showToolbar" :allowPdfExport="allowPdfExport" :displayOption="displayOption"
        :showFieldList="showFieldList" :toolbar="toolbar" :actionBegin="actionBegin" 
        :enableVirtualization="enableVirtualization"> </ejs-pivotview>
</div>
</template >

<script>
import Vue from "vue";
import { PivotViewPlugin, Toolbar, FieldList, FieldList } from "@syncfusion/ej2-vue-pivotview";
import { pivotData } from './pivotData.js';

Vue.use(PivotViewPlugin);

export default {
  data () {
    return {
      dataSourceSettings: {
        dataSource: pivotData,
        expandAll: false,
        columns: [{ name: 'Year', caption: 'Production Year' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }],
        rows: [{ name: 'Country' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: [],
      },
      height:'350px',
      displayOption: { view:'Both' },
      toolbar: ['Grid', 'Chart', 'Export', 'FieldList'],
      showFieldList: true,
      showToolbar: true,
      allowPdfExport: true,
      enableVirtualization: true
    }
  },
  methods: {
    actionBegin: function (args) {
      let pivotGridObj = document.getElementById('pivotview').ej2_instances[0];
      if (args.actionName == 'PDF export') {
          args.cancel = true;
          pivotGridObj.pdfExport({}, false, null, false, true);
      }
    }
  },
  provide: {
        pivotview: [Toolbar, FieldList, PDFExport]
    }
}
</script>
<style>
@import "@syncfusion/ej2-vue-pivotview/styles/material.css";
</style>




