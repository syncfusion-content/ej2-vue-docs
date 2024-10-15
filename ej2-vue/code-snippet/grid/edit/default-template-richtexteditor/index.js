
import Vue from "vue";
import { GridPlugin, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { RichTextEditorPlugin, HtmlEditor, Inject as RichTextEditorInject, Toolbar as RichTextEditorToolbar, QuickToolbar } from '@syncfusion/ej2-vue-richtexteditor'; 

import { data } from './datasource.js';

Vue.use(GridPlugin);
Vue.use(RichTextEditorPlugin);


new Vue({
	el: '#app',
	template: `
  <div id="app">
    <ejs-grid :dataSource="data" :editSettings="editSettings" :toolbar="toolbar" height="273px" :actionBegin="actionBegin">
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" width="120" textAlign="Right" isPrimaryKey="true" :validationRules="orderIDRules"></e-column>
        <e-column field="CustomerID" headerText="Customer ID" width="150" :validationRules="shipCountryRules"></e-column>
        <e-column field="Freight" headerText="Freight" width="120" format="C2" textAlign="Right" editType="numericedit" :validationRules="freightRules"></e-column>
        <e-column field="OrderDate" headerText="Order Date" type="date" width="130" editType="datepickeredit" 
        format="yMd" textAlign="Right" :validationRules="orderDateRules"></e-column>
        <e-column field='ShipAddress' headerText='Ship Address' width='120' :editTemplate="'editTemplate'" :disableHtmlEncode="false">
          <template v-slot:editTemplate="{data }">
            <div v-if="data && data.ShipAddress !== undefined">
              <ejs-richtexteditor id="ShipAddress" :value="orderData.ShipAddress" :focus="onFocus"></ejs-richtexteditor>
            </div>
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
    orderData: {}
  };
},
methods: {
  actionBegin(args) {
    if (args.requestType === 'beginEdit' || args.requestType === 'add') {
      this.orderData = Object.assign({}, args.rowData);
    }
    if (args.requestType === 'save') {
      this.orderData['ShipAddress']=args.data['ShipAddress'] ;
    }
  },
  onFocus(args) {
    args.event.target.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.stopPropagation();
      }
    });
  
  },
},
provide() {
  return {
    grid: [Edit, Toolbar],
    richtexteditor: [ HtmlEditor, RichTextEditorToolbar, QuickToolbar]
  };
}

});