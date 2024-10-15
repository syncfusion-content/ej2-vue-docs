
import Vue from "vue";
import { GridPlugin,  Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { Query } from '@syncfusion/ej2-data';
import { data } from './datasource.js';
import { DropDownList } from "@syncfusion/ej2-dropdowns";

Vue.use(GridPlugin);

let country= [
  { countryName: 'United States', countryId: '1' },
  { countryName: 'Australia', countryId: '2' }
];
let state = [
  { stateName: 'New York', countryId: '1', stateId: '101' },
  { stateName: 'Virginia ', countryId: '1', stateId: '102' },
  { stateName: 'Washington', countryId: '1', stateId: '103' },
  { stateName: 'Queensland', countryId: '2', stateId: '104' },
  { stateName: 'Tasmania ', countryId: '2', stateId: '105' },
  { stateName: 'Victoria', countryId: '2', stateId: '106' }
];
let countryElement, stateElement, countryObject, stateObject;

new Vue({
	el: '#app',
	template: `
  <div id="app">
  <ejs-grid ref='grid' :dataSource='dataGrid' :editSettings='editSettings' :toolbar='toolbar' height='273px'>
      <e-columns>
          <e-column field='OrderID' headerText='Order ID' :isPrimaryKey='true' textAlign='Right' width=100 :validationRules='orderIDRules'></e-column>
          <e-column field='CustomerID' headerText='Customer ID' width=120 :validationRules='customerIDRules'></e-column>
          <e-column field='ShipCountry' headerText='ShipCountry' editType='dropdownedit' :edit='countryParams' width=150 :validationRules='shipCountryRules'></e-column>
         <e-column field='ShipCity' headerText='Ship City' editType='dropdownedit' :edit='stateParams' width=150 :validationRules='shipCityRules'></e-column>
      </e-columns>
  </ejs-grid>
</div>
`,

data: () => {
  return {
    dataGrid: data,
    toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
    orderIDRules: { required: true, number: true },
    customerIDRules: { required: true },
    shipCityRules: { required: true },
    shipCountryRules: { required: true },
    countryParams: {
      create: () => {
        countryElement = document.createElement('input');
        return countryElement;
      },
      read: () => {
        return countryObject.text;
      },
      destroy: () => {
        countryObject.destroy();
      },
      write: () => {
        countryObject = new DropDownList({
          dataSource: country,
          fields: { value: 'countryId', text: 'countryName' },
          change: () => {
            stateObject.enabled = true;
            let tempQuery = new Query().where('countryId', 'equal', countryObject.value);
            stateObject.query = tempQuery;
            stateObject.text = null;
            stateObject.dataBind();
          },
          placeholder: 'Select a country',
          floatLabelType: 'Never'
        });
       countryObject.appendTo(countryElement);
      }
    },
    stateParams: {
      create: () => {
        stateElement = document.createElement('input');
        return stateElement;
      },
      read: () => {
        return stateObject.text;
      },
      destroy: () => {
        stateObject.destroy();
      },
      write: () => {
          stateObject = new DropDownList({
          dataSource: state,
          fields: { value: 'stateId', text: 'stateName' },
          enabled: false,
          placeholder: 'Select a state',
          floatLabelType: 'Never'
        });
        stateObject.appendTo(stateElement);
      }
    },

  };
},
provide: {
  grid: [Edit, Toolbar]
}

});