
import Vue from "vue";
import { GridPlugin, Page, Toolbar, Edit, Sort, Filter } from "@syncfusion/ej2-vue-grids";
import { billingData } from './datasource.js';

Vue.use(GridPlugin);


new Vue({
  el: '#app',
  template: `
  <div id="app">
    <ejs-grid ref="grid" id="grid" :dataSource='data' :allowPaging='true' :allowSorting='true' :allowFiltering='true; :editSettings='editSettings' :toolbar='toolbar' :filterSettings='filterSettings' :actionBegin="actionBegin" :actionComplete="actionComplete">
      <e-columns>
        <e-column field="BillID" headerText="Bill ID" width="120" :isPrimaryKey="true" :validationRules="{ required: true }"></e-column>
        <e-column field="BillDate" headerText="Bill Date" width="140" format="yMd" editType="datepickeredit"></e-column>
        <e-column field="Customer" headerText="Customer Name" width="150" :validationRules="{ required: true }"></e-column>
        <e-column field="Product" headerText="Product Name" width="150" editType="dropdownedit"></e-column>
        <e-column field="Category" headerText="Category" width="130" editType="dropdownedit"></e-column>
        <e-column field="Quantity" headerText="Quantity" width="100" textAlign="Right" format="N0"></e-column>
        <e-column field="Price" headerText="Price" width="100" textAlign="Right" editType="numericedit" format="C2"></e-column>
        <e-column field="Total" headerText="Total" width="120" textAlign="Right" format="C2"></e-column>
        <e-column field="PaymentStatus" headerText="Payment Status" width="130" editType="dropdownedit"></e-column>
      </e-columns>
    </ejs-grid>
</div>
`,

  data() {
    return {
      data: billingData,
      filterSettings: { type: 'CheckBox' },
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Cell' },
      toolbar: ['Add', 'Delete', 'Update', 'Cancel']
    };
  },
  methods: {
    actionComplete: function (args) {
      let gridInstance = document.getElementById("grid").ej2_instances[0]
      if (args.action === 'edit' && args.requestType === 'save' && (args.columnName === 'Quantity' || args.columnName === 'Price')) {
        var total = args.data.Quantity * args.data.Price;
        gridInstance.updateCell(args.index, "Total", total);
      }
    },
    actionBegin: function(args) {
      if (args.requestType === 'beginEdit' && args.columnName === 'Total') {
        args.cancel = true;
      }
    } 
  },
  provide: {
    grid: [Page, Edit, Toolbar, Sort, Filter]
  }

});