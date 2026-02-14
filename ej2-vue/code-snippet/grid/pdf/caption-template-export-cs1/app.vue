<template>
    <ejs-grid id="CaptionTemplateGrid" ref="grid" :dataSource="data" :allowGrouping="true" :groupSettings="groupOptions"
    :allowPdfExport="true" :toolbar="toolbar" :toolbarClick="toolbarClick" :exportGroupCaption="exportGroupCaption" height=315>
        <e-columns>
            <e-column field="EmployeeID" headerText="Employee ID" width="120"></e-column>
            <e-column field="FirstName" headerText="Name" width="120"></e-column>
            <e-column field="City" headerText="City"></e-column>
            <e-column field="Title" headerText="Title" width="170"></e-column>
        </e-columns>
    </ejs-grid>
</template>

<script>

import { GridComponent, ColumnsDirective, ColumnDirective, Group, PdfExport, Toolbar } from '@syncfusion/ej2-vue-grids';
import { employeeData } from './datasource.js';
export default {
name: "App",
components: {
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective
},
    data: () => {
        return {
            data: employeeData,
            toolbar: ['PdfExport'],
            groupOptions: { 
                columns: ['EmployeeID'],
                captionTemplate: '${field} - ${key}'
            }
        };
    },
    methods: {
        toolbarClick: function (args) {
            if (args.item.id === 'CaptionTemplateGrid_pdfexport') {
                this.$refs.grid.pdfExport();
            }
        },
        exportGroupCaption: function(args) {
            args.captionText = args.data.field + ' - ' + args.data.key;
        }
    },
    provide: {
        grid: [Group, PdfExport, Toolbar],
    },
}
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-calendars/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material3.css";
</style>