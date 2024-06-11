<template>
  <div id="app">
    <div>
      <label style="padding: 10px 10px">
        Enable or disable HTML Encode
      </label>
      <ejs-switch id="switch" :change="onSwitchChange"></ejs-switch>
    </div>
    <ejs-grid ref='grid' style="padding: 10px 10px" :dataSource='data' :enableRtl='true' locale='ar-AE' 
    :allowGrouping='true' :allowPaging='true' :editSettings='editSettings' :allowFiltering='true' :allowSorting='true' :showColumnChooser='true' :showColumnMenu='true' :toolbar='toolbar' :pageSettings='pageOptions'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' isPrimaryKey='true' width=90></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
        <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
        <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { L10n, setCulture } from '@syncfusion/ej2-base';
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Page, Group, Edit, Toolbar, Sort, Reorder, ColumnMenu, ColumnChooser } from "@syncfusion/ej2-vue-grids";
import { SwitchComponent as EjsSwitch } from "@syncfusion/ej2-vue-buttons";
import { data } from './datasource.js';
import arAELocalization from './locale.json';
const grid = ref(null);
L10n.load(arAELocalization);
setCulture('ar-AE');
      const pageOptions = { pageSize: 7 };
      const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
      const toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'ColumnChooser'];
      const onSwitchChange = function(args) {
      if(args.checked){
        grid.value.enableRtl = false;
      }
      else{
        grid.value.enableRtl = true;
      }
    }
  provide('grid',  [Page, Group, Edit, Toolbar, Sort, Reorder, ColumnMenu, ColumnChooser]);
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