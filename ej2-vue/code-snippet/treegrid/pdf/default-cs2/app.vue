

<template>
<div id="app">
        <ejs-treegrid ref='treegrid' :dataSource='data' height='220' childMapping='subtasks' :treeColumnIndex='1' :allowPaging='true' :pageSettings='pageSettings' :allowPdfExport='true' :toolbar='toolbarOptions' :toolbarClick='toolbarClick' :queryCellInfo='queryCellInfo'
        :pdfQueryCellInfo='pdfQueryCellInfo'>
            <e-columns>
                <e-column field='taskID' headerText='Task ID' width='90' textAlign='Right'></e-column>
                <e-column field='taskName' headerText='Task Name' width='160'></e-column>
                <e-column field='startDate' headerText='Start Date' width='90' format="yMd" textAlign='Right'></e-column>
                <e-column field='duration' headerText='Duration' width='80' textAlign='Right'></e-column>
            </e-columns>
        </ejs-treegrid>
</div>
</template>
<script>
import Vue from "vue";
import { TreeGridPlugin, Page, Toolbar, PdfExport } from "@syncfusion/ej2-vue-treegrid";
import { sampleData } from "./datasource.js";

Vue.use(TreeGridPlugin);

export default {
  data ()  {
    return {
      data: sampleData,
      toolbarOptions: ['PdfExport'],
      pageSettings: { pageSize: 7 }
    };
  },
  methods: {
      toolbarClick(args) {
        if (args['item'].text === 'PDF Export') {
          this.$refs.treegrid.pdfExport();
        }
      }
      pdfQueryCellInfo(args) {
        if(args.column.field == 'duration'){
          if(+args.value === 0 || args.value === "") {
            args.style = {backgroundColor: '#336c12'};
          }
          else if(args.value < 3) {
            args.style = {backgroundColor: '#7b2b1d'};
          }
        }
      }
      queryCellInfo(args) {
        if (args.data['duration'] == 0 && args.column.field === 'duration' ) {
            args.cell.style.background= '#336c12';
        } else if (args.data['duration'] < 3 && args.column.field === 'duration') {
            args.cell.style.background= '#7b2b1d';
        }
      }
  },
  provide: {
      treegrid: [ Page, Toolbar, PdfExport ]
  }
}
</script>



