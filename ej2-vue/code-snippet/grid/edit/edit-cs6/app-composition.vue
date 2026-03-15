<template>
  <div id="app">
    <ejs-grid ref="grid" :dataSource='data' :editSettings='editSettings' :toolbar='toolbar' height='280px'>
        <e-columns>
          <e-column field='OrderID' headerText='Order ID' :isPrimaryKey='true' :validationRules='orderIDRules' textAlign='Right' width=100></e-column>
          <e-column field='CustomerID' headerText='Customer ID' :validationRules='customerIDRules' width=120></e-column>
          <e-column field="OrderDate" headerText="Order Date" editType="datepickeredit" format="M/d/yy" textAlign="Right" :validationRules='dateRules' width="130" type="date"></e-column>
          <e-column field="Freight" headerText="Freight" format="C2" textAlign="Right" width="90" :validationRules='freightRules'></e-column>
          <e-column field="Verified" headerText="Verified" textAlign="Right" width="90" :template="'columnTemplate'" :validationRules='verifiedRules'></e-column>
        </e-columns>
        <template v-slot:columnTemplate="{data}">
          <ejs-checkbox :checked="data.Verified" @change="onVerifiedChange($event, data)"></ejs-checkbox>
        </template>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { CheckBoxComponent as EjsCheckbox } from "@syncfusion/ej2-vue-buttons";
import { data } from './datasource.js';
const grid=ref(null);
const orderIDRules = { required: true };
const customerIDRules = { required: true };
const dateRules= { required: true  };
const verifiedRules = { required: true  };
const freightRules = { required: true, min: 1, max: 1000 };
const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
const toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
provide('grid', [Edit, Toolbar]);

function onVerifiedChange(args, rowData) {
  const rowIndex = grid.value.ej2Instances.getRowIndexByPrimaryKey(rowData.OrderID);
  grid.value.ej2Instances.updateRow(rowIndex, {
    ...rowData,
    Verified: args.checked,
  });
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
</style>