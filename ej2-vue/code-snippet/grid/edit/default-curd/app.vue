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
<script>
import {GridComponent,ColumnsDirective,ColumnDirective,Edit,Toolbar,Page } from "@syncfusion/ej2-vue-grids";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { employeeData } from "./datasource.js";
export default {
  name: "App",
  components: {
    "ejs-grid": GridComponent,
    "e-columns": ColumnsDirective,
    "e-column": ColumnDirective,
    "ejs-button": ButtonComponent
  },
  data() {
    return {
      data: employeeData,
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
      orderIDRules: { required: true },
      shipCityRules: { required: true },
      shipNameRules: { required: true },
      customerIDRules: { required: true, minLength: 5 },
    };
  },
  methods: {
    clickEvents: function (args) {
      const grid = this.$refs.grid.$el.ej2_instances['0'];
      if (args.target.id === "edit") {
        grid.startEdit();
      } else if (args.target.id === "add") {
        grid.addRecord({
          OrderID: Math.floor(Math.random() * 100000),
          CustomerID: this.generateCustomerId(),
          ShipCity: this.generateShipCity(),
          ShipName: this.generateShipName()
        });
      } else if (args.target.id === "delete") {
        grid.deleteRecord();
      } else if (args.target.id === "updaterow") {
        grid.updateRow(0, { OrderID: 10248, CustomerID: 'RTER', ShipCity: 'America', ShipName: 'Hanari' });
      } else if (args.target.id === "updatecell") {
        grid.setCellValue(this.data[0].OrderID, 'CustomerID', 'Value Changed');
      }
    },
    generateCustomerId: function() {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      let result = '';
      for (let i = 0; i < 5; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      return result;
    },
    generateShipCity: function() {
      const cities = ['London', 'Paris', 'New York', 'Tokyo', 'Berlin'];
      return cities[Math.floor(Math.random() * cities.length)];
    },
    generateShipName: function() {
      const names = ['Que Delícia', 'Bueno Foods', 'Island Trading', 'Laughing Bacchus Winecellars'];
      return names[Math.floor(Math.random() * names.length)];
    }
  },
  provide: {
    grid: [Page, Edit, Toolbar]
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
  #edit,#add,#delete,#updaterow,#updatecell{
    margin-left: 10px
  }
</style>