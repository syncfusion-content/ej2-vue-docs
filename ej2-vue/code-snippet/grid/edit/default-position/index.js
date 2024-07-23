
import Vue from "vue";
import { GridPlugin, Page, Toolbar, Edit,getObject } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);


new Vue({
	el: '#app',
	template: `
  <div id="app">
    <ejs-grid ref="grid" :dataSource='dataGrid' :actionComplete='actionComplete' allowPaging='true' :pageSettings='pageSettings' :editSettings='editSettings' :toolbar='toolbar'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' width='120' textAlign='Right' :validationRules='orderIDRules' isPrimaryKey='true'></e-column>
        <e-column field='CustomerID' headerText='Customer Name' width='120' :validationRules='customerIDRules'></e-column>
        <e-column field='Freight' headerText='Freight' width='120' format='C2' textAlign='Right' editType='numericedit' :validationRules='freightRules'></e-column>
        <e-column field='ShipCountry' headerText='Ship Country' width='150' editType='dropdownedit' :validationRules='countryRules' :edit='editparams'></e-column>
      </e-columns>
    </ejs-grid>
  </div>
`,

data() {
  return {
    dataGrid: data,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: "Dialog" },
    toolbar: ["Add", "Edit", "Delete", "Update", "Cancel"],
    orderIDRules: { required: true, number: true },
    freightRules: { required: true, min: 1, max: 1000 },
    customerIDRules: { required: true },
    countryRules: { required: true },
    editparams: { params: { popupHeight: '200px' } },
    pageSettings: { pageCount: 5 }
  };
},

methods: {
  actionComplete(args) {
    if (args.requestType == "beginEdit" || args.requestType == "add") { 
       let editModule = this.$refs.grid.ej2Instances.editModule;
        let valueError = getObject('valErrorPlacement', editModule).bind(editModule);
          this.$refs.grid.ej2Instances.editModule.formObj.customPlacement = (input, error) => { 
            valueError(input, error);
            var element = document.getElementById(input.name + '_Error');
            var tooltipWidth = element.offsetWidth;
            var  inputElement = null;
            if (document.querySelector('#' + this.$refs.grid.ej2Instances.element.id + input.name)) {
              inputElement = document.querySelector('#' +this.$refs.grid.ej2Instances.element.id + input.name);
            } else if (document.querySelector('#' + input.name)) {
              inputElement = document.querySelector('#' + input.name);
            }
            var inputPosition = inputElement.getBoundingClientRect();
            var leftPosition =  (inputPosition.left - tooltipWidth - 16).toString() + 'px';
            var topPosition = (inputPosition.top).toString() + 'px';
            element.style.left = leftPosition; 
            element.style.top =  topPosition;
            element.style.position = 'fixed';
          } 
       
  
    }
  }
},

provide() {
  return {
    grid: [Page, Edit, Toolbar],
  };
}

});