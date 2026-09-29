<template>
  <div id="app">
    <ejs-grid :dataSource='data' :allowGrouping='true' :groupSettings='groupOptions' 
    :dataBound='dataBound' height='300px'>
      <e-columns>
        <e-column field='OrderID' headerText='ID' textAlign='Right' width=90></e-column>
        <e-column field='CustomerID' headerText='Name' width=100></e-column>
        <e-column field='ShipCity' headerText='City' width=100></e-column>
        <e-column field='Freight' headerText='Value' width=80></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide } from "vue";

import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Group } from "@syncfusion/ej2-vue-grids";
import { ChipList } from '@syncfusion/ej2-buttons';
import { data } from './datasource.js';
const groupOptions = { columns: ['CustomerID'], captionTemplate: captionTemplate };
const captionTemplate = '<div class="groupChip">${key}</div>';
const dataBound = () => {
  var groupCaptions = document.getElementsByClassName('groupChip');
  for (var i = 0; i < groupCaptions.length; i++) {
    let chip = new ChipList({});
    chip.appendTo(groupCaptions[i]);
  }
}
provide('grid', [Group]);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/grid/index.css";
</style>