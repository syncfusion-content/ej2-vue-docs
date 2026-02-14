<template>
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
</template>
<script>
import {GridComponent,ColumnsDirective,ColumnDirective,Edit,Toolbar } from "@syncfusion/ej2-vue-grids";
import { productData } from "./datasource.js";
export default {
  name: "App",
  components: {
    "ejs-grid": GridComponent,
    "e-columns": ColumnsDirective,
    "e-column": ColumnDirective,
  },
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
    priceParams :{ params: { change: this.calculateTotalCost } },
    stockParams : { params: { change: this.calculateTotalCost } }
    };
    
  },
  methods: {
    calculateTotalCost() {
      const formEle = this.$refs.grid.$el.ej2_instances['0'].element.querySelector('form')['ej2_instances'][0];
      formEle.getInputElement('TotalCost').value = formEle.getInputElement('UnitPrice').value * formEle.getInputElement('UnitsInStock').value;
    }
  },
    provide: {
    grid: [Edit, Toolbar]
  }
}
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-calendars/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material3.css";
</style>
