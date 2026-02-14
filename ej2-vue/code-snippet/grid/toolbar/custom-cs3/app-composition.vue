<template>
  <div id="app">
    <ejs-grid ref='grid' id='Grid' :dataSource='data' :editSettings='editSettings' :toolbarTemplate='toolbar'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' type='number' textAlign='Right' :isPrimaryKey='true'
          :validationRules='orderIDRules' width=90></e-column>
        <e-column field='CustomerID' headerText='Customer ID' type='string' width=100></e-column>
        <e-column field='ShipCity' headerText='Ship City' type='string' width=100></e-column>
        <e-column field='ShipName' headerText='Ship Name' type='string' width=120></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide, ref, createApp } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { ToolbarComponent } from "@syncfusion/ej2-vue-navigations";
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";
import { data } from './datasource.js';
const grid = ref(null);
const app = createApp();
const orderIDRules = { required: true };
const editSettings = { allowAdding: true, allowEditing: true, allowDeleting: true };
const toolbar = function () {
  return {
    template: app.component('custom-toolbar', {
      components:{
        "ejs-toolbar":ToolbarComponent,
        "ejs-dropdownlist":DropDownListComponent
      },
      template: `<ejs-toolbar>
                        <div style="display: inline-block;">
                          <label style="padding:  10px 10px 12px 0"> Change the value: </label> 
                          <ejs-dropdownlist ref="dropDown" id='dropdownlist' :dataSource='dropDownData' :change="onChange" placeholder='Select a value' width="150"></ejs-dropdownlist>
                        </div>
                      </ejs-toolbar>`,
      data: function () {
        return {
          dropDownData: [{ text: 'Edit' }, { text: 'Delete' }, { text: 'Update' }],
        };
      },
      methods: {
        onChange: function (args) {
          const selectedRow = grid.value.ej2Instances.getSelectedRecords()[0];
          if (args.itemData.text === 'Update') {
            grid.value.ej2Instances.endEdit();
          }
          if (args.itemData.text === 'Edit') {
            grid.value.ej2Instances.startEdit();
          }
          if (args.itemData.text === 'Delete') {
            grid.value.ej2Instances.deleteRecord(selectedRow);
          }
          this.$refs.dropDown.ej2Instances.value = '';
          this.$refs.dropDown.ej2Instances.placeholder = args.itemData.text;
        }
      }
    })
  };
}
provide('grid', [Toolbar, Edit]);
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

.button {
  margin: 0px 10px 3px;
}

#addImage,
#deleteImage {
  height: 30px;
  width: 30px;
}
</style>