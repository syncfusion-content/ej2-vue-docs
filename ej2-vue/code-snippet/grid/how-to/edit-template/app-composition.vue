<template>
  <div id="app">
       <ejs-grid :dataSource="data" :editSettings="editSettings" :toolbar="toolbar" height="273px">
          <e-columns>
            <e-column field="OrderID" headerText="Order ID" textAlign="Right" :isPrimaryKey="true" width="100"></e-column>
            <e-column field="CustomerID" headerText="Customer ID" width="120"></e-column>
            <e-column field="ShipCountry" headerText="Ship Country" width="150"></e-column>
          </e-columns>
       </ejs-grid>
  </div>
</template>
<script setup>
import { provide,createApp } from "vue";
import { ref } from 'vue';
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import DialogTemplate from "./dialogtemp-composition.vue";
import { orderDetails } from "./datasource.js";
const data = ref(orderDetails);

const editSettings= { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog', template: function () {
        return { template : createApp({}).component('Dialog',DialogTemplate)}
      } };
const toolbar = ["Add", "Edit", "Delete", "Update", "Cancel"];
provide('grid',  [Edit,Toolbar]);
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
  @import "https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css";
  .form-group.col-md-6 {
    width: 250px;
  }
  #ShipAddress{
      resize: vertical;
  }
  :-ms-fullscreen, .e-dialog.e-edit-dialog
  {
      max-width: 552px;
  }
</style>