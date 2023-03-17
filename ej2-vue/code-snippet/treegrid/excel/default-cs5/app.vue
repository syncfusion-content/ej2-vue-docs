

<template>
<div id="app">
        <ejs-treegrid ref='treegrid' :dataSource='data' height='220' childMapping='subtasks' :treeColumnIndex='1' :allowPaging='true' :pageSettings='pageSettings' :allowExcelExport='true' :toolbar='toolbarOptions' :toolbarClick='toolbarClick' :excelExportComplete='excelExportComplete'>
            <e-columns>
                <e-column field='taskID' headerText='Task ID' width='90' textAlign='Right'></e-column>
                <e-column field='taskName' headerText='Task Name' width='160'></e-column>
                <e-column field='startDate' headerText='Start Date' width='90' format="yMd" textAlign='Right'></e-column>
                <e-column field='duration' headerText='Duration' width='80' :visible='false' textAlign='Right'></e-column>
            </e-columns>
        </ejs-treegrid>
</div>
</template>
<script>
import Vue from "vue";
import { TreeGridPlugin, Page, Toolbar, ExcelExport } from "@syncfusion/ej2-vue-treegrid";
import { sampleData } from "./datasource.js";

Vue.use(TreeGridPlugin);

export default {
  data ()  {
    return {
      data: sampleData,
      toolbarOptions: ['ExcelExport'],
      pageSettings: { pageSize: 7 }
    };
  },
  methods: {
      toolbarClick(args) {
        if (args['item'].text === 'Excel Export') {
          this.$refs.treegrid.ej2Instances.grid.getColumns()[2].visible = false;
          this.$refs.treegrid.ej2Instances.grid.getColumns()[3].visible = true;
          this.$refs.treegrid.excelExport();
        }
      }
      excelExportComplete() {
        this.$refs.treegrid.ej2Instances.grid.getColumns()[2].visible = true;
        this.$refs.treegrid.ej2Instances.grid.getColumns()[3].visible = false;
      }
  },
  provide: {
      treegrid: [ Page, Toolbar, ExcelExport ]
  }
}
</script>



