
import Vue from "vue";
import { GridPlugin,ForeignKey } from "@syncfusion/ej2-vue-grids";
import {  orderDetails,  customerData } from './datasource.js';

Vue.use(GridPlugin);

new Vue({
  el: '#app',
  template: `
  <div id="app">
    <ejs-grid ref="grid" id="grid" :dataSource="data" height="315px">
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" textAlign="Right" width="90"></e-column>
        <e-column field="CustomerID" headerText="Customer Name" width="150" foreignKeyField="CustomerID" foreignKeyValue="ContactName" :dataSource="customerData" :template="'radioTemplate'" >
        </e-column>
        <e-column field="Freight" headerText="Freight" textAlign="Right" format="C2" width="90"></e-column>
        <e-column field="OrderDate" headerText="Order Date" textAlign="Right" type="date" format="yMd" width="120"></e-column>    
      </e-columns>
      <template v-slot:radioTemplate="{ data }">
        <a href="javascript:void(0)" @click="navToAccount(data.OrderID,$event)">{{ data.foreignKeyData.ContactName }}</a>
      </template>
    </ejs-grid>
  </div>
`,

data() {
  return {
    data:orderDetails,
    customerData: customerData
  };
},
methods: {
  navToAccount(Id) {
    window.history.pushState("", "changed", `../Account/AccountDetail.cshtml?custid=0&accountId=${Id}`);
  }
},
provide() {
  return {
    grid: [ForeignKey]
  };
}
};

});

