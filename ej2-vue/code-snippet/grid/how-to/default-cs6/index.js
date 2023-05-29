
import Vue from "vue";
import { GridPlugin,Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-grid :dataSource='data' :editSettings='editSettings' :toolbar='toolbar' height='265px' >
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' :isPrimaryKey='true' textAlign='Right' width=100></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                <e-column field='Freight' headerText='Freight' textAlign='Center' editType='numericedit' :edit='numericParams' width=80></e-column>
             <e-column field='ShipCity' headerText='Ship City' editType='dropdownedit'  width=120></e-column>
            </e-columns>
        </ejs-grid>
    </div>
`,

  data: () => {
    return {
      data: data,
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
      toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
      numericParams: { params: {
        validateDecimalOnType: true,
        decimals: 0,
        format: "N" }
      },
    };
  },
  provide: {
    grid: [Edit, Toolbar]
  }

});