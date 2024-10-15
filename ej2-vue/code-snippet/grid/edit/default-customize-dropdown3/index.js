
import Vue from "vue";
import { GridPlugin, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
    <ejs-grid ref="grid" :dataSource='data' :editSettings='editSettings' :toolbar='toolbar' height='265px' :load='load' :actionComplete='onActionComplete'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' isPrimaryKey='true' width=100 :validationRules='orderIDRules'></e-column>
        <e-column field='CustomerID'  headerText='Customer ID' width=120 :validationRules='customerIDRules'></e-column>
        <e-column field='Freight'  headerText='Freight' textAlign= 'Right' editType= 'numericedit' :validationRules='freightRules'  width=120></e-column>
        <e-column field='ShipCountry' headerText='Ship Country'  editType= 'dropdownedit'  :validationRules='countryRules'   width=150></e-column>
      </e-columns>
    </ejs-grid>
  </div>
`,

data() {
  return {
    data: data,
    isDropDown : false,
    editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
    toolbar: ["Add", "Edit", "Delete", "Update", "Cancel"],
    orderIDRules: { required: true, number: true },
    freightRules: { required: true, min: 1, max: 1000 },
    customerIDRules: { required: true },
    countryRules: { required: true }
  };
},
methods:{

 load() {
   this.$refs.grid.ej2Instances.element.addEventListener('mouseup', (e) => {
    if (e.target.classList.contains('e-rowcell')) {
      if ( this.$refs.grid.ej2Instances.isEdit) {
        this.$refs.grid.ej2Instances.endEdit();
      }
      let rowInformation =  this.$refs.grid.ej2Instances.getRowInfo(e.target);
      if (rowInformation && rowInformation.column && rowInformation.column.field  === 'ShipCountry') {
        this.isDropDown = true;
        this.$refs.grid.ej2Instances.selectRow(rowInformation.rowIndex);
        this.$refs.grid.ej2Instances.startEdit();
      }
    }
  });
},
onActionComplete(args) {
  if (args.requestType === 'beginEdit' && this.isDropDown) {
    this.isDropDown = false;
    let dropDownObj = args.form.querySelector('.e-dropdownlist')['ej2_instances'][0] ;
    dropDownObj.element.focus();
    dropDownObj.showPopup();
  }
}

},
provide() {
  return {
    grid: [Edit, Toolbar]
  };
}

});