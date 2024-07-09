
import Vue from "vue";
import { GridPlugin, Edit } from "@syncfusion/ej2-vue-grids";
import { ToolbarPlugin } from "@syncfusion/ej2-vue-navigations";
import { data } from './datasource.js';

Vue.use(GridPlugin);
Vue.use(ToolbarPlugin);

new Vue({
  el: '#app',
  template: `
    <div id="app">
      <div style="display: flex" >
        <ejs-toolbar :clicked="onToolbarClick">
          <e-items>
              <e-item text="Add" id="add"></e-item>
              <e-item text="Edit" id="edit"></e-item>
              <e-item text="Delete" id="delete"></e-item>
              <e-item text="Update" id="update"></e-item>
              <e-item text="Cancel" id="cancel"></e-item>
          </e-items>
        </ejs-toolbar>
      </div>
        <ejs-grid style='margin-top:10px' ref='grid' :dataSource='data' :editSettings='editSettings' height='273px'>
          <e-columns>
            <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right' isPrimaryKey='true' :validationRules='orderIDRules'></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width='120' :validationRules='customerIDRules'></e-column>
            <e-column field='Freight' headerText='Freight' width='120' format='C2' textAlign='Right' editType='numericedit' :validationRules='freightRules'></e-column>
            <e-column field='OrderDate' headerText='Order Date' width='130' format='yMd' editType='datepickeredit' textAlign='Right'></e-column>
            <e-column field='ShipCountry' headerText='Ship Country' width='150' editType='dropdownedit' :edit='editparams'></e-column>
          </e-columns>
        </ejs-grid>
    </div>
`,

  data() {
    return {
      data: data,
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' },
      orderIDRules: { required: true, number: true },
      customerIDRules: { required: true },
      freightRules: { required: true },
      editparams: { params: { popupHeight: '300px' } },
    };
  },
  methods: {
    onToolbarClick(args) {
      switch (args.item.id) {
        case 'add':
          this.$refs.grid.addRecord();
          break;
        case 'edit':
          this.$refs.grid.startEdit();
          break;
        case 'delete':
          this.$refs.grid.deleteRecord();
          break;
        case 'update':
          this.$refs.grid.endEdit();
          break;
        case 'cancel':
          this.$refs.grid.closeEdit();
          break;
      }
    }
  },
  provide: {
    grid: [Edit]
  }

});