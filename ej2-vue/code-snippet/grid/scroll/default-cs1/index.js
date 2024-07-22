
import Vue from "vue";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js'

Vue.use(GridPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
    <div style="height:500px;width:600px">
      <ejs-grid :dataSource='data' height='100%' width='100%'>
        <e-columns>
          <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
          <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
          <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
          <e-column field='ShipCountry' headerText='Ship Country' width=150></e-column>
          <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
        </e-columns>
      </ejs-grid>
    </div>
    </div>
`,

data() {
  return {
    data: data,
  };
}
});