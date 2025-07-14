import Vue from "vue";
import { GridPlugin, Page } from "@syncfusion/ej2-vue-grids";
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
Vue.use(GridPlugin);
class CustomAdaptor extends WebApiAdaptor {
  beforeSend(args, xhr, settings) {
    xhr.withCredentials = true;
    super.beforeSend(args, xhr, settings);
    xhr.headers.set("Syncfusion", true); // Assign custom headers here.
  }
}
new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-grid :dataSource="data" :allowPaging="true">
          <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
            <e-column field='EmployeeID' headerText='EmployeeID' width=120 textAlign='Right'> </e-column>
            <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
            <e-column field='ShipCountry' headerText='ShipCountry' width=120></e-column>
          </e-columns>
        </ejs-grid>
    </div>
`,

  data() {
    let SERVICE_URI = "https://services.syncfusion.com/vue/production/api/Orders";
    return {
      data: new DataManager({
        url: SERVICE_URI,
        adaptor: new CustomAdaptor(),
      }),
    };
  },
  provide: {
    grid: [Page]
  }
});