<template>
  <div id="app">
    <div class="e-form">
      <input type="number" v-model.number="edit.OrderID" id='OrderID' placeholder="Order ID" />
      <input type="text" v-model="edit.CustomerID" id="CustomerID" placeholder="Customer ID" />
      <input type="number" v-model.number="edit.EmployeeID" id="EmployeeID" placeholder="Employee ID" />
      <input type="text" v-model="edit.ShipCountry" id="ShipCountry" placeholder="Ship Country" />
      <input type="button" id="Insert" value='Insert' v-on:click="performAction('addedRecords')" />
      <input type="button" id="Update" value='Update' v-on:click="performAction('changedRecords')" />
      <input type="button" id="Remove" value='Remove' v-on:click="performAction('deletedRecords')" />
    </div>
    <div class="e-form">
      <label>Click to save and apply changes: </label>
      <input type="button" id="Save" value="Save Changes" v-on:click="save" />
    </div>
    <table class='e-table'>
      <tr>
        <th>Order ID</th>
        <th>Customer ID</th>
        <th>Employee ID</th>
        <th>Ship Country</th>
      </tr>
      <tr v-for="(item, index) in items" :key="index">
        <td>{{ item.OrderID }}</td>
        <td>{{ item.CustomerID }}</td>
        <td>{{ item.EmployeeID }}</td>
        <td>{{ item.ShipCountry }}</td>
      </tr>
    </table>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { DataManager, Query } from '@syncfusion/ej2-data';
import { data } from './datasource.js';


const items = ref([]);
const edit = ref({
  OrderID: null,
  CustomerID: null,
  EmployeeID: null,
  ShipCountry: null
});
const changes = ref({
  changedRecords: [],
  addedRecords: [],
  deletedRecords: [],
});
const dataManager = ref(null);


onMounted(() => {
  dataManager.value = new DataManager(data);
  items.value = dataManager.value.executeLocal(new Query())
})

const performAction = function (action) {
  changes.value[action].push({
    OrderID: edit.value.OrderID,
    CustomerID: edit.value.CustomerID,
    EmployeeID: edit.value.EmployeeID,
    ShipCountry: edit.value.ShipCountry
  });
  edit.value = { OrderID: null, CustomerID: null, EmployeeID: null }
}
const save = function () {
  dataManager.value.saveChanges(changes.value, 'OrderID');
  items.value = dataManager.value.executeLocal(new Query());
  changes.value = { changedRecords: [], addedRecords: [], deletedRecords: [] };
}

</script>

<style>
.e-table {
  border: solid 1px #e0e0e0;
  border-collapse: collapse;
  font-family: Roboto;
  margin-top: 5px;
}

.e-table td,
.e-table th {
  border-style: solid;
  border-width: 1px 0 0;
  border-color: #e0e0e0;
  display: table-cell;
  font-size: 14px;
  line-height: 20px;
  overflow: hidden;
  padding: 8px 21px;
  vertical-align: middle;
  white-space: nowrap;
  width: auto;
}

#CustomerID,
#EmployeeID,
#ShipCountry,
#Insert,
#Update,
#Remove {
  margin-left: 5px;
  margin-bottom: 5px
}
</style>
