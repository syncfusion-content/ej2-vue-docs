<template>
    <ejs-grid id="ColumnTemplateGrid" ref="grid" :dataSource="data" :allowPdfExport="true"
    :toolbar="toolbar" :toolbarClick="toolbarClick" :pdfQueryCellInfo="pdfQueryCellInfo" height=315>
        <e-columns>
            <e-column headerText="Employee Image" textAlign="Center" :template="'imageTemplate'" width="150"></e-column>
            <e-column field="EmployeeID" headerText="Employee ID" width="125"></e-column>
            <e-column field="FirstName" headerText="Name" width="120"></e-column>
            <e-column headerText="Email ID" :template="'mailTemplate'" width="170"></e-column>
        </e-columns>
        <template v-slot:imageTemplate="{data}">
                <div class="image">
                  <img :src="'data:image/jpeg;base64,'+data.EmployeeImage" :alt="data.EmployeeID"/>
                </div>
            </template>
            <template v-slot:mailTemplate="{data}">
                <div class="link">
                  <a :href="'mailto:'+data.EmailID">{{data.EmailID}}</a>
                </div>
            </template>
    </ejs-grid>
</template>
<script>
import { GridComponent, ColumnsDirective, ColumnDirective, PdfExport, Toolbar } from '@syncfusion/ej2-vue-grids';
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
        };
    },
    methods: {
        toolbarClick: function (args) {
            if (args.item.id === 'ColumnTemplateGrid_pdfexport') {
                this.$refs.grid.pdfExport();
            }
        },
        pdfQueryCellInfo: function(args) {
            if (args.column.headerText === 'Employee Image') {
                args.image = {
                    base64: args.data.EmployeeImage,
                    height: 50,
                    width: 50,
                };
            }
            if (args.column.headerText === 'Email ID') {
                args.hyperLink = {
                    target: 'mailto:' + args.data.EmailID,
                    displayText: args.data.EmailID,
                };
            }
        }
    },
    provide: {
        grid: [PdfExport, Toolbar],
    },
}
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-calendars/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";

 .image img {
    height: 55px;
    width: 55px;
    border-radius: 50px;
    box-shadow: inset 0 0 1px #e0e0e0, inset 0 0 14px rgba(0,0,0,0.2);
}
</style>