<template>
  <div id="app">
    <ejs-pivotview id="pivotview" :dataSourceSettings="dataSourceSettings" :height="height" :showToolbar="showToolbar"
      :allowPdfExport="allowPdfExport" :displayOption="displayOption" :showFieldList="showFieldList" :toolbar="toolbar"
      :actionBegin="actionBegin" :enableVirtualization="enableVirtualization"> </ejs-pivotview>
  </div>
</template >
<script>
import { PivotViewComponent, Toolbar, FieldList, PDFExport } from "@syncfusion/ej2-vue-pivotview";
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
      displayOption: { view: 'Both' },
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
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/tailwind3.css";
</style>