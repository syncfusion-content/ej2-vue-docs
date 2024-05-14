
import Vue from 'vue';
import { data } from './datasource.js';
import { DataManager, Query } from '@syncfusion/ej2-data';

new Vue({
	el: '#app',
	template: `
  <div id="app">
    <div class="e-form">
      <input type="number" v-model.number="edit.OrderID"  id='OrderID' placeholder="Order ID" />
      <input type="text" v-model="edit.CustomerID"  id="CustomerID" placeholder="Customer ID" :disabled="!edit.OrderID" />
      <input type="number" v-model.number="edit.EmployeeID"  id="EmployeeID" placeholder="Employee ID" :disabled="!edit.OrderID" />
      <input type="text" v-model="edit.ShipCountry"  id="ShipCountry" placeholder="Ship Country" :disabled="!edit.OrderID" />
      <input type="button" id="Update" value='Update' v-on:click="Update" />
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
        OrderID: null,
        CustomerID: null,
        EmployeeID: null,
        ShipCountry:null
      },
      dataManager: null,
    };
},

mounted() {
  this.dataManager = new DataManager(data);
  this.items=this.dataManager.executeLocal(new Query())
},
methods: {
  Update: function() {
    this.dataManager.update('OrderID',{
      OrderID: this.edit.OrderID,
      CustomerID: this.edit.CustomerID,
      EmployeeID: this.edit.EmployeeID,
      ShipCountry: this.edit.ShipCountry
    });
    this.items = this.dataManager.executeLocal(new Query())
  },
},
});