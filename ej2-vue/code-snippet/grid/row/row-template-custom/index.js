
import Vue from "vue";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";
import { ChipListPlugin } from '@syncfusion/ej2-vue-buttons';
import { DatePickerPlugin } from "@syncfusion/ej2-vue-calendars";
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";
import { NumericTextBoxPlugin } from "@syncfusion/ej2-vue-inputs";
import { employeeData } from './datasource.js';

Vue.use(GridPlugin);
Vue.use(DatePickerPlugin);
Vue.use(ChipListPlugin);
Vue.use(DropDownListPlugin);
Vue.use(NumericTextBoxPlugin);


new Vue({
  el: '#app',
  template: `
  <div id="app">
    <ejs-grid ref="grid" :dataSource="data" :rowTemplate="'rowTemplate'">
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" width="120" ></e-column>
        <e-column field="Quantity" headerText="Quantity" width="170" >
        </e-column>
        <e-column field="ShipAddress" headerText="Ship Address" width="170"></e-column>
        <e-column field="OrderDate" headerText="Order Date" width="120" ></e-column>
        <e-column headerText="Order Status" width="120" ></e-column>
      </e-columns>
      <template v-slot:rowTemplate="{ data }">
        <tr>
          <td class="rows">
            <ejs-chiplist width="50" id="chip" :text="data.OrderID">
            </ejs-chiplist>
          </td>
          <td class="rows">
            <ejs-numerictextbox width="150" :value="data.Quantity">
            </ejs-numerictextbox>
          </td>
          <td class="rows">{{data.ShipAddress}} </td>
          <td class="rows">
            <ejs-datepicker width="150" :value="data.OrderDate">
            </ejs-datepicker>
          </td>
          <td class="rows">
            <ejs-dropdownlist width="150" :value="data.OrderStatus"
            :dataSource="dropData" :popupHeight="150" :popupWidth="150">
            </ejs-dropdownlist>
          </td>
        </tr>
      </template>
   </ejs-grid>
  </div>`,

  data() {
    return {
      data: employeeData,
      dropData: ['Order Placed', 'Processing', 'Delivered']
    };
  }

});