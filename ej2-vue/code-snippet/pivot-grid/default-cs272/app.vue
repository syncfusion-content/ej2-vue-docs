



<template>
    <div id="app">
        <ejs-button id="export-btn" :isPrimary="isPrimary" v-on:click.native="btnClick">PDF Export</ejs-button>
        <ejs-pivotview id="pivotview" :height="height" :dataSourceSettings="dataSourceSettings" :allowPdfExport="allowPdfExport" 
        :enableVirtualization="enableVirtualization" :onPdfCellRender="onPdfCellRender"> </ejs-pivotview>
    </div>
</template>

<script>
import Vue from "vue";
import { PivotViewPlugin, PDFExport, PdfCellRenderArgs, VirtualScroll } from "@syncfusion/ej2-vue-pivotview";
import { ButtonPlugin, ChangeEventArgs} from "@syncfusion/ej2-vue-buttons";
import { pivotData } from './pivotData.js';

Vue.use(PivotViewPlugin);
Vue.use(ButtonPlugin);

export default {
  data () {
    return {
      dataSourceSettings: {
        dataSource: pivotData,
        expandAll: false,
        drilledMembers: [{ name: 'Country', items: ['France'] }],
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: []
      },
      height: 320,
      allowPdfExport: true,
      isPrimary: true,
      enableVirtualization: true,
    }
  },
  methods: {
    onPdfCellRender: function (args: PdfCellRenderArgs) {
      if (args.pivotCell && args.pivotCell.valueSort && args.pivotCell.valueSort.levelName === 'FY 2015.Units Sold') {
        args.column.width = 60
    }
    },
    btnClick: function (args) {
      let pivotGridObj = document.getElementById('pivotview').ej2_instances[0];
      pivotGridObj.pdfExport({}, false, null, false, true);
    }
  },
  provide: {
    pivotview: [
      PDFExport,
      VirtualScroll
    ]
  },
}
</script>
<style>
@import "@syncfusion/ej2-vue-pivotview/styles/material.css";
</style>




