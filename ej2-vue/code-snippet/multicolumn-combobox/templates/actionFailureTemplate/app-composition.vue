<template>
  <div id="app">
    <div id='container' style="margin:50px auto 0; width:500px;">
        <br>
        <ejs-multicolumncombobox id='multicolumn' :dataSource='empData' :fields='fields' placeholder='Select a country' popupHeight='230px' :gridSettings='gridSettings' :actionFailureTemplate='actionFailureTemplate'>
            <e-columns>
              <e-column field='OrderID' header='Order ID' width={120}></e-column>
              <e-column field='CustomerID' header='Customer ID' width={130}></e-column>
              <e-column field='ShipCountry' header='Ship Country' width={120}></e-column>
            </e-columns>
        </ejs-multicolumncombobox>
    </div>
  </div>
</template>

<script setup>
import { MultiColumnComboBoxComponent as EjsMulticolumncombobox } from "@syncfusion/ej2-vue-multicolumn-combobox";
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
import { ColumnsDirective as EColumns, ColumnDirective as EColumn } from "@syncfusion/ej2-vue-multicolumn-combobox";
const empData = new DataManager({
  url: 'https://services.syncfusion.com/js/production/api/order-data',
  adaptor: new WebApiAdaptor,
  crossDomain: true
});
const actionFailureTemplate = "<span class='action-failure'> Data fetch get fails</span>";
const gridSettings = { rowHeight: 40 };
const fields = { text: 'Name', value: 'EmpID' };
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-grids/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-multicolumn-combobox/styles/material.css";
</style>
