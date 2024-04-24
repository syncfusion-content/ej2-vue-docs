
import Vue from "vue";
import { GridPlugin, ForeignKey } from "@syncfusion/ej2-vue-grids";
import { DataManager, WebApiAdaptor } from "@syncfusion/ej2-data";
Vue.use(GridPlugin);

new Vue({
  el: '#app',
  template: `
    <div id="app">
        <ejs-grid :dataSource='data' height='315'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID'  width=100></e-column>
                <e-column field='EmployeeID' headerText='Employee Name' width=120 foreignKeyField='EmployeeID' foreignKeyValue='FirstName' :dataSource='employeeData'></e-column>
                <e-column field='Freight' headerText='Freight' width=80></e-column>
                <e-column field='ShipCity' headerText='Ship City' width=130  ></e-column>
            </e-columns>
        </ejs-grid>
    </div>
`,

  data() {
    return {
      data: new DataManager({
        url: "https://services.syncfusion.com/vue/production/api/Orders",
        adaptor: new WebApiAdaptor(),
        crossDomain: true
      }),

      employeeData: new DataManager({
        url: "https://services.syncfusion.com/vue/production/api/employees",
        adaptor: new WebApiAdaptor(),
        crossDomain: true
      })
    };
  },
  provide: {
    grid: [ForeignKey]
  }

});