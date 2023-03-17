
import Vue from "vue";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { data } from './datasource.js';

Vue.use(GridPlugin);
Vue.use(ButtonPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
     <ejs-button @click.native='addAction'>Add</ejs-button>
     <ejs-button @click.native='deleteAction'>Delete</ejs-button>
        <ejs-grid ref='grid' :dataSource='data' height='280px' >
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                <e-column field='Freight' headerText='Freight' textAlign='Center' format='C2'  width=80></e-column>
             <e-column field='OrderDate' headerText='Order Date' type='date' format='yMd' width=120></e-column>
            </e-columns>
        </ejs-grid>
    </div>
`,

  data: () => {
    return {
      data: data,
    };
  },
  methods: {
    addAction: function() {
      let customData = { OrderID: 10247, CustomerID: "ASDFG", Freight: 40.4, OrderDate: new Date(8367642e5) };
      this.data.unshift(customData);
      this.data = [...this.data];
    },
    deleteAction: function() {
      let selectedRow = this.$refs.grid.getSelectedRowIndexes()[0];
      if (selectedRow !== undefined) {
        this.data.splice(selectedRow, 1);
      }
      else {
        alert("No records selected for delete operation");
      }
      this.data = [...this.data];
    }
  }

});