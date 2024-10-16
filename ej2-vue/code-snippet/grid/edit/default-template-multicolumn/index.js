
import Vue from "vue";
import { GridPlugin, Page, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";

import { data} from './datasource.js';
import { Query } from '@syncfusion/ej2-data';

Vue.use(GridPlugin);
Vue.use(DropDownListPlugin);


new Vue({
	el: '#app',
	template: `
  <div id="app">
    <ejs-grid :dataSource="data" :editSettings="editSettings" :toolbar="toolbar" height="273px" :actionBegin="actionBegin">
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" width="120" textAlign="Right" isPrimaryKey="true" :validationRules="orderIDRules"></e-column>
        <e-column field="CustomerID" headerText="Customer ID" width="150" :validationRules="shipCountryRules"></e-column>
        <e-column field="Freight" headerText="Freight" width="120" format="C2" textAlign="Right" editType="numericedit" :validationRules="freightRules"></e-column>
        <e-column field="OrderDate" headerText="Order Date" type="date" width="130" editType="datepickeredit" format="yMd" textAlign="Right" :validationRules="orderDateRules"></e-column>
        <e-column field='ShipCountry' headerText='Ship Country' width='120' :editTemplate="'editTemplate'">
          <template v-slot:editTemplate>
            <ejs-dropdownlist id="ShipCountry"  :dataSource="data" width="300" :fields="dropDownFields" :query='query' :value="orderData.ShipCountry" 
              :itemTemplate="'itemTemplate'" :headerTemplate="'headerTemplate'">
              <template v-slot:headerTemplate>
                <table>
                  <tr>
                    <th>EmployeeID</th>
                    <th>ShipCountry</th>
                  </tr>
                </table>
              </template>
              <template v-slot:itemTemplate="{ data }">
                <div class="e-grid">
                  <table class="e-table">
                    <tbody>
                      <tr>
                        <td class="e-rowcell">{{data.EmployeeID }}</td>
                        <td class="e-rowcell">{{ data.ShipCountry }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </template>
            </ejs-dropdownlist>
          </template>
        </e-column>
      </e-columns>
    </ejs-grid>
  </div>
`,

data() {
  return {
    data: data,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' },
    toolbar: ["Add", "Edit", "Delete", "Update", "Cancel"],
    orderIDRules: { required: true, number: true },
    freightRules: { required: true, min: 1, max: 1000 },
    shipCountryRules: { required: true },
    orderDateRules: { required: true },
    dropDownFields: { text: 'ShipCountry', value:'ShipCountry' },
    query: new Query().from('data').select(['EmployeeID', 'ShipCountry']).take(6),
    orderData: { } 

  };
},
methods: {
  actionBegin(args) {
    if (args.requestType === 'beginEdit' || args.requestType === 'add') {
      this.orderData = Object.assign({}, args.rowData);
    }
    if (args.requestType === 'save') {
      this.orderData['ShipCountry'] = args.data['ShipCountry'];
    }
  }
},
provide() {
  return {
    grid: [Edit, Toolbar],
  };
}
});