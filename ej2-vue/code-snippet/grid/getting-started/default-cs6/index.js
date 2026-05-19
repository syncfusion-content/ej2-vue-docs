
import Vue from "vue";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";

Vue.use(GridPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-grid :dataSource="data">
          <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
            <e-column field='CustomerName' headerText='CustomerName' width=100></e-column>
            <e-column field='OrderDate' headerText='OrderDate' width='100' format='yMd' textAlign='Right'></e-column>
            <e-column field='Freight' headerText='Freight' width=100 format='C2' textAlign='Right'></e-column>
            <e-column field='ShipCountry' headerText='ShipCountry' width=100></e-column>
          </e-columns>
        </ejs-grid>
    </div>
`,

  data() {
    return {
      data: [
        { OrderID: 10248, CustomerName: 'Ana Trujillo', OrderDate: new Date(2025, 0, 12), ShipCountry: 'France', Freight: 32.38 },
        { OrderID: 10249, CustomerName: 'Martin Sommer', OrderDate: new Date(2025, 0, 15), ShipCountry: 'Germany', Freight: 11.61 },
        { OrderID: 10250, CustomerName: 'Thomas Hardy', OrderDate: new Date(2025, 1, 5), ShipCountry: 'Brazil', Freight: 65.83 },
        { OrderID: 10251, CustomerName: 'Elizabeth Lincoln', OrderDate: new Date(2025, 1, 18), ShipCountry: 'France', Freight: 41.34 },
        { OrderID: 10252, CustomerName: 'Victoria Ashworth', OrderDate: new Date(2025, 2, 10), ShipCountry: 'Belgium', Freight: 51.30 },
        { OrderID: 10253, CustomerName: 'Martine Rance', OrderDate: new Date(2025, 2, 22), ShipCountry: 'Brazil', Freight: 58.17 },
      ],
    };
  },
});