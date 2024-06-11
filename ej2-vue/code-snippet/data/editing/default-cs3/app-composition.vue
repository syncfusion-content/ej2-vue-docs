<template>
  <div id="app">
    <div class="e-form">
      <input type="number" v-model.number="edit.OrderID" id='OrderID' placeholder="Order ID" />
      <input type="button" id="Remove" value='Remove' v-on:click="Remove" />
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
const dataManager = ref(null);

onMounted(() => {
  dataManager.value = new DataManager(data);
  items.value = dataManager.value.executeLocal(new Query())
})

const Remove = function () {
  dataManager.value.remove('OrderID', {
    OrderID: edit.value.OrderID
  });
  items.value = dataManager.value.executeLocal(new Query())
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

#Remove {
  margin-left: 5px
}
</style>
