
import Vue from "vue";
import { GridPlugin, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
import { Query, DataManager } from '@syncfusion/ej2-data';

Vue.use(GridPlugin);
const country=  [
  { countryName: 'United States', countryId: '1' },
  { countryName: 'Australia', countryId: '2' },
  { countryName: 'India', countryId: '3' }
];
new Vue({
	el: '#app',
	template: `
  <div id="app">
    <ejs-grid :dataSource='dataGrid' :editSettings='editSettings' :toolbar='toolbar' height='265px'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' isPrimaryKey='true' width=100 :validationRules='orderIDRules'></e-column>
        <e-column field='CustomerID'  headerText='Customer ID' width=120 :validationRules='customerIDRules'></e-column>
        <e-column field='Freight'  headerText='Freight' textAlign= 'Right' editType= 'numericedit' :validationRules='freightRules'  width=120></e-column>
        <e-column field='ShipCountry' headerText='Ship Country'  editType= 'dropdownedit' :edit='dropDownParams' :validationRules='countryRules'   width=150></e-column>
      </e-columns>
    </ejs-grid>
  </div>
`,

data() {
  return {
    dataGrid: data,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
    toolbar: ["Add", "Edit", "Delete", "Update", "Cancel"],
    orderIDRules: { required: true, number: true },
    freightRules: { required: true, min: 1, max: 1000 },
    customerIDRules: { required: true },
    countryRules: { required: true },
    dropDownParams :{
       params: {
          dataSource: new DataManager(country),
          fields: { text: 'countryName', value: 'countryName' },
          query: new Query(),
          actionComplete: () => false
      }
    }
  };
},

provide() {
  return {
    grid: [Edit, Toolbar]
  };
}

});