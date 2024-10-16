
import Vue from "vue";
import { GridPlugin, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import {  TimePickerPlugin } from "@syncfusion/ej2-vue-calendars";

import { data } from './datasource.js';

Vue.use(GridPlugin);
Vue.use( TimePickerPlugin);


new Vue({
	el: '#app',
	template: `
  <div id="app">
    <ejs-grid :dataSource='dataGrid' :editSettings='editSettings' :toolbar='toolbar' height='273px' :actionBegin='actionBegin'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right' isPrimaryKey='true' :validationRules='orderIDRules'></e-column>
        <e-column field='CustomerID' headerText='Customer Name' width='120' :validationRules='customerIDRules'></e-column>
        <e-column field='Freight' headerText='Freight' width='120' format='C2' textAlign='Right' editType='numericedit' :validationRules='freightRules'></e-column>
        <e-column field='OrderDate' headerText='Order Time' type="date" width='130' :editTemplate="'editTemplate'" editType='datepickeredit' format='hh :mm a ' textAlign='Right' :validationRules='orderDateRules'>
          <template v-slot:editTemplate>
            <ejs-timepicker id="OrderDate" :value='orderData.OrderDate'></ejs-timepicker >
          </template>
        </e-column>
        <e-column field='ShipCountry' headerText='Ship Country' width='150'   :validationRules='shipCountryRules'>
        </e-column>
      </e-columns>
    </ejs-grid>
  </div>
`,

data() {
  return {
    dataGrid: data,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' },
    toolbar: ["Add", "Edit", "Delete", "Update", "Cancel"],
    orderIDRules: { required: true, number: true },
    freightRules: { required: true, min: 1, max: 1000 },
    customerIDRules: { required: true },
    shipCountryRules: { required: true },
    orderDateRules: { required: true },
    orderData: {}
  };
},
methods: {
  actionBegin(args) {
    if (args.requestType === 'beginEdit' || args.requestType === 'add') {
      this.orderData = Object.assign({}, args.rowData);
    }
    if (args.requestType === 'save') {
      this.orderData['OrderDate']=args.data['OrderDate'] ;
    }

  }
},
provide() {
  return {
    grid: [Edit, Toolbar],
  };
}
});