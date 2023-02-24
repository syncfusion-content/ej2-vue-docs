

<template>
    <div id="app">
        <ejs-grid :dataSource='data' id="gridcomp" :allowPaging='true' :allowExcelExport='true' :allowPdfExport='true' height='215px' :allowSorting='true'
        :contextMenuItems="contextMenuItems" :editSettings='editing' :allowGrouping='true'>
        <e-columns>
            <e-column field='OrderID' headerText='Order ID' width='120' textAlign="Right" isPrimaryKey='true'></e-column>
            <e-column field='CustomerID' headerText='Customer Name'></e-column>
            <e-column field='Freight' headerText='Freight' format='C2' textAlign="Right" editType='numericedit'></e-column>
            <e-column field='ShipCity' headerText='Ship City' width='150'></e-column>
        </e-columns>
    </ejs-grid>
    </div>
</template>
<script>
import Vue from "vue";
import { GridPlugin, ContextMenu, Page, Resize, Sort, Group, Edit, PdfExport, ExcelExport  } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);

export default {
  data() {
    return {
      data: data,
      contextMenuItems: ['AutoFit', 'AutoFitAll', 'SortAscending', 'SortDescending',
                'Copy', 'Edit', 'Delete', 'Save', 'Cancel',
                'PdfExport', 'ExcelExport', 'CsvExport', 'FirstPage', 'PrevPage',
                'LastPage', 'NextPage', 'Group', 'Ungroup'],
      editing: {allowEditing: true, allowDeleting: true}
    };
  },
  provide : {
      grid: [ContextMenu, Page, Resize, Sort, Group, Edit, PdfExport, ExcelExport]
  }
}
</script>
<style>
 @import "https://ej2.syncfusion.com/vue/documentation/node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>



