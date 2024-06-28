import Vue from "vue";
import { GridPlugin, Page, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { productData } from './datasource.js'

Vue.use(GridPlugin);
;
new Vue({
	el: '#app',
	template: `
  <div id="app">
    <ejs-grid ref="grid"  :dataSource="data" :editSettings="editSettings" :toolbar="toolbar" >
      <e-columns>
        <e-column field="ProductID" headerText="Product ID" textAlign="Right" isPrimaryKey="true" :validationRules='orderIDRules' width="100"></e-column>
            <e-column field="ProductName" headerText="Product Name" width="120" :validationRules=' productNameRules'></e-column>
            <e-column field="UnitPrice" headerText="Unit Price" editType="numericedit" :edit="priceParams" width="150" :validationRules='unitIDRules' format="C2" 
            textAlign="Right"></e-column>
            <e-column field="UnitsInStock" headerText="Units In Stock" editType="numericedit" :edit="stockParams" :validationRules='stockIDRules'  width="150" 
            textAlign="Right"></e-column>
            <e-column field="TotalCost" headerText="Total Cost" width="150" :allowEditing='false' format="C2" textAlign="Right"></e-column>
          </e-columns>
    </ejs-grid>
  </div>
`,

data() {
  return {
    data: productData,
    editSettings : {
    allowEditing: true,
    allowAdding: true,
    allowDeleting: true
  },
  stockIDRules : { required: true },
  orderIDRules : { required: true },
  productNameRules :{ required: true },
  unitIDRules:{ required: true, min: 1 },
  toolbar : ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
  priceParams :{ params: { change: this.calculateTotalCost.bind(this) } },
  stockParams : { params: { change: this.calculateTotalCost.bind(this) } }
  };
},
methods: {
  calculateTotalCost() {
    const formEle = this.$refs.grid.$el.ej2_instances['0'].element.querySelector('form')['ej2_instances'][0];
    formEle.getInputElement('TotalCost').value = formEle.getInputElement('UnitPrice').value * formEle.getInputElement('UnitsInStock').value;
  }
},
  provide: {
  grid: [Page, Edit, Toolbar]
}

});