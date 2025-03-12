import Vue from "vue";
import { GridPlugin, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
Vue.use(GridPlugin);
new Vue({
	el: '#app',
	template: `
  <div id="app">
    <ejs-grid ref="grid" id="Grid" :dataSource='dataGrid' :editSettings='editSettings' :toolbar='toolbar' height='400px' :actionBegin="actionBegin">
      <e-columns>
       <e-column field='OrderID' headerText='Order ID' textAlign='Right' isPrimaryKey='true' width=100 ></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=120 ></e-column>
        <e-column field="OrderDate" headerText="Order Date" type="date" width="150" format="yMd" editType="datepickeredit"></e-column>     
        <e-column field='Freight' headerText='Freight' textAlign='Right' editType='numericedit' width=120></e-column>
        <e-column field='ShipCity' headerText='Ship City' editType='dropdownedit' width=150></e-column>        
      </e-columns>
    </ejs-grid>
  </div>
`,

data() {
  return {
    dataGrid: data,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
    toolbar: ["Add", "Edit", "Delete", "Update", "Cancel"],
  };
},
provide() {
  return {
    grid: [Edit, Toolbar],
  };
},
methods: {
  actionBegin: function (args) {
    if (args.requestType === 'beginEdit') {
      let minDate = args.rowData['OrderDate'];
      const gridInstance = this.$refs.grid.ej2Instances; // Access the Grid instance.
      const columns = gridInstance.getColumns(); // Retrieve columns array.
      columns.forEach((column) => {
        if (column.field === 'OrderDate') {
          column.edit.params = { min: minDate };
        }
      });
    }
  },
},
});