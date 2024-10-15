
import Vue from "vue";
import { GridPlugin, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { TextAreaPlugin} from "@syncfusion/ej2-vue-inputs";
import { data } from './datasource.js';

Vue.use(GridPlugin);
Vue.use(TextAreaPlugin);


new Vue({
	el: '#app',
	template: `
  <div id="app">
    <ejs-grid :dataSource='dataGrid' :editSettings='editSettings' :toolbar='toolbar' height='273px' :actionBegin='actionBegin'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right' isPrimaryKey='true' :validationRules='orderIDRules'></e-column>
        <e-column field='CustomerID' headerText='Customer Name' width='120' :validationRules='customerIDRules'></e-column>
        <e-column field='Freight' headerText='Freight' width='120' format='C2' textAlign='Right' editType='numericedit' :validationRules='freightRules'></e-column>
        <e-column field='OrderDate' headerText='Order Date' type="date" width='130' editType='datepickeredit' format='yMd' textAlign='Right' :validationRules='orderDateRules'></e-column>
        <e-column field='ShipAddress' headerText='Ship Address' width='150' :editTemplate="'editTemplate'" :disableHtmlEncode=false  :valueAccessor="valueAccessor" >
          <template v-slot:editTemplate>
            <ejs-textarea id="ShipAddress" :multiline='true' :focus="onFocus" :value="orderData.ShipAddress"></ejs-textarea>
          </template>
        </e-column>
      </e-columns>
    </ejs-grid>
  </div>
`,

data() {
  return {
    dataGrid: data,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' },
    toolbar: ["Add", "Edit", "Delete", "Update", "Cancel"],
    orderIDRules: { required: true, number: true },
    freightRules: { required: true, min: 1, max: 1000 },
    customerIDRules: { required: true },
    orderDateRules: { required: true },
    orderData: {}
  };
},
methods: {
  actionBegin(args) {
    if (args.requestType === 'beginEdit' || args.requestType === 'add') {
      this.orderData = Object.assign({}, args.rowData);
    }
    if (args.requestType === 'save') {
      this.orderData['ShipAddress'] = args.data['ShipAddress'];
    }

  },

  valueAccessor (field, data) {
      const value = data.ShipAddress;
      return (value !== undefined) ? value.split('\n').join('<br>') : '';
  },

  onFocus(args){
      args.event.target.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') {
              e.stopPropagation();
          }
      });
  }

},
provide() {
  return {
    grid: [Edit, Toolbar],
  };
}

});