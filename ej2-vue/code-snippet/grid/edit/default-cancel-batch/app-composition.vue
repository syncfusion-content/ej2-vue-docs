<template>
  <div id="app">
    <ejs-button  id="sample" @click.native="btnClick">Grid is Addable</ejs-button >
    <div class="control-section"  style="padding-top:20px">
      <ejs-grid  :dataSource='data' :editSettings='editSettings' :toolbar='toolbar' :cellEdit="cellEdit" :beforeBatchAdd="beforeBatchAdd" :beforeBatchDelete="beforeBatchDelete" height='240px'>
        <e-columns>
          <e-column field='OrderID' headerText='Order ID' textAlign='Right' :validationRules='orderIDRules' 
          isPrimaryKey='true' width=100></e-column>
          <e-column field='Role' headerText='Role' :validationRules='roleRules' width=120></e-column>
          <e-column field='Freight' headerText='Freight' textAlign= 'Right'
          editType= 'numericedit' width=120 :validationRules='freightRules' format= 'C2'></e-column>
          <e-column field='ShipCountry' headerText='Ship Country' editType= 'dropdownedit' width=150></e-column>
        </e-columns>
      </ejs-grid>
    </div>
  </div>
</template>
<script>
import {GridComponent,ColumnsDirective,ColumnDirective,Edit,Toolbar,Page } from "@syncfusion/ej2-vue-grids";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { employeeData } from "./datasource.js";
export default {
  name: "App",
  components: {
    "ejs-grid": GridComponent,
    "e-columns": ColumnsDirective,
    "e-column": ColumnDirective,
    "ejs-button": ButtonComponent
  },
  data() {
    return {
      data: employeeData ,
      orderIDRules : { required: true },
      customerIDRules : { required: true, minLength: 5 },
      freightIDRules  : { required: true, min: 1, max: 1000 },
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch' },
      toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
      isAddable: true
    };
  },
  methods: {
  cellEdit(args) {
    if (args.rowData['Role'] == 'Admin') {
      args.cancel = true;
    }
  },
  beforeBatchAdd (args) {
    if (!this.isAddable) {
      args.cancel = true;
    }
  },
beforeBatchDelete (args) {
    if (args.rowData['Role'] == 'Admin') {
      args.cancel = true;
    }
  },
  btnClick: function (args) {
      args.target.innerText === "Grid is Addable" ? (args.target.innerText = "Grid is Not Addable") : (args.target.innerText = "Grid is Addable");
      this.isAddable = !this.isAddable;
    },
  },
  provide: {
    grid: [Page, Edit, Toolbar]
  }
}
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-calendars/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";
</style>
