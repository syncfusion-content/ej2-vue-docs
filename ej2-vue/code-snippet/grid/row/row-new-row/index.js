
import Vue from "vue";
import { GridPlugin,Edit } from "@syncfusion/ej2-vue-grids";
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { data } from "./datasource.js";
Vue.use(GridPlugin);
Vue.use(ButtonPlugin);

new Vue({
	el: '#app',
	template: `
      <div id="app">
        <div style="padding:0px 0px 20px 0px">
        <ejs-button id='add' v-on:click.native='addRow'>Add New Row</ejs-button>
        </div>
        <ejs-grid ref="grid" id="grid" :dataSource='data' :editSettings='editSettings'>
          <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100 isPrimaryKey="true"></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
            <e-column field='ShipCity' headerText='ShipCity' width=100></e-column>
            <e-column field='Freight' headerText='Freight' textAlign='Right' format='C' width=100></e-column>
            <e-column field='ShipName' headerText='Ship Name' width=150>
            </e-column>
          </e-columns>
        </ejs-grid>
      </div>
`,

data() {
  return {
    data: data,
    editSettings : { allowEditing: true, allowAdding: true, allowDeleting: true },

  };
},
methods: {
    addRow: function () {
       const newRecord = {
          OrderID: this.generateOrderId(),
          CustomerID: this.generateCustomerId(),
          ShipCity: this.generateShipCity(),
          Freight: this.generateFreight(),
          ShipName: this.generateShipName()
      };

      this.$refs.grid.ej2Instances.addRecord(newRecord, 0);
  },
   generateOrderId: function () {
      return Math.floor(10000 + Math.random() * 90000);
  },
  // Generate a random CustomerID
  generateCustomerId: function () {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      let result = '';
      for (let i = 0; i < 5; i++) {
          result += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      return result;
  },
  // Generate a random ShipCity
  generateShipCity: function (){
      const cities = ['London', 'Paris', 'New York', 'Tokyo', 'Berlin'];
      return cities[Math.floor(Math.random() * cities.length)];
  },
  // Generate a random Freight value
  generateFreight: function (){
      return Math.random() * 100;
  },
  // Generate a random ShipName
  generateShipName: function () {
      const names = ['Que Delícia', 'Bueno Foods', 'Island Trading', 'Laughing Bacchus Winecellars'];
      return names[Math.floor(Math.random() * names.length)];
  }

 },
provide: {
  grid: [Edit]
} 

});