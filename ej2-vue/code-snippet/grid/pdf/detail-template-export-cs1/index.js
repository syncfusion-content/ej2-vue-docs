
import Vue from "vue";
import { GridPlugin, DetailRow, PdfExport, Toolbar } from '@syncfusion/ej2-vue-grids';
import { employeeData } from './datasource.js';

Vue.use(GridPlugin);


new Vue({
    el: '#app',
    template: `
    <div id="app">
        <ejs-grid id="DetailTemplateGrid" ref="grid" :dataSource="data" :detailTemplate="detailTemplate" :toolbar="toolbar"
        :toolbarClick="toolbarClick" :exportDetailTemplate="exportDetailTemplate" height=315 :allowPdfExport="true">
            <e-columns>
                <e-column field="Category" headerText="Category" width="140" textAlign="Right"></e-column>
                <e-column field="ProductID" headerText="Product ID" width="120"></e-column>
                <e-column field="Status" headerText="Status" width="120"></e-column>
            </e-columns>
        </ejs-grid>
    </div>
`,

    data: () => {
        return {
            data: employeeData,
            toolbar: ['PdfExport'],
            detailTemplate: function () {
                return {
                    template: Vue.component('detailTemplate', {
                        template: `<table class="detailtable" width="100%">
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
          </table>`,
                        data: function () {
                            return {
                                data: {},
                            }
                        },
                    }),
                }
            },
        };
    },
    methods: {
        toolbarClick: function (args) {
            if (args.item.id === 'DetailTemplateGrid_pdfexport') {
                this.$refs.grid.pdfExport({ hierarchyExportMode: "Expanded" });
            }
        },
        exportDetailTemplate: function(args) {
            args.value = {
                columnCount: 2,
                columnHeader: [
                    {
                        cells: [{
                            index: 0, colSpan: 2, value: 'Product Details',
                            style: { backColor: '#ADD8E6', pdfTextAlignment: 'Center', bold: true }
                        }]
                    }
                ],
                rows: [
                    {
                        cells: [
                            {
                                index: 0, rowSpan: 4, image: { base64: args.parentRow.data['ProductImg'], width: 80 }
                            },
                            {
                                index: 1, value: "Offers: " + args.parentRow.data['Offers'],
                                style: { fontColor: '#0A76FF', fontSize: 15 }
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
                            }
                        ]
                    },
                    {
                        cells: [
                            {
                                index: 1, value: 'Ratings: ' + args.parentRow.data['Ratings'],
                                style: { fontColor: '#0A76FF', fontSize: 15 }
                            }
                        ]
                    },
                    {
                        cells: [
                            {
                                index: 0, value: args.parentRow.data['productDesc'],
                                style: { pdfTextAlignment: 'Center' }
                            },
                            { index: 1, value: args.parentRow.data['ReturnPolicy'] }
                        ]
                    },
                    {
                        cells: [
                            {
                                index: 0, value: args.parentRow.data['Cost'],
                                style: { bold: true, pdfTextAlignment: 'Center' }
                            },
                            { index: 1, value: args.parentRow.data['Cancellation'] }
                        ]
                    },
                    {
                        cells: [
                            {
                                index: 0, value: args.parentRow.data['Status'],
                                style: {
                                    fontColor: args.parentRow.data['Status'] === 'Available' ? '#00FF00' : '#FF0000',
                                    pdfTextAlignment: 'Center', fontSize: 15
                                }
                            },
                            {
                                index: 1, value: args.parentRow.data['Delivery'],
                                style: { fontColor: '#0A76FF', fontSize: 15 }
                            }
                        ]
                    }
                ],
            };
        }
    },
    provide: {
        grid: [DetailRow, PdfExport, Toolbar]
    }

});