
import Vue from "vue";
import { GridPlugin, Page, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { MaskedTextBox } from '@syncfusion/ej2-inputs';
import { employeeData } from './datasource.js';

Vue.use(GridPlugin);

let element;
let maskObj;

function create() {
  element = document.createElement('input');
  return element;
}
function destroy() {
  maskObj.destroy();
}
function read() {
  return maskObj.value;
}
function write(args) {
     maskObj = new MaskedTextBox({
         mask: "0-0-0-0",
        value: args.rowData.Mask
      });
      maskObj.appendTo(element);
}

;
new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-grid ref='grid' :dataSource='data' :allowPaging='true' :editSettings='editSettings'  :toolbar='toolbar'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' type='number' textAlign='Right' :isPrimaryKey='true' width=100></e-column>
                <e-column field='CustomerID' headerText='Customer ID' type='string' width=120>
                </e-column>
                <e-column field='ShipCountry' headerText='Ship Country' type='string' width=120>
                </e-column>
                <e-column field='Mask' headerText='Mask' :edit='params'  width=140>
                </e-column>
            </e-columns>
        </ejs-grid>
    </div>
`,

  data() {
    return {
      data: employeeData,
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
      params: {
        create: create,
        destroy: destroy,
        read: read,
        write: write,
      },
      toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel']
    };
  },
  provide: {
    grid: [Page, Edit, Toolbar],
  },

});