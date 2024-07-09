
import Vue from "vue";
import { GridPlugin, Page, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
import { L10n } from '@syncfusion/ej2-base';
Vue.use(GridPlugin);

L10n.load({
  'en-US': {
    grid: {
      'OKButton': 'YES',
      'CancelButton': 'Discard',
      'ConfirmDelete': 'Are you sure you want to delete the selected Record?'
    }
  }
});

new Vue({
  el: '#app',
  template: `
    <div id="app">
        <ejs-grid ref='grid' :dataSource='data' :editSettings='editSettings' :toolbar='toolbar' height='273px' :toolbarClick = 'toolbarClick'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' :isPrimaryKey='true' width=100></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                <e-column field='Freight' headerText='Freight' textAlign= 'Right' editType= 'numericedit' width=120 format= 'C2'></e-column>
                <e-column field='ShipCountry' headerText='Ship Country' editType= 'dropdownedit' width=150></e-column>
            </e-columns>
        </ejs-grid>
    </div>
`,

  data() {
    return {
      data: data,
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, showDeleteConfirmDialog: true },
      toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel']
    };
  },
  methods: {
    toolbarClick(args){
      if (args.item.text === 'Delete') {
        const dialogObj = this.$refs.grid.ej2Instances.editModule.dialogObj;
        dialogObj.header = 'Delete Confirmation Dialog';
        dialogObj.showCloseIcon = true;
      }
    }
  },
  provide: {
    grid: [Page, Edit, Toolbar]
  }

});