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

import { TreeGridComponent as EjsTreegrid, Page, Toolbar, PdfExport,
ColumnDirective as EColumn, ColumnsDirective as EColumns
 } from "@syncfusion/ej2-vue-treegrid";
import { sampleData } from "./datasource.js";
import { image } from './image.js';

const treegrid = ref(null);

const data = sampleData;

const pageSettings = { pageSize: 7 };

const toolbarOptions = ['PdfExport'];

const toolbarClick = function(args) {
    if (args['item'].text === 'PDF Export') {
      let pdfExportProperties = {
        header: {
            fromTop: 0,
            height: 130,
            contents: [
                {
                    type: 'Image',
                    src: image,
                    position: { x: 40, y: 10 },
                    size: { height: 100, width: 250 },
                }
            ]
        },
        footer: {
            fromBottom: 160,
            height: 150,
            contents: [
                {
                    type: 'PageNumber',
                    pageNumberType: 'Arabic',
                    format: 'Page {$current} of {$total}',
                    position: { x: 0, y: 25 },
                    style: { textBrushColor: '#ffff80', fontSize: 15 }
                }
            ]
        }
      }
      treegrid.value.pdfExport(pdfExportProperties);
    }
};

provide('treegrid',  [ Page, Toolbar, PdfExport ]);

</script>