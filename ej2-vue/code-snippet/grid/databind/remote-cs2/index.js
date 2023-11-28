
import Vue from "vue";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";
import { DataManager, ODataAdaptor } from "@syncfusion/ej2-data";

Vue.use(GridPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-grid :dataSource="data">
          <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
            <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
            <e-column field='OrderDate' headerText='Order Date' textAlign='Right' format='yMd' type='date' width=120></e-column>
          </e-columns>
        </ejs-grid>
    </div>
`,

  data() {
    let SERVICE_URI =
      "https://services.syncfusion.com/js/production/api/Orders";
    return {
      data: new DataManager({
        url: SERVICE_URI,
        adaptor: new ODataAdaptor()
      })
    };
  }

});