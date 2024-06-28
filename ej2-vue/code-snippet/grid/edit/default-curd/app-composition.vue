<template>
  <div id="app">
    <ejs-button id='edit' @click.native='clickEvents'>Edit</ejs-button>
    <ejs-button id='add' @click.native='clickEvents'>Add</ejs-button>
    <ejs-button id='delete' @click.native='clickEvents'>Delete</ejs-button>
    <ejs-button id='updaterow' @click.native='clickEvents'>Update Row</ejs-button>
    <ejs-button id='updatecell' @click.native='clickEvents'>Update Cell</ejs-button>
    <div class="control-section" style="padding-top:20px">
      <ejs-grid ref="grid" id="Grid" :dataSource='data' :editSettings='editSettings'>
        <e-columns>
          <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120 :validationRules='orderIDRules' isPrimaryKey='true'></e-column>
          <e-column field='CustomerID' headerText='Customer ID' width=150 :validationRules='customerIDRules'></e-column>
          <e-column field='ShipCity' headerText='Ship City' width=150 :validationRules='shipCityRules'></e-column>
          <e-column field='ShipName' headerText='Ship Name' width=150 :validationRules='shipNameRules'></e-column>
        </e-columns>
      </ejs-grid>
    </div>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { ref } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Page, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
import { employeeData } from './datasource.js';
const data= employeeData;
const editSettings= { allowEditing: true, allowAdding: true, allowDeleting: true };
const orderIDRules= { required: true };
const shipCityRules= { required: true };
const shipNameRules= { required: true };
const customerIDRules= { required: true, minLength: 5 };
const grid = ref(null);
const clickEvents= function (args) {
      if (args.target.id === "edit") {
        grid.value.ej2Instances.startEdit();
      } else if (args.target.id === "add") {
         grid.value.ej2Instances.addRecord({
          OrderID: Math.floor(Math.random() * 100000),
          CustomerID: generateCustomerId(),
          ShipCity: generateShipCity(),
          ShipName: generateShipName()
        });
      } else if (args.target.id === "delete") {
        grid.value.ej2Instances.deleteRecord();
      } else if (args.target.id === "updaterow") {
        grid.value.ej2Instances.updateRow(0, { OrderID: 10248, CustomerID: 'RTER', ShipCity: 'America', ShipName: 'Hanari' });
      } else if (args.target.id === "updatecell") {
        grid.value.ej2Instances.setCellValue(this.data[0].OrderID, 'CustomerID', 'Value Changed');
      }
    };
const generateCustomerId= function() {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      let result = '';
      for (let i = 0; i < 5; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      return result;
    };
const generateShipCity= function() {
      const cities = ['London', 'Paris', 'New York', 'Tokyo', 'Berlin'];
      return cities[Math.floor(Math.random() * cities.length)];
    };
const generateShipName= function() {
      const names = ['Que Delícia', 'Bueno Foods', 'Island Trading', 'Laughing Bacchus Winecellars'];
      return names[Math.floor(Math.random() * names.length)];
    }
provide('grid', [Page, Edit, Toolbar]);
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
  #edit,#add,#delete,#updaterow,#updatecell{
    margin-left: 10px
  }
</style>