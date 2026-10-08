<template>
  <div id="app">
    <ejs-grid :dataSource="data" :editSettings="editSettings" :enableAutoFill="true" :selectionSettings="selectionSettings" :formulaSettings="formulaSettings" height="272px">
      <e-columns>
        <e-column field="Id" headerText="ID" textAlign="Right" :isPrimaryKey="true" :validationRules="requiredRule" width="100"></e-column>
        <e-column field="Product" headerText="Product Name" :validationRules="requiredRule" width="180"></e-column>
        <e-column field="Quantity" headerText="Quantity" textAlign="Right" width="120"></e-column>
        <e-column field="Price" headerText="Price Per Unit" textAlign="Right" editType="numericedit" format="C2" width="140"></e-column>
        <e-column field="GrossAmount" headerText="Gross Amount" :allowFormula="true" format="C2" width="150"></e-column>
        <e-column field="TaxAmount" headerText="Tax Amount" textAlign="Right" :allowFormula="true" format="C2" width="130"></e-column>
        <e-column field="TotalAmount" headerText="Total Amount" textAlign="Right" :allowFormula="true" format="C2" width="150"></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Edit, Formula } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

const requiredRule = { required: true };
const editSettings = { allowEditing: true, mode: "Cell" };
const selectionSettings = { mode: "Cell", cellSelectionMode: "Box", type: "Multiple" };
const formulaSettings = {
  customFunctions: {
    CUSTOMSUM: function (params) {
      var total = 0;
      for (var index = 0; index < params.values.length; index++) {
        total += params.values[index];
      }
      return total;
    }
  }
};
provide('grid', [Edit, Formula]);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/grid/index.css";
</style>
