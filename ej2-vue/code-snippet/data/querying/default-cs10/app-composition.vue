<template>
  <div id="app">
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
      <tr>
        <td></td>
        <td></td>
        <td>Sum: {{ sum }}</td>
        <td></td>
      </tr>
    </table>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { DataManager, Query, ODataV4Adaptor } from '@syncfusion/ej2-data';


const items = ref([]);
const sum = ref(0);

onMounted(() => {
  let SERVICE_URI = "https://services.odata.org/V4/Northwind/Northwind.svc/Orders";

  let dataManager = new DataManager({
    url: SERVICE_URI,
    adaptor: new ODataV4Adaptor()
  });
  dataManager.executeQuery(new Query().take(8).requiresCount()
    .aggregate('sum', 'EmployeeID')).then((e) => {
      items.value = e.result;
      sum.value = e.aggregates['EmployeeID - sum'];
    }
    );
})
</script>

<style>
.e-table {
  border: solid 1px #e0e0e0;
  border-collapse: collapse;
  font-family: Roboto;
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
</style>