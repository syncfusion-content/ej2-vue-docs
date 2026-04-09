<template>
  <div id="app">
    <ejs-button id="export-btn" :isPrimary="isPrimary" v-on:click="btnClick">PDF Export</ejs-button>
  <ejs-pivotview id="pivotview" :height="height" :dataSourceSettings="dataSourceSettings"
      :allowPdfExport="allowPdfExport" :gridSettings="gridSettings"> </ejs-pivotview>
  </div >
</template >
<script>
import { PivotViewComponent, PDFExport } from "@syncfusion/ej2-vue-pivotview";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { pivotData } from './pivotData.js';

export default {
  name: "App",
  components: {
    "ejs-button": ButtonComponent,
    "ejs-pivotview": PivotViewComponent
  },
  data() {
    return {
      dataSourceSettings: {
        dataSource: pivotData,
        expandAll: false,
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
      },
      height: 320,
      allowPdfExport: true,
      isPrimary: true,
      gridSettings: {
        pdfQueryCellInfo: function (args) {
            if (args.data && args.data.actualText === 'Sold') {
                if ((args).value < 700) {
                    args.style = {
                        backgroundColor: '#df3800',
                        fontFamily: 'Courier',
                        textPenColor: '#FFFFFF'
                    };
                } else {
                    args.style = {
                        backgroundColor: '#00A45A',
                        fontFamily: 'TimesRoman',
                        textPenColor: '#FFFFFF'
                    };
                }
            }
        }
      }
    }
  },
  methods: {
    btnClick: function () {
      let pivotGridObj = document.getElementById('pivotview').ej2_instances[0];
      pivotGridObj.pdfExport();
    }
  },
  provide: {
    pivotview: [
      PDFExport
    ]
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/tailwind3.css";
</style>