<template>
<div id="app">
        <ejs-treegrid ref='treegrid' :dataSource='data' height='220' childMapping='subtasks' :treeColumnIndex='1' :allowPaging='true' :pageSettings='pageSettings' :allowPdfExport='true' :toolbar='toolbarOptions' :toolbarClick='toolbarClick'>
            <e-columns>
                <e-column field='taskID' headerText='Task ID' width='90' textAlign='Right'></e-column>
                <e-column field='taskName' headerText='Task Name' width='160'></e-column>
                <e-column field='startDate' headerText='Start Date' width='90' format="yMd" textAlign='Right'></e-column>
                <e-column field='duration' headerText='Duration' width='80' textAlign='Right'></e-column>
            </e-columns>
        </ejs-treegrid>
</div>
</template>
<script setup>
import { provide, ref } from "vue";

import { TreeGridComponent as EjsTreegrid, Page, Toolbar, PdfExport, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-treegrid";
import { sampleData, adventProFont } from "./datasource.js";
import { PdfTrueTypeFont } from '@syncfusion/ej2-pdf-export';

const treegrid = ref(null);

const data = sampleData;

const toolbarOptions = ['PdfExport'];

const pageSettings = { pageSize: 7 };

const toolbarClick = function(args) {
    if (args['item'].text === 'PDF Export') {
      let pdfExportProperties = {
        theme: {
            header: {font:  new PdfTrueTypeFont(adventProFont, 12) },
            record: { font: new PdfTrueTypeFont(adventProFont, 9) }
        }
      }
      treegrid.value.pdfExport(pdfExportProperties);
    }
};

provide('treegrid',  [ Page, Toolbar, PdfExport ]);

</script>