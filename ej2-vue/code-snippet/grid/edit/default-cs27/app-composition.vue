<template>
  <div id="app">
    <ejs-grid ref="grid" :dataSource="data" :editSettings="editSettings" :toolbar="toolbar">
      <e-columns>
        <e-column field="ProductID" headerText="Product ID" textAlign="Right" isPrimaryKey="true" :validationRules="orderIDRules" width="100"></e-column>
        <e-column field="ProductName" headerText="Product Name" width="120" :validationRules="productNameRules"></e-column>
        <e-column field="UnitPrice" headerText="Unit Price" editType="numericedit" :edit="priceParams" width="150" :validationRules="unitIDRules" format="C2" textAlign="Right"></e-column>
        <e-column field="UnitsInStock" headerText="Units In Stock" editType="numericedit" :edit="stockParams" :validationRules="stockIDRules" width="150" textAlign="Right"></e-column>
        <e-column field="TotalCost" headerText="Total Cost" width="150" :allowEditing="false" format="C2" textAlign="Right"></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>

<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { productData } from "./datasource.js";
const data = productData;
const editSettings = {
  allowEditing: true,
  allowAdding: true,
  allowDeleting: true,
};

const stockIDRules = { required: true };
const orderIDRules = { required: true };
const productNameRules = { required: true };
const unitIDRules = { required: true, min: 1 };
const toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
const grid = ref(null);

const calculateTotalCost = function() {
  const formEle = grid.value.ej2Instances.element.querySelector('form').ej2_instances[0];
  const unitPrice = parseFloat(formEle.getInputElement('UnitPrice').value);
  const unitsInStock = parseFloat(formEle.getInputElement('UnitsInStock').value);
  formEle.getInputElement('TotalCost').value = (unitPrice * unitsInStock).toFixed(2);
};

const priceParams = { params: { change: calculateTotalCost } };
const stockParams = { params: { change: calculateTotalCost } };

provide('grid', [Edit, Toolbar]);
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
</style>
