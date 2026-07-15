import Vue from "vue";
import { GridPlugin, DomVirtualization } from "@syncfusion/ej2-vue-grids";
import { generateLargeData } from './datasource.js';

Vue.use(GridPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
    <ejs-grid :dataSource='data' :enableDomVirtualization='true' :domVirtualizationSettings='domVirtualizationSettings' height='500px'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width='120'></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width='150'></e-column>
        <e-column field='OrderDate' headerText='Order Date' width='150' format='yMd'></e-column>
        <e-column field='Freight' headerText='Freight' width='120' format='C2' textAlign='Right'></e-column>
        <e-column field='ShipCity' headerText='Ship City' width='150'></e-column>
        <e-column field='ShipCountry' headerText='Ship Country' width='150'></e-column>
      </e-columns>
    </ejs-grid>
  </div>
`,
  data() {
    return {
      data: generateLargeData(10000),
      domVirtualizationSettings: {
        virtualDomType: 'Row',
        rowBuffer: 5
      }
    };
  },
  provide: {
    grid: [DomVirtualization]
  }
});
