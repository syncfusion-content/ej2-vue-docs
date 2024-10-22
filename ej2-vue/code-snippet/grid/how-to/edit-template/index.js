
import Vue from "vue";
import { GridPlugin,Toolbar,Edit  } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
import DialogTemplate from './dialogtemp-edit.js';

Vue.use(GridPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
    <ejs-grid :dataSource="data" :editSettings="editSettings" :actionBegin="actionBegin"
    :actionComplete="actionComplete" :toolbar="toolbar" height="273px">
      <e-columns>
        <e-column field="OrderID" headerText="Order ID" textAlign="Right" :isPrimaryKey="true" width="100"></e-column>
        <e-column field="CustomerID" headerText="Customer ID" width="120"></e-column>
        <e-column field="ShipCountry" headerText="Ship Country" width="150"></e-column>
      </e-columns>
    </ejs-grid>
  </div>
`,

data: () => {
  return {
    data: data,
    editSettings: {
      allowEditing: true,
      allowAdding: true,
      allowDeleting: true,
      mode: 'Dialog',
      template: DialogTemplate,     
    },
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
  };
},
methods: {
  actionBegin: (args) => {
    if (args.requestType === 'save') {
        args.data['Freight'] = parseFloat(
        args.form.querySelector('#Freight').value
      );
    }
  },
  actionComplete: (args) => {
    if (args.requestType === 'beginEdit') {
      args.form.elements.namedItem('OrderID').focus();
    }
  },
},
provide: {
  grid: [Toolbar, Edit],
},
    
});