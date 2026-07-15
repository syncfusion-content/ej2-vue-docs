import Vue from "vue";
import { GridPlugin, VirtualScroll } from "@syncfusion/ej2-vue-grids";
import { DataManager, WebApiAdaptor } from "@syncfusion/ej2-data";

Vue.use(GridPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
    <div style="margin-bottom: 10px">
      <span>Total Records: 100,000 | Page Size: {{ pageSettings.pageSize }}</span>
    </div>
    <ejs-grid :dataSource='data' :enableVirtualization='true' :pageSettings='pageSettings' height='500px'>
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
      data: new DataManager({
        url: 'https://services.syncfusion.com/vue/production/api/Orders',
        adaptor: new WebApiAdaptor
      }),
      pageSettings: { pageSize: 50 }
    };
  },
  provide: {
    grid: [VirtualScroll]
  }
});
