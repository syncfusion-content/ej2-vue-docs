<template>
  <div id="app">
      <ejs-grid ref='grid' :dataSource='dataGrid' :editSettings='editSettings' :toolbar='toolbar' height='273px'>
          <e-columns>
              <e-column field='OrderID' headerText='Order ID' :isPrimaryKey='true' textAlign='Right' width=100 :validationRules='orderIDRules'></e-column>
              <e-column field='CustomerID' headerText='Customer ID' width=120 :validationRules='customerIDRules'></e-column>
              <e-column field='ShipCountry' headerText='ShipCountry' editType='dropdownedit' :edit='countryParams' width=150 :validationRules='shipCountryRules'></e-column>
             <e-column field='ShipCity' headerText='Ship City' editType='dropdownedit' :edit='stateParams' width=150 :validationRules='shipCityRules'></e-column>
          </e-columns>
      </ejs-grid>
  </div>
</template>
<script setup>
import { provide} from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns,Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
import { DropDownList } from "@syncfusion/ej2-dropdowns";
import { Query } from '@syncfusion/ej2-data';

const dataGrid = data;
let country = [
  { countryName: "United States", countryId: "1" },
  { countryName: "Australia", countryId: "2" },
];
let state = [
  { stateName: "New York", countryId: "1", stateId: "101" },
  { stateName: "Virginia ", countryId: "1", stateId: "102" },
  { stateName: "Washington", countryId: "1", stateId: "103" },
  { stateName: "Queensland", countryId: "2", stateId: "104" },
  { stateName: "Tasmania ", countryId: "2", stateId: "105" },
  { stateName: "Victoria", countryId: "2", stateId: "106" },
];
let countryElement, stateElement, countryObject, stateObject;

const editSettings = {
  allowEditing: true,
  allowAdding: true,
  allowDeleting: true,
  mode: "Normal",
};
const toolbar = ["Add", "Edit", "Delete", "Update", "Cancel"];
const orderIDRules = { required: true, number: true };
const customerIDRules = { required: true };
const shipCountryRules = { required: true };
const shipCityRules = { required: true };

const countryParams = {
  create: () => {
    countryElement = document.createElement("input");
    return countryElement;
  },
  read: () => {
    return countryObject.text;
  },
  destroy: () => {
    countryObject.destroy();
  },
  write: () => {
    countryObject = new DropDownList({
      dataSource: country,
      fields: { value: "countryId", text: "countryName" },
      change: () => {
        stateObject.enabled = true;
        let tempQuery = new Query().where(
          "countryId",
          "equal",
          countryObject.value
        );
        stateObject.query = tempQuery;
        stateObject.text = null;
        stateObject.dataBind();
      },
      placeholder: "Select a country",
      floatLabelType: "Never",
    });
    countryObject.appendTo(countryElement);
  },
};
const stateParams = {
  create: () => {
    stateElement = document.createElement("input");
    return stateElement;
  },
  read: () => {
    return stateObject.text;
  },
  destroy: () => {
    stateObject.destroy();
  },
  write: () => {
    stateObject = new DropDownList({
      dataSource: state,
      fields: { value: "stateId", text: "stateName" },
      enabled: false,
      placeholder: "Select a state",
      floatLabelType: "Never",
    });
    stateObject.appendTo(stateElement);
  },
};

provide("grid", [Edit, Toolbar]);
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