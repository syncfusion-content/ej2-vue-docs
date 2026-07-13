<template>
  <div id="app">
    <ejs-grid ref="grid" :dataSource="data" allowPaging="true" :editSettings="editSettings" :toolbar="toolbar">
      <e-columns>
        <e-column field="ID" headerText="ID" width="120" textAlign="Right" isPrimaryKey="true" :validationRules="idRules"></e-column>
        <e-column field="Product" headerText="Product Name" width="180" editType="dropdownedit" :edit="editParams"></e-column>
        <e-column field="VendorA" headerText="Vendor A (units)" width="160" textAlign="Right" editType="numericedit" :edit="numericEditParams"></e-column>
        <e-column field="VendorB" headerText="Vendor B (units)" width="160" textAlign="Right" editType="numericedit" :edit="numericEditParams"></e-column>
        <e-column field="VendorC" headerText="Vendor C (units)" width="160" textAlign="Right" editType="numericedit" :edit="numericEditParams"></e-column>
        <e-column field="VendorD" headerText="Vendor D (units)" width="160" textAlign="Right" editType="numericedit" :edit="numericEditParams"></e-column>
        <e-column field="UnitPrice" headerText="Price (per unit)" width="160" textAlign="Right" format="C2" editType="numericedit" :edit="numericEditParams" :validationRules="unitPriceRules"></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Toolbar, Edit, Page } from "@syncfusion/ej2-vue-grids";
import { inventoryStoreData } from './datasource.js';
const data = inventoryStoreData;
const idRules = { required: true, number: true };
const unitPriceRules = { required: true, min: 1 };
const editSettings= { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch', enableUndoRedo: true };
const toolbar= ['Add', 'Delete', 'Update', 'Cancel', 'Undo', 'Redo'];
const editParams = { params: { popupHeight: '200px' } };
const numericEditParams = { params: { showSpinButton: false } };
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
