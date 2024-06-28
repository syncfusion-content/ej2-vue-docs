
import Vue from "vue";
import { GridPlugin, Page, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
import { isNullOrUndefined } from '@syncfusion/ej2-base';

Vue.use(GridPlugin);


new Vue({
	el: '#app',
	template: `
  <div id="app">
    <ejs-grid ref="grid" id="grid" :dataSource='data' :allowPaging='true' :enableHover='false' :created='created' :load='load' :editSettings='editSettings' :toolbar='toolbar' height='273px'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' :isPrimaryKey='true' width=100 :validationRules='orderIDRules'></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=120 :validationRules='customerIDRules'></e-column>
        <e-column field='Freight' headerText='Freight' textAlign= 'Right' editType= 'numericedit' width=120 :validationRules='freightIDRules' format= 'C2'></e-column>
        <e-column field='OrderDate' headerText='Order Date' type="date" textAlign= 'Right' :validationRules='orderDateRules' editType= 'datepickeredit' width=120 format= 'yMd'></e-column>
        <e-column field='ShipCountry' headerText='Ship Country' width=150 :validationRules='shipCountryRules'></e-column>
      </e-columns>
    </ejs-grid>
  </div>
`,

  data() {
    return {
      data: data,
      orderIDRules : { required: true },
      orderDateRules : { required: true },
      shipCountryRules : { required: true },
      customerIDRules : { required: true, minLength: 5 },
      freightIDRules  : { required: true, min: 1, max: 1000 },
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch' },
      toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel']
    };
  },
  methods: {
      created: function() {
           let gridInstance = document.getElementById("grid").ej2_instances[0];
           gridInstance.getContentTable().addEventListener('click', (args) => {
              if (args.target.classList.contains('e-rowcell')) {
                   gridInstance.editModule.editCell(parseInt(args.target.getAttribute('index')),
                   gridInstance.getColumnByIndex(parseInt(args.target.getAttribute('data-colindex'))).field);
              }
          });
      },
      editACell: function(args) {
          let gridInstance = document.getElementById("grid").ej2_instances[0];
          gridInstance.editModule.editCell(
          parseInt(args.getAttribute('index')),
          gridInstance.getColumnByIndex(parseInt(args.getAttribute('data-colindex'))).field);
      },
      load: function() {
          let gridInstance = document.getElementById("grid").ej2_instances[0];
          gridInstance.element.addEventListener('keydown', (e) => {
          var closesttd = e.target.closest('td');
          if (e.keyCode === 39 && !isNullOrUndefined(closesttd.nextSibling)) {
              this.editACell(closesttd.nextSibling);
          }
          if (e.keyCode === 37 && !isNullOrUndefined(closesttd.previousSibling) &&
            !gridInstance.getColumnByIndex(
                parseInt(closesttd.previousSibling.getAttribute('data-colindex'))).isPrimaryKey)
          {
               this.editACell(closesttd.previousSibling);
          }
          if (e.keyCode === 40 && !isNullOrUndefined(closesttd.closest('tr').nextSibling)) {
            this.editACell(
                closesttd.closest('tr').nextSibling.querySelectorAll('td')[
                parseInt(closesttd.getAttribute('data-colindex'))]);
          }
          if ( e.keyCode === 38 && !isNullOrUndefined(closesttd.closest('tr').previousSibling)) {
            this.editACell(
                closesttd.closest('tr').previousSibling.querySelectorAll('td')[
                 parseInt(closesttd.getAttribute('data-colindex'))]);
          }
          });
      }
  },
  provide: {
    grid: [Page, Edit, Toolbar]
  }

});