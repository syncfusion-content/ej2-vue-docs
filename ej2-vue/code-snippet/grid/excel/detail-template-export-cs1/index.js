
import Vue from "vue";
import { GridPlugin, DetailRow, ExcelExport, Toolbar } from '@syncfusion/ej2-vue-grids';
import { employeeData } from './datasource.js';

Vue.use(GridPlugin);


new Vue({
    el: '#app',
    template: `
    <div id="app">
        <ejs-grid id="DetailTemplateGrid" ref="grid" :dataSource="data" :detailTemplate="'detailTemplate'" :toolbar="toolbar"
        :toolbarClick="toolbarClick" :exportDetailTemplate="exportDetailTemplate" height=315 :allowExcelExport="true">
            <e-columns>
                <e-column field="Category" headerText="Category" width="140" textAlign="Right"></e-column>
                <e-column field="ProductID" headerText="Product ID" width="140"></e-column>
                <e-column field="Status" headerText="Status" width="200"></e-column>
            </e-columns>
            <template v-slot:detailTemplate="{ data }">
                <table class="detailtable" width="100%">
                    <colgroup>
                        <col width="40%" />
                        <col width="60%" />
                    </colgroup>
                    <thead>
                        <tr>
                            <th colspan="2" style="font-weight: 500;text-align: center;background-color: #ADD8E6;">
                                Product Details
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowspan="4" style="text-align: center;">
                                <img class='photo' :src="'data:image/jpeg;base64,'+data.ProductImg" alt="data.EmployeeID" />
                            </td>
                            <td>
                                <span style="font-weight: 500;color: #0a76ff;">Offers: {{data.Offers}} </span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span>Available: {{data.Available}} </span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span class="link">
                                    Contact: <a :href="'mailto:'+data.Contact">{{data.Contact}}</a>
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span style="font-weight: 500;color: #0a76ff;"> Ratings: {{data.Ratings}}</span>
                            </td>
                        </tr>
                        <tr>
                            <td style="text-align: center;">
                                <span> {{data.productDesc}}</span>
                            </td>
                            <td>
                                <span>{{data.ReturnPolicy}}</span>
                            </td>
                        </tr>
                        <tr>
                            <td style="text-align: center;">
                                <span style="font-weight: 500;" > {{data.Cost}}</span>
                            </td>
                            <td>
                                <span>{{data.Cancellation}}</span>
                            </td>
                        </tr>
                        <tr>
                            <td style="text-align: center;">
                                <span :class="data.Status" style="font-weight: 500;" > {{data.Status}}</span>
                            </td>
                            <td>
                                <span style="font-weight: 500;color: #0a76ff;">{{data.Delivery}}</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </template>
        </ejs-grid>
    </div>
`,

    data: () => {
        return {
            data: employeeData,
            toolbar: ['ExcelExport'],
        };
    },
    methods: {
        toolbarClick: function (args) {
            if (args.item.id === 'DetailTemplateGrid_excelexport') {
                this.$refs.grid.excelExport({ hierarchyExportMode: "Expanded" });
            }
        },
        exportDetailTemplate: function (args) {
            args.value = {
                columnHeader: [
                    {
                        cells: [{
                            index: 0, colSpan: 2, value: 'Product Details',
                            style: { backColor: '#ADD8E6', excelHAlign: 'Center', bold: true }
                        }]
                    }
                ],
                rows: [
                    {
                        cells: [
                            {
                                index: 0, rowSpan: 4, image: {
                                    base64: args.parentRow.data['ProductImg'],
                                    height: 80, width: 100
                                }
                            },
                            {
                                index: 1, value: "Offers: " + args.parentRow.data['Offers'],
                                style: { bold: true, fontColor: '#0a76ff' }
                            },
                        ]
                    },
                    {
                        cells: [
                            {
                                index: 1, value: 'Available: ' + args.parentRow.data['Available']
                            }]
                    },
                    {
                        cells: [
                            {
                                index: 1, value: 'Contact: ',
                                hyperLink: {
                                    target: 'mailto:' + args.parentRow.data['Contact'],
                                    displayText: args.parentRow.data['Contact']
                                }
                            }]
                    },
                    {
                        cells: [
                            {
                                index: 1, value: 'Ratings: ' + args.parentRow.data['Ratings'],
                                style: { bold: true, fontColor: '#0a76ff' }
                            }
                        ]
                    },
                    {
                        cells: [
                            {
                                index: 0, value: args.parentRow.data['productDesc'],
                                style: { excelHAlign: 'Center' }
                            },
                            { index: 1, value: args.parentRow.data['ReturnPolicy'] }
                        ]
                    },
                    {
                        cells: [
                            {
                                index: 0, value: args.parentRow.data['Cost'],
                                style: { excelHAlign: 'Center', bold: true }
                            },
                            { index: 1, value: args.parentRow.data['Cancellation'] }
                        ]
                    },
                    {
                        cells: [
                            {
                                index: 0, value: args.parentRow.data['Status'],
                                style: {
                                    bold: true, fontColor: args.parentRow.data['Status'] === 'Available' ? '#00FF00' : '#FF0000',
                                    excelHAlign: 'Center'
                                }
                            },
                            {
                                index: 1, value: args.parentRow.data['Delivery'],
                                style: { bold: true, fontColor: '#0a76ff' }
                            }
                        ]
                    }
                ],
            };
        }
    },
    provide: {
        grid: [DetailRow, ExcelExport, Toolbar]
    }

});