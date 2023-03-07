
import Vue from 'vue';
import { GridPlugin } from '@syncfusion/ej2-vue-grids';

Vue.use(GridPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
    <ejs-grid :dataSource="data">
    <e-columns>
      <e-column field="OrderID" headerText="Order ID" textAlign="Right" :isPrimaryKey="true" width="100"></e-column>
      <e-column field="CustomerID" headerText="Customer ID"  width="80"></e-column>
      <e-column field="ShipCountry" headerText="Ship Country" width="90"></e-column>
    </e-columns>
  </ejs-grid>
  </div>
`,

  data () {
    return {
      data: [
        {
          OrderID: 10248,
          CustomerID: "VINET",
          ShipCountry: "France",
        },
        {
          OrderID: 10249,
          CustomerID: "TOMSP",
          ShipCountry: "Germany",
        },
      ],
    }
  }

});