
import Vue from "vue";
import { DataManager, Query, ODataV4Adaptor } from '@syncfusion/ej2-data';

new Vue({
  el: '#app',
  template: `
  <div id="app">
    <table class='e-table'>
      <tr><th>Order ID</th><th>Customer ID</th><th>Employee ID</th><th>Ship Country</th></tr>
      <tr v-for="(item, index) in items" :key="index">
        <td>{{ item.OrderID }}</td>
        <td>{{ item.CustomerID }}</td>
        <td>{{ item.EmployeeID }}</td>
        <td>{{ item.ShipCountry }}</td>
      </tr>
    </table>  
  </div>`,

  data() {
    return {
      items: []
    };
  },
  mounted() {
    let SERVICE_URI = "https://services.odata.org/V4/Northwind/Northwind.svc/Orders";
    let dataManager = new DataManager({
      url: SERVICE_URI,
      adaptor: new ODataV4Adaptor()
    });
    dataManager.executeQuery(new Query().addParams('$top', '15')).then((e) => {
      this.items = e.result;
    });
  }

});