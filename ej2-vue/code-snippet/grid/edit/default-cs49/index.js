
import Vue from "vue";
import { GridPlugin, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-grid :dataSource='data' :editSettings='editSettings' :toolbar='toolbar' height='315px'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' :isPrimaryKey='true' width=100 :validationRules='orderidrules'></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=120 :validationRules='customeridrules'></e-column>
                <e-column field='Freight' headerText='Freight' textAlign= 'Right' editType='numericedit' width=120 format= 'C2' :validationRules='freightrules'></e-column>
                <e-column field='ShipCountry' headerText='Ship Country' editType='dropdownedit' width=150></e-column>
            </e-columns>
        </ejs-grid>
    </div>
`,

  data() {
    return {
      data: data,
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, newRowPosition: 'Top', showAddNewRow: true },
      toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
      orderidrules: {required: true, number: true},
      customeridrules: { required: true, minLength: 5 },
      freightrules: { required: true, min: 1 }
    };
  },
  provide: {
    grid: [Edit, Toolbar]
  }

});