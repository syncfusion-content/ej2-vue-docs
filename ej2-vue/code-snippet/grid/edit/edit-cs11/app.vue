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
<script>

import { GridComponent, ColumnsDirective, ColumnDirective, Edit } from "@syncfusion/ej2-vue-grids";
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';
import { DropDownListComponent } from '@syncfusion/ej2-vue-dropdowns';
import { TextBoxComponent, NumericTextBoxComponent } from '@syncfusion/ej2-vue-inputs';
import { data } from './datasource.js';
export default {
name: "App",
components: {
"ejs-dropdownlist":DropDownListComponent,
"ejs-textbox":TextBoxComponent,
"ejs-numerictextbox":NumericTextBoxComponent,
"ejs-button":ButtonComponent,
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective
},
  data() {
    return {
      data: data,
      editSettings: { allowEditing: true },
      selectedProduct: {
        OrderID: null,
        CustomerID: '',
        Freight: null,
        ShipCountry: ''
      },
      dropdown: [
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
      ],
      dropdownFields: { text: 'shipCountry', value: 'shipCountry' },
    };
  },
  methods: {
    save() {
      const index = this.$refs.grid.getSelectedRowIndexes()[0];
      this.$refs.grid.updateRow(index, this.selectedProduct);
    },
    rowSelectHandler(args) {
      this.selectedProduct = { ...args.data };
    }
  },
  provide: {
    grid: [Edit]
  }
}
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