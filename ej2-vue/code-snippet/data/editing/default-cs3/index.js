
import Vue from 'vue';
import { data } from './datasource.js';
import { DataManager, Query } from '@syncfusion/ej2-data';

new Vue({
	el: '#app',
	template: `
  <div id="app">
    <div class="e-form">
      <input type="number" v-model.number="edit.OrderID"  id='OrderID' placeholder="Order ID" />
      <input type="button" id="Remove" value='Remove' v-on:click="Remove" />
    </div>
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
      items: [],
      edit: {
        OrderID: null
      },
      dataManager: null,
    };
},

mounted() {
  this.dataManager = new DataManager(data);
  this.items=this.dataManager.executeLocal(new Query())
},
methods: {
  Remove: function() {
    this.dataManager.remove('OrderID',{
      OrderID: this.edit.OrderID
    });
    this.items = this.dataManager.executeLocal(new Query())
  },
},
});