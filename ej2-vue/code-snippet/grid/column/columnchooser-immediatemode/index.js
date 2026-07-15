import Vue from "vue";
import { GridPlugin, ColumnChooser, Toolbar } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);

new Vue({
  el: '#app',
  template: `
    <div id="app">
      <ejs-grid :dataSource="data" :showColumnChooser="true" :toolbar="toolbarOptions" :columnChooserSettings="columnChooserSettings" height="272px">
        <e-columns>
          <e-column field="OrderID" headerText="Order ID" width="120" textAlign="Right"></e-column>
          <e-column field="CustomerName" headerText="Customer Name" width="150"></e-column>
          <e-column field="OrderDate" headerText="Order Date" width="130" format="yMd" textAlign="Right"></e-column>
          <e-column field="Freight" width="120" format="C2" textAlign="Right"></e-column>
          <e-column field="ShippedDate" headerText="Shipped Date" width="140" format="yMd" textAlign="Right"></e-column>
          <e-column field="ShipCountry" headerText="Ship Country" width="150"></e-column>
        </e-columns>
      </ejs-grid>
    </div>`,
  data() {
    return {
      data,
      toolbarOptions: ['ColumnChooser'],
      columnChooserSettings: { mode: 'Immediate' }
    };
  },
  provide: {
    grid: [ColumnChooser, Toolbar]
  }
});