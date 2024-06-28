
import Vue from "vue";
import { GridPlugin, Page, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-grid ref='grid' :dataSource='data' :editSettings='editSettings' :toolbar='toolbar' height='273px' :actionBegin = 'actionBegin' :actionComplete = 'actionComplete'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' :isPrimaryKey='true' width=100></e-column>
                <e-column field='CustomerID' :visible = 'false' headerText='Customer ID' width=120></e-column>
                <e-column field='Freight' headerText='Freight' textAlign= 'Right' editType= 'numericedit' width=120 format= 'C2'></e-column>
                <e-column field='ShipCountry' headerText='Ship Country' editType= 'dropdownedit' width=150></e-column>
            </e-columns>
        </ejs-grid>
    </div>
`,

  data() {
    return {
      data: data,
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' },
      toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel']
    };
  },
  methods: {
    actionBegin(args) {
        if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
            for (var i = 0; i < this.$refs.grid.getColumns().length; i++) {
                if (this.$refs.grid.getColumns()[i].field == "CustomerID") {
                    this.$refs.grid.getColumns()[i].visible = true;
                }
                else if (this.$refs.grid.getColumns()[i].field == "ShipCountry") {
                    this.$refs.grid.getColumns()[i].visible = false;
                }
            }
        }
    },
    actionComplete(args) {
        if ((args.requestType === 'save')) {
            for (var i = 0; i < this.$refs.grid.getColumns().length; i++) {
                if (this.$refs.grid.getColumns()[i].field == "CustomerID") {
                    this.$refs.grid.getColumns()[i].visible = false;
                }
                else if (this.$refs.grid.getColumns()[i].field == "ShipCountry") {
                    this.$refs.grid.getColumns()[i].visible = true;
                }
            }
        }
    }
  },
  provide: {
    grid: [Page, Edit, Toolbar]
  }

});