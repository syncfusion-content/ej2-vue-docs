import Vue from "vue";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";
import { data } from "./datasource.js";

Vue.use(GridPlugin);
Vue.use(DropDownListPlugin);

new Vue({
  el: '#app',
  template: `
    <div id="app">
      <ejs-grid :dataSource="data" allowPaging="true">
        <e-columns>
            <e-column field="OrderID" width="120" textAlign="Center" :headerTemplate="'orderIDTemplate'"></e-column>
            <e-column headerText="Order Details" :columns="orderColumns" :headerTemplate="'orderDetailsTemplate'"></e-column>
            <e-column headerText="Ship Details" :columns="shipColumns" :headerTemplate="'shipDetailsTemplate'"></e-column>
          </e-columns>
          <template v-slot:orderIDTemplate>
            <div>
              <a href="#">OrderID</a>
            </div>
          </template>
          <template v-slot:orderDetailsTemplate>
            <div>
              <ejs-dropdownlist index="0" :dataSource="dropdownData"></ejs-dropdownlist>
            </div>
          </template>
          <template v-slot:shipDetailsTemplate="{ data }">
            <div>
              <span>{{ data.headerText }}</span>
              <span>(<i class="fa fa-truck"></i>)</span>
            </div>
          </template>
          <template v-slot:datetemplate="{ data }">
            <div><span style="padding-right: 7px;" class="e-icon-calender e-icons headericon"></span>{{ data.headerText }}</div>
          </template>
      </ejs-grid>
  </div>`,

  data() {
    return {
      data: data,
      orderColumns: [
        {
          field: 'OrderDate',
          headerText: 'Order Date',
          format: 'yMd',
          type: "Date",
          headerTemplate: "datetemplate",
          width: 130,
          textAlign: 'Right',
          minWidth: 10,
        },
        {
          field: 'Freight',
          headerText: 'Freight ($)',
          width: 120,
          format: 'C1',
          textAlign: 'Right',
          minWidth: 10,
        },
      ],

      shipColumns: [
        {
          field: 'ShippedDate',
          headerText: 'Shipped Date',
          type: "Date",
          format: 'yMd',
          textAlign: 'Right',
          width: 150,
          minWidth: 10,
        },
        {
          field: 'ShipCountry',
          headerText: 'Ship Country',
          width: 150,
          minWidth: 10,
        },
      ],
      dropdownData: ['Order Details', 'Order Information'],

    };
  }
});