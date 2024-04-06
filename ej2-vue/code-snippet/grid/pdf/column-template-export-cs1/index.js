
import Vue from "vue";
import { GridPlugin, PdfExport, Toolbar } from '@syncfusion/ej2-vue-grids';
import { employeeData } from "./datasource.js";

Vue.use(GridPlugin);


new Vue({
    el: '#app',
    template: `
    <div id="app">
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
    </div>`,

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
        pdfQueryCellInfo: function (args) {
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
    }

});