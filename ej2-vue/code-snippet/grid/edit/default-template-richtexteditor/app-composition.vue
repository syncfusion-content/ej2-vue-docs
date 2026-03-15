<template>
  <div id="app">
    <ejs-grid :dataSource="data" :editSettings="editSettings" :toolbar="toolbar" height="273px" :actionBegin="actionBegin">
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" width="120" textAlign="Right" isPrimaryKey="true" :validationRules="orderIDRules"></e-column>
        <e-column field="CustomerID" headerText="Customer ID" width="150" :validationRules="customerIDRules"></e-column>
        <e-column field="Freight" headerText="Freight" width="120" format="C2" textAlign="Right" editType="numericedit" :validationRules="freightRules"></e-column>
        <e-column field="OrderDate" headerText="Order Date" type="date" width="130" editType="datepickeredit" 
        format="yMd" textAlign="Right" :validationRules="orderDateRules"></e-column>
        <e-column field='ShipAddress' headerText='Ship Address' width='120' :editTemplate="'editTemplate'" :disableHtmlEncode="false">
          <template v-slot:editTemplate="{data }">
            <div v-if="data && data.ShipAddress !== undefined">
              <ejs-richtexteditor id="ShipAddress" :value="orderData.ShipAddress" :focus="onFocus"></ejs-richtexteditor>
            </div>
          </template>
        </e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>

<script setup>
import { provide, ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { RichTextEditorComponent as EjsRichtexteditor, HtmlEditor, Toolbar as RichTextEditorToolbar, QuickToolbar} from '@syncfusion/ej2-vue-richtexteditor'; // Renamed Toolbar
import { data } from "./datasource.js";


const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: "Normal" };
const toolbar = ["Add", "Edit", "Delete", "Update", "Cancel"];
const orderIDRules = { required: true, number: true };
const freightRules = { required: true, min: 1, max: 1000 };
const customerIDRules = { required: true };
const orderDateRules = { required: true };
let orderData = ref({});

const actionBegin=(args)=> {
      if (args.requestType === 'beginEdit' || args.requestType === 'add') {
        orderData.value = Object.assign({}, args.rowData);
      }
      if (args.requestType === 'save') {
        orderData.value['ShipAddress']=args.data['ShipAddress'] ;
      }
    };
const onFocus=(args)=> {
      args.event.target.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.stopPropagation();
        }
      });
    
    };

provide("grid", [Edit, Toolbar]);
provide("richtexteditor", [HtmlEditor, RichTextEditorToolbar, QuickToolbar]);
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
@import "../node_modules/@syncfusion/ej2-filemanager/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-richtexteditor/styles/material3.css";
</style>