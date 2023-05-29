
import Vue from "vue";
import { GridPlugin, Page, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { employeeData } from './datasource.js';

Vue.use(GridPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <button v-on:click="btnClick">Grid is Addable</button>
        <ejs-grid :dataSource='data' :editSettings='editSettings' :toolbar='toolbar' :cellEdit="cellEdit" :beforeBatchAdd="beforeBatchAdd" :beforeBatchDelete="beforeBatchDelete" height='240px'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' :isPrimaryKey='true' width=100></e-column>
                <e-column field='Role' headerText='Role' width=120></e-column>
                <e-column field='Freight' headerText='Freight' textAlign= 'Right' editType= 'numericedit' width=120 format= 'C2'></e-column>
                <e-column field='ShipCountry' headerText='Ship Country' editType= 'dropdownedit' width=150></e-column>
            </e-columns>
        </ejs-grid>
    </div>
`,

  data() {
    return {
      data: employeeData,
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch' },
      toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
      isAddable: true,
    };
  },
  
  methods: {
    cellEdit: function (args) {
      if (args.rowData["Role"] === "Employee") {
        args.cancel = true;
      }
    },
    beforeBatchAdd: function (args) {
      if (!this.isAddable) {
        args.cancel = true;
      }
    },
    beforeBatchDelete: function (args) {
      if (args.rowData["Role"] === "Employee") {
        args.cancel = true;
      }
    },
    btnClick: function (args) {
      args.target.innerText === "Grid is Addable" ? (args.target.innerText = "Grid is Not Addable") : (args.target.innerText = "Grid is Addable");
      this.isAddable = !this.isAddable;
    },
  },
  provide: {
    grid: [Page, Edit, Toolbar]
  }

});