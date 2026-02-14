---
layout: post
title: Exporting Vue Grid with Templates | Syncfusion
description: Learn here all about Exporting grids with templates in Syncfusion Vue Grid component of Syncfusion Essential JS 2 and more.
control: Exporting grid with templates
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Exporting grid with templates in Vue Grid control

The grid offers the option to export the column, detail, and caption templates to a PDF document. The template contains images, hyperlinks, and customized text.

## Exporting with column template

The PDF export functionality allows you to export Grid columns that include images, hyperlinks, and custom text to a PDF document.

In the following sample, the hyperlinks and images are exported to PDF using [hyperlink](https://ej2.syncfusion.com/vue/documentation/api/grid/pdfQueryCellInfoEventArgs/#hyperlink) and [image](https://ej2.syncfusion.com/vue/documentation/api/grid/pdfQueryCellInfoEventArgs/#image) properties in the [pdfQueryCellInfo](https://ej2.syncfusion.com/vue/documentation/api/grid/#pdfquerycellinfo) event.

> PDF Export supports base64 string to export the images.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% raw %}
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
<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, PdfExport, Toolbar } from '@syncfusion/ej2-vue-grids';
import { employeeData } from './datasource.js';
const grid = ref(null);
        const data = employeeData;
        const toolbar = ['PdfExport'];
        const toolbarClick = function (args) {
            if (args.item.id === 'ColumnTemplateGrid_pdfexport') {
                grid.value.pdfExport();
            }
        }
        const pdfQueryCellInfo = function(args) {
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
    provide('grid',[PdfExport, Toolbar]);
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

 .image img {
    height: 55px;
    width: 55px;
    border-radius: 50px;
    box-shadow: inset 0 0 1px #e0e0e0, inset 0 0 14px rgba(0,0,0,0.2);
}
</style>
{% endraw %}
{% endhighlight %}
{% highlight html tabtitle="Options API ~/src/App.vue" %}
{% raw %}
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
  @import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-calendars/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material3.css";

 .image img {
    height: 55px;
    width: 55px;
    border-radius: 50px;
    box-shadow: inset 0 0 1px #e0e0e0, inset 0 0 14px rgba(0,0,0,0.2);
}
</style>
{% endraw %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/pdf/column-template-export-cs1" %}

![ColumnTemplateExport](../images/colTemp_pdf_expt.gif)

## Exporting with detail template

By default, the grid will export the parent grid with expanded detail rows alone. Change the exporting option by using the `PdfExportProperties.hierarchyExportMode` property. The available options are:

| Mode     | Behavior    |
|----------|-------------|
| Expanded | Exports the parent grid with expanded detail rows. |
| All      | Exports the parent grid with all the detail rows. |
| None     | Exports the parent grid alone. |

The detail rows in the exported PDF can be customized or formatted using the [exportDetailTemplate](https://ej2.syncfusion.com/vue/documentation/api/grid/#exportdetailtemplate) event. In this event, the detail rows of the PDF document are formatted in accordance with their parent row details.

In the following sample, the detail row content is formatted by specifying the [columnCount](https://ej2.syncfusion.com/vue/documentation/api/grid/detailTemplateProperties/#columncount), [columnHeader](https://ej2.syncfusion.com/vue/documentation/api/grid/detailTemplateProperties/#columnheader), and [rows](https://ej2.syncfusion.com/vue/documentation/api/grid/detailTemplateProperties/#rows) properties using its [parentRow](https://ej2.syncfusion.com/vue/documentation/api/grid/exportDetailTemplateEventArgs/#parentrow) details. This allows for the creation of detail rows in the PDF document. Additionally, custom styles can be applied to specific cells using the [style](https://ej2.syncfusion.com/vue/documentation/api/grid/detailTemplateCell/#style) property.

> * If `columnCount` is not provided, the columns in the detail row of the PDF grid will be generated based on the count of the `columnHeader`/`rows` first row's [cells](https://ej2.syncfusion.com/vue/documentation/api/grid/detailTemplateRow/#cells).
> * When using [rowSpan](https://ej2.syncfusion.com/vue/documentation/api/grid/detailTemplateCell/#rowspan), it is Essential<sup style="font-size:70%">&reg;</sup> to provide the cell's [index](https://ej2.syncfusion.com/vue/documentation/api/grid/detailTemplateCell/#index) for proper functionality.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% raw %}
<template>
  <ejs-grid id="DetailTemplateGrid" ref="grid" :dataSource="data" :detailTemplate="'detailTemplate'" :toolbar="toolbar"
  :toolbarClick="toolbarClick" :exportDetailTemplate="exportDetailTemplate" height=315 :allowPdfExport="true">
    <e-columns>
      <e-column field="Category" headerText="Category" width="140" textAlign="Right"></e-column>
      <e-column field="ProductID" headerText="Product ID" width="120"></e-column>
      <e-column field="Status" headerText="Status" width="120"></e-column>
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
</template>

<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, DetailRow, PdfExport, Toolbar } from '@syncfusion/ej2-vue-grids';
import { employeeData } from './datasource.js';
const grid = ref(null);
      const data = employeeData;
      const toolbar = ['PdfExport'];
    const toolbarClick = function (args) {
        if (args.item.id === 'DetailTemplateGrid_pdfexport') {
            grid.value.pdfExport({ hierarchyExportMode: "Expanded" });
        }
    }
    const exportDetailTemplate = function(args) {
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
  provide('grid',  [DetailRow, PdfExport, Toolbar]);
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
 .detailtable td {
        font-size: 13px;
        padding: 4px;
        max-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .photo {
        width: 100px;
        height: 100px;
        border-radius: 50px;
        box-shadow: inset 0 0 1px #e0e0e0, inset 0 0 14px rgba(0,0,0,0.2);
    }

    .Unavailable {
        color: #FF0000;
    }

    .Available {
        color: #00FF00;
    }

    @media screen and (max-width: 800px) and (min-width: 320px) {
        .photo {
            width: 70px;
            height: 70px;
        }
    }
</style>
{% endraw %}
{% endhighlight %}
{% highlight html tabtitle="Options API ~/src/App.vue" %}
{% raw %}
<template>
  <ejs-grid id="DetailTemplateGrid" ref="grid" :dataSource="data" :detailTemplate="'detailTemplate'" :toolbar="toolbar"
  :toolbarClick="toolbarClick" :exportDetailTemplate="exportDetailTemplate" height=315 :allowPdfExport="true">
    <e-columns>
      <e-column field="Category" headerText="Category" width="140" textAlign="Right"></e-column>
      <e-column field="ProductID" headerText="Product ID" width="120"></e-column>
      <e-column field="Status" headerText="Status" width="120"></e-column>
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
</template>

<script>
import { GridComponent, ColumnsDirective, ColumnDirective, DetailRow, PdfExport, Toolbar } from '@syncfusion/ej2-vue-grids';
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
    grid: [DetailRow, PdfExport, Toolbar],
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
 .detailtable td {
        font-size: 13px;
        padding: 4px;
        max-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .photo {
        width: 100px;
        height: 100px;
        border-radius: 50px;
        box-shadow: inset 0 0 1px #e0e0e0, inset 0 0 14px rgba(0,0,0,0.2);
    }

    .Unavailable {
        color: #FF0000;
    }

    .Available {
        color: #00FF00;
    }

    @media screen and (max-width: 800px) and (min-width: 320px) {
        .photo {
            width: 70px;
            height: 70px;
        }
    }
</style>
{% endraw %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/pdf/detail-template-export-cs1" %}

![DetailTemplateExport](../images/detailTemp_pdf_expt.gif)

## Exporting with caption template

The PDF export feature enables exporting of Grid with a caption template to an PDF document.

In the following sample, the customized caption text is exported to PDF using [captionText](https://ej2.syncfusion.com/vue/documentation/api/grid/exportGroupCaptionEventArgs/#captiontext) property in the [exportGroupCaption](https://ej2.syncfusion.com/vue/documentation/api/grid/#exportgroupcaption) event.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/grid/pdf/caption-template-export-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/grid/pdf/caption-template-export-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/grid/pdf/caption-template-export-cs1" %}

![CaptionTemplateExport](../images/captionTemp_pdf_expt.gif)