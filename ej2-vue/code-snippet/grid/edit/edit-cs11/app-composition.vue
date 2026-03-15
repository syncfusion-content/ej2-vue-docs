<template>
  <div id="app">
    <div class="row">
      <div class="col-xs-6 col-md-3">
        <div class="form-row">
          <div class="form-group col-md-12">
            <label for="orderedit">OrderID</label>
            <ejs-numerictextbox :value="selectedProduct.OrderID" format="#####.###" disabled></ejs-numerictextbox>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-12">
            <label for="customeredit">CustomerID</label>
            <ejs-textbox v-model="selectedProduct.CustomerID"></ejs-textbox>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-12">
            <label for="freightedit">Frieght</label>
            <ejs-numerictextbox v-model="selectedProduct.Freight" ></ejs-numerictextbox>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-12">
            <label for="countryedit">ShipCountry</label>
            <ejs-dropdownlist v-model="selectedProduct.ShipCountry" :dataSource="dropdown" :fields="dropdownFields" ></ejs-dropdownlist>
          </div>
        </div>
        <ejs-button id="btn" style='margin-left:15px' v-on:click="save">Save</ejs-button>
      </div>
      <div class="col-xs-6 col-md-9">
        <ejs-grid ref='grid' :dataSource="data" height="315" width="500px" :rowSelected="rowSelectHandler" :editSettings="editSettings" >
          <e-columns>
            <e-column field="OrderID" headerText="Order ID" width="120" textAlign="Right" isPrimaryKey="true" ></e-column>
            <e-column field="CustomerID" headerText="Customer ID" width="120" ></e-column>
            <e-column field="Freight" headerText="Freight" width="120" format="C2" textAlign="Right"></e-column>
            <e-column field="ShipCountry" headerText="Ship Country" width="150"></e-column>
          </e-columns>
        </ejs-grid>
      </div>
    </div>
  </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Edit } from "@syncfusion/ej2-vue-grids";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
import { DropDownListComponent as EjsDropdownlist } from "@syncfusion/ej2-vue-dropdowns";
import { TextBoxComponent as EjsTextbox, NumericTextBoxComponent as EjsNumerictextbox } from "@syncfusion/ej2-vue-inputs";
import { data } from './datasource.js';

const editSettings = { allowEditing: true };
const grid = ref(null);
const selectedProduct= ref({
  OrderID: null,
  CustomerID: '',
  Freight: null,
  ShipCountry: ''
});
const dropdown= [
  { shipCountry: 'Germany' },
  { shipCountry: 'Brazil' },
  { shipCountry: 'France' },
  { shipCountry: 'Belgium' },
  { shipCountry: 'Switzerland' },
  { shipCountry: 'Venezuela' },
  { shipCountry: 'USA' },
  { shipCountry: 'Mexico' },
  { shipCountry: 'Italy' },
  { shipCountry: 'Sweden' },
  { shipCountry: 'Finland' },
  { shipCountry: 'Spain' },
  { shipCountry: 'Canada' },
  { shipCountry: 'Portugal' },
  { shipCountry: 'Denmark' },
  { shipCountry: 'Austria' },
  { shipCountry: 'UK' },
  { shipCountry: 'Ireland' },
  { shipCountry: 'Norway' },
  { shipCountry: 'Argentina' },
];
const dropdownFields= { text: 'shipCountry', value: 'shipCountry' };
const save = function() {
  const index = grid.value.getSelectedRowIndexes()[0];
  grid.value.updateRow(index, selectedProduct.value);
};
const rowSelectHandler= function(args) {
  selectedProduct.value = { ...args.data };
};

provide('grid', [Edit]);
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