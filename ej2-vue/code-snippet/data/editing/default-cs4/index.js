
import Vue from 'vue';
import { data } from './datasource.js';
import { DataManager, Query } from '@syncfusion/ej2-data';

new Vue({
	el: '#app',
	template: `
  <div id="app">
    <div class="e-form">
      <input type="number" v-model.number="edit.OrderID"  id='OrderID' placeholder="Order ID" />
      <input type="text" v-model="edit.CustomerID"  id="CustomerID" placeholder="Customer ID"  />
      <input type="number" v-model.number="edit.EmployeeID"  id="EmployeeID" placeholder="Employee ID" />
      <input type="text" v-model="edit.ShipCountry"  id="ShipCountry" placeholder="Ship Country" />
      <input type="button" id="Insert" value="Insert"  v-on:click="performAction('addedRecords')" />
      <input type="button" id="Update" value="Update"  v-on:click="performAction('changedRecords')" />
      <input type="button" id="Remove" value="Remove"  v-on:click="performAction('deletedRecords')" />
    </div>
    <div class="e-form">
      <label>Click to save and apply changes: </label>
      <input type="button" id="Save" value="Save Changes" v-on:click="save()" width=200px/>
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
      changes: {
        changedRecords: [],
        addedRecords: [],
        deletedRecords: [],
      },
      dataManager: null,
    };
},

mounted() {
  this.dataManager = new DataManager(data);
  this.items=this.dataManager.executeLocal(new Query())
},
methods: {
  performAction: function(action) {
    this.changes[action].push({
      OrderID: this.edit.OrderID,
      CustomerID: this.edit.CustomerID,
      EmployeeID: this.edit.EmployeeID,
      ShipCountry: this.edit.ShipCountry
    });
    this.edit = { OrderID: null, CustomerID: null, EmployeeID: null }
  },
  save: function() {
    this.dataManager.saveChanges(this.changes, 'OrderID');
    this.items = this.dataManager.executeLocal(new Query());
    this.changes = { changedRecords: [], addedRecords: [], deletedRecords: [] };
  },
},
});