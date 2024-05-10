
import Vue from "vue";
import { GridPlugin, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
    <ejs-grid :dataSource='data' :selectionSettings='selectionOptions' :editSettings='editSettings' :toolbar='toolbar' height='273px'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' :isPrimaryKey='true' :visible='false' width=120></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
        <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
        <e-column field='ShipCountry' headerText='ShipCountry' width=150></e-column>
        <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
      </e-columns>
    </ejs-grid>
  </div>`,

  data() {
    return {
      data: data,
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch' },
      toolbar: ['Add', 'Update', 'Cancel'],
      selectionOptions: { type: 'Multiple', mode: 'Cell', cellSelectionMode: 'Box' }
    };
  },
  provide: {
    grid: [Edit, Toolbar]
  }

});