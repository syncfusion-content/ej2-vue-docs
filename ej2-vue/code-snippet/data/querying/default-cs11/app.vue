<template>
  <div id="app">
    <table class='e-table'>
      <tr>
        <th>Order ID</th>
        <th>Customer ID</th>
        <th>Employee ID</th>
        <th>Ship Country</th>
      </tr>
      <tbody v-for="(item, index) in items" :key="index">
        <tr>
          <td>{{ item.OrderID }}</td>
          <td>{{ item.CustomerID }}</td>
          <td>{{ item.EmployeeID }}</td>
        <td>{{ item.ShipCountry }}</td>
        </tr>
        <tr>
          <td :colspan="4">
            <table class='e-table'>
              <tr>
              <th>ID</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Product</th>              
            </tr>
            <tbody v-for="(order, index) in item.Order_Details" :key="index">
              <tr>
                <td>{{ order.OrderID }}</td>
                <td>{{ order.UnitPrice }}</td>
                <td>{{ order.Quantity }}</td>
                <td>{{ order.ProductID }}</td>
              </tr>
            </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { DataManager, Query, ODataV4Adaptor } from '@syncfusion/ej2-data';

export default {
  data() {
    return {
      items: [] 
    };
  },
  mounted() {
    let SERVICE_URI = "https://services.odata.org/V4/Northwind/Northwind.svc/";

    let dataManager = new DataManager({
      url: SERVICE_URI,
      adaptor: new ODataV4Adaptor()
    });
    
    dataManager.executeQuery(new Query().from('Orders')
          .take(3)
          .hierarchy(
            new Query()
              .foreignKey('OrderID')
              .from('Order_Details'),
            () => [10248, 10249, 10250] // Selective loading of child elements
          )).then((e) => {
      this.items = e.result;
    });
  }  
}
</script>

<style>
  .e-table {
    border: solid 1px #e0e0e0;
    border-collapse: collapse;
    font-family: Roboto;
  }

  .e-table td, .e-table th {
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
