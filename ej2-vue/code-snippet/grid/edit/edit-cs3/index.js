
import Vue from "vue";
import { GridPlugin, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { DropDownListPlugin } from "@syncfusion/ej2-vue-dropdowns";
import { data } from './datasource.js';

Vue.use(GridPlugin);
Vue.use(DropDownListPlugin);


new Vue({
  el: '#app',
  template: `
    <div id="app">
      <div style="display: inline-block;">
        <label style="padding:  10px 10px 12px 0"> Select column to disable editing: </label> 
        <ejs-dropdownlist id='dropdownlist' index="0" width="150" :dataSource="alignmentData" :fields='dropdownFields' :change="changeAlignment"></ejs-dropdownlist>
      </div>
        <ejs-grid style='margin-top:10px' ref='grid' :dataSource='data' :editSettings='editSettings' :toolbar='toolbar' height='273px'>
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
      toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
      orderIDRules: { required: true, number: true },
      customerIDRules: { required: true },
      freightRules: { required: true },
      editparams: { params: { popupHeight: '300px' } },
      dropdownFields: { text: 'text', value: 'value' },
      alignmentData: [
        { text: 'Order ID', value: 'OrderID' },
        { text: 'Customer ID', value: 'CustomerID' },
        { text: 'Freight', value: 'Freight' },
        { text: 'Order Date', value: 'OrderDate' },
        { text: 'Ship Country', value: 'ShipCountry' },
      ],
      currentColumn: '',
    };
  },
  methods: {
    changeAlignment(args) {
      // Reset the allowEditing property of the previously selected column
      if (this.currentColumn) {
        this.currentColumn.allowEditing = true;
      }
      // Update the 'allowEditing' property for the selected column
      this.currentColumn = this.$refs.grid.getColumnByField(args.value);
      this.currentColumn.allowEditing = false;
    }
  },
  provide: {
    grid: [Edit, Toolbar]
  }

});