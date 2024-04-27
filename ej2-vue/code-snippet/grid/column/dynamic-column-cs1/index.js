
import Vue from 'vue';
import { GridPlugin } from '@syncfusion/ej2-vue-grids';
import { data } from './datasource.js';

Vue.use(GridPlugin);

new Vue({
  el: '#app',
  template: `
  <div id='app'>
  <ejs-grid :dataSource="data">
      <e-columns>
          <e-column v-for="column in columns" :field="column.field" :headerText="column.headerText"></e-column>
      </e-columns>
  </ejs-grid>
</div>
`,

  data() {
    return {
      data: data,
      columns: [
        { field: 'OrderID', headerText: 'Order ID' },
        { field: 'CustomerID', headerText: 'Customer ID' },
        { field: 'Freight', headerText: 'Freight' },
        { field: 'ShipCountry', headerText: 'Ship Country' }
      ]
    }
  }

});