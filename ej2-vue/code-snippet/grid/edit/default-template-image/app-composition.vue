<template>
  <div id="app">
    <ejs-grid :dataSource="dataGrid" :editSettings="editSettings" :toolbar="toolbar" height="273px" :actionBegin="actionBegin">
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" width="120" textAlign="Right" isPrimaryKey="true" :validationRules="orderIDRules"></e-column>
        <e-column field='EmployeeID' headerText='Employee Name' width='120' :dataSource='employeeData'
        foreignKeyValue='FirstName' foreignKeyField='EmployeeID' :editTemplate="'editTemplate'">
          <template v-slot:editTemplate>
            <ejs-dropdownlist id="EmployeeID" width="220" :dataSource="employeeData" :value="orderData.EmployeeID" :fields="dropDownFields" 
            :itemTemplate="'iTemplate'">
              <template v-slot:iTemplate="{ data }">
                <div>
                  <img class="empImage" width="50px" :src="'https://ej2.syncfusion.com/demos/src/grid/images/' + data.EmployeeID + '.png'" 
                    alt="employee" />
                  <div class="ename">{{ data.FirstName }}</div>
                </div>
              </template>
            </ejs-dropdownlist>
          </template>
        </e-column>
        <e-column field="Freight" headerText="Freight" width="120" format="C2" textAlign="Right" editType="numericedit" :validationRules="freightRules"></e-column>
        <e-column field="OrderDate" headerText="Order Date" type="date" width="130" editType="datepickeredit" 
        format="yMd" textAlign="Right" :validationRules="orderDateRules"></e-column>
        <e-column field="ShipCountry" headerText="Ship Country" width="150" :validationRules="shipCountryRules">
        </e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>

<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Toolbar, Edit ,ForeignKey } from "@syncfusion/ej2-vue-grids";
import { DropDownListComponent as EjsDropdownlist } from "@syncfusion/ej2-vue-dropdowns";
import { data, employeeData } from './datasource.js';

const dataGrid = data;
const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: "Normal" };
const toolbar = ["Add", "Edit", "Delete", "Update", "Cancel"];
const orderIDRules = { required: true, number: true };
const freightRules = { required: true, min: 1, max: 1000 };
const shipCountryRules = { required: true };
const orderDateRules = { required: true };
const dropDownFields= { text: 'FirstName', value: 'EmployeeID' };

let orderData = ref({});
const actionBegin = (args) => {
  if (args.requestType === "beginEdit" || args.requestType === "add") {
    orderData.value = { ...args.rowData };
  }
  if (args.requestType === "save") {
    orderData.value["EmployeeID"]=args.data["EmployeeID"] ;
  }
};

provide("grid", [Edit, Toolbar,ForeignKey ]);
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