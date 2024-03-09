<template>
    <div id="app">
        <ejs-button v-on:click="btnClick">Grid is Addable</ejs-button>
        <ejs-grid :dataSource='data' :editSettings='editSettings' :toolbar='toolbar' :actionBegin="actionBegin" height='240px'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' :isPrimaryKey='true' width=100></e-column>
                <e-column field='Role' headerText='Role' width=120></e-column>
                <e-column field='Freight' headerText='Freight' textAlign= 'Right' editType= 'numericedit' width=120 format= 'C2'></e-column>
                <e-column field='ShipCountry' headerText='Ship Country' editType= 'dropdownedit' width=150></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script>
import Vue from "vue";
import { GridPlugin, Page, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { employeeData } from './datasource.js';

Vue.use(GridPlugin);
Vue.use(ButtonPlugin);

export default {
  data() {
    return {
      data: employeeData,
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' },
      toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
      isAddable: true
    };
  },
  methods: {
    actionBegin: function (args) {
      if (args.requestType === "beginEdit") {
        if (args.rowData["Role"].toLowerCase() == "employee") {
          args.cancel = true;
        }
      }
      if (args.requestType === "delete") {
        if (args.data[0]["Role"].toLowerCase() === "employee") {
          args.cancel = true;
        }
      }
      if (args.requestType === "add") {
        if (!this.isAddable) {
          args.cancel = true;
        }
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
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";
 @import "../node_modules/@syncfusion/ej2-vue-buttons/styles/tailwind.css";
</style>