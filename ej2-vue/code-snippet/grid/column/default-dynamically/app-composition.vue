<template>
  <div id="app">
    <ejs-button id="button" cssClass="e-outline" @click="addTemplateColumn">Add Column</ejs-button>
    <ejs-grid style="margin-top: 10px" id="grid" ref="grid" :dataSource="dataSet" height="315px">
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" width="150"></e-column>
        <e-column field="CustomerID" headerText="Customer Name" width="150"></e-column>
        <e-column field="Freight" headerText="Freight" width="150"  >
        </e-column>
      </e-columns>
          <template v-slot:columnTemplate="{data}">
                  <ejs-dropdownlist id="data.OrderID" :dataSource="dataSet" :value="data.ShipCountry" :fields='fields' index=0></ejs-dropdownlist>
              </template>
              <template  v-slot:headerTemplate >
                  <div>
                  <span class="e-icons e-location"></span> Ship Country
                  </div>
              </template>
    </ejs-grid>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns} from "@syncfusion/ej2-vue-grids";
import { DropDownListComponent as EjsDropdownlist } from "@syncfusion/ej2-vue-dropdowns";
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';
import { data } from './datasource.js';

const grid = ref(null);
const dataSet= data;
const fields= { text: 'ShipCountry', value: 'ShipCountry'};

const addTemplateColumn = () => {
  const gridInstance = grid.value.ej2Instances;

  const templateColumnValues = {
    field: 'ShipCountry',
    headerText: 'Ship Country',
    width: 100,
    headerTemplate: 'headerTemplate',
    template: 'columnTemplate',
  };
  gridInstance.columns.push(templateColumnValues);
  gridInstance.refreshColumns();
};

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/material3.css";
</style>
