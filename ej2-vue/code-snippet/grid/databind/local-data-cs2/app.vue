<template>
  <div id="app">
    <div style="padding: 5px 0px 20px 0px ">
            <ejs-button id="sample"  v-on:click='changeDatasource'> Refresh Datasource </ejs-button>
        </div>
        <ejs-grid ref="grid" :dataSource='dataGrid' :height='280' >
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
                <e-column field='ShipCity' headerText='Ship City' width=120 ></e-column>
            </e-columns>
        </ejs-grid>
  </div>
</template>
<script>
import { GridComponent, ColumnsDirective, ColumnDirective} from "@syncfusion/ej2-vue-grids";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { data } from './datasource.js';

export default {
name: "App",
components: {
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective,
"ejs-button": ButtonComponent

},

data() {
  return {
    dataGrid : data
  };
},
methods: {
  changeDatasource(){
    for (let i = 0; i < 5; i++) {
      this.newRecords = {
          OrderID: this.generateOrderId(),
          CustomerID: this.generateCustomerId(),
          ShipCity: this.generateShipCity(),
          Freight: this.generateFreight(),
          ShipName: this.generateShipName()
      };

      this.$refs.grid.dataSource.unshift(this. newRecords);
      this.$refs.grid.setProperties({ dataSource:  this.$refs.grid.dataSource});
    }
  },

  // Generate a random OrderID
  generateOrderId() {
    return Math.floor(10000 + Math.random() * 90000);
  },
  // Generate a random CustomerID
  generateCustomerId() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = 0; i < 5; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  },
  // Generate a random ShipCity
  generateShipCity(){
    const cities = ['London', 'Paris', 'New York', 'Tokyo', 'Berlin'];
    return cities[Math.floor(Math.random() * cities.length)];
  },
  // Generate a random Freight value
  generateFreight(){
    return Math.random() * 100;
  },
  // Generate a random ShipName
  generateShipName(){
    const names = ['Que Delícia', 'Bueno Foods', 'Island Trading', 'Laughing Bacchus Winecellars'];
    return names[Math.floor(Math.random() * names.length)];
  } 
}
}
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
</style>