
import Vue from 'vue';
import { data } from './datasource.js';
import { GridPlugin } from '@syncfusion/ej2-vue-grids';
import { DataManager } from '@syncfusion/ej2-data';

Vue.use(GridPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
    <ejs-grid :dataSource="data">
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' width=90></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
        <e-column field='Freight' headerText='Freight' format='C2'  width=90></e-column>
        <e-column field='ShipName' headerText='Ship Name' width=100></e-column>
      </e-columns>
    </ejs-grid>
  </div>
`,

data() {
  return {
    data: new DataManager(data)
  };
},

});