import Vue from 'vue';
import  data  from './datasource.js';
import { DataManager, Query } from '@syncfusion/ej2-data';

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
      items: new DataManager(data).executeLocal(new Query())
    };
  },
});
