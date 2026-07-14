<template>
    <div id="app">
        <ejs-grid ref="grid" id="grid" :dataSource='productDatas' :allowPaging='true' :created='created' :editSettings='editSettings' :toolbar='toolbar'>
            <e-columns>
                <e-column field='ProductID' headerText='Product ID' :isPrimaryKey='true' width=100 :validationRules='validationRules'></e-column>
                <e-column field='ProductCategory' headerText='Product Category' width=120 :validationRules='validationRules'></e-column>
                <e-column field='ShippingMethod' headerText='Shipping Method' textAlign='Right' editType='dropdownedit' width=120></e-column>
                <e-column field='StockQuantity' headerText='StockQuantity' textAlign='Right' editType='numericedit' width=120 format='N0'></e-column>
                <e-column field='Discount' headerText='Discount (%)' textAlign='Right' editType='numericedit' width=120 format='C2'></e-column>
                <e-column field='Revenue' headerText='Revenue' textAlign='Right' editType='numericedit' width=120 format='C2'></e-column>
                <e-column field='TransactionDate' headerText='Transaction Date' textAlign='Right' editType='datepickeredit' width=120 format='yMd'></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Page, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { productDatas } from './datasource.js';
var grid = ref(null);
const validationRules = { required: true };
const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Cell' };
const toolbar = ['Add', 'Delete', 'Update', 'Cancel'];
const created = function () {
    let gridInstance = grid.value.ej2Instances;
    gridInstance.getContentTable().addEventListener('click', (args) => {
        if (args.target.classList.contains('e-rowcell')) {
            gridInstance.editModule.editCell(args.target.closest('tr').rowIndex,
            gridInstance.getColumnByIndex(parseInt(args.target.getAttribute('aria-colindex'))-1).field);
        }
    });
}
provide('grid', [Page, Edit, Toolbar]);
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