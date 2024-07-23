
import Vue from "vue";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";
import { data } from "./datasource.js";

Vue.use(GridPlugin);

new Vue({
  el: '#app',
  template: `
    <div id="app">
    <ejs-grid ref=grid :dataSource="data" allowPaging="true">
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" 
        :customAttributes="{class:'customcss'}" textAlign="Center">
        </e-column>
        <e-column field="CustomerID" headerText="Customer Name" 
        textAlign="Center"> </e-column>
        <e-column field="OrderDate" type="Date" headerText="Order Date" format="yMd"
        :customAttributes="{class:'customcss'}" textAlign="Center">
        </e-column>
        <e-column field="ShippedDate" type="date" headerText="Shipped Date" textAlign="Center" 
        format="yMd"></e-column>
      </e-columns>
    </ejs-grid>
  </div>`,

  data() {
    return {
      data: data,
    };
  }
});