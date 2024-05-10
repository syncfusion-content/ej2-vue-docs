
import Vue from "vue";
import { L10n } from '@syncfusion/ej2-base';
import { GridPlugin, Page, Group } from "@syncfusion/ej2-vue-grids";
import deDELocalization from './locale.json';
import { data } from './datasource.js';

L10n.load(deDELocalization);
Vue.use(GridPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
    <ejs-grid :dataSource='data' locale='de-DE' :allowGrouping='true' :allowPaging='true' :pageSettings='pageOptions' height='220px'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
        <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
        <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
      </e-columns>
    </ejs-grid>
  </div>`,

  data() {
    return {
      data: data,
      pageOptions: { pageSize: 7 }
    };
  },
  provide: {
    grid: [Page, Group]
  }
});