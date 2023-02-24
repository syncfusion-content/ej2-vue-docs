

<template>
    <div id="app">
        <ejs-grid :dataSource='data' height=315 :toolbar='toolbar' :editSettings='editSettings'  :enableHover='false' :allowSelection='false' :actionComplete = 'actionComplete'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' textAlign='Right' isPrimaryKey='true' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' width=120 textAlign='Right' :validationRules='valRules'></e-column>
                    <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
                    <e-column field='ShipAddress' headerText='Ship Address' width=170></e-column>
                    <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                    <e-column field='ShipCountry' headerText='Ship Country' width=150 isFrozen='true'></e-column>
                    <e-column field='Freight' headerText='Freight' width=120 :validationRules='valRules'></e-column>
                </e-columns>
               </ejs-grid>
    </div>
</template>
<script>
import Vue from "vue";
import { GridPlugin, Freeze, Selection, Edit, Toolbar } from "@syncfusion/ej2-vue-grids";
import { data } from "./datasource.js";

Vue.use(GridPlugin);

export default {
  data() {
    return {
      data: data,
      toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' },
      valRules: { required: true }
    };
  },
  methods: {
    actionComplete(args) {
        if (args.requestType === 'beginEdit' || args.requestType === 'add') {
            // Add Validation Rules
            args.movableForm.ej2_instances[0].addRules('Freight', { max: 200 });
            args.movableForm.ej2_instances[0].addRules('EmployeeID', { max: 20 });
        }
    }
  },
  provide: {
    grid: [Freeze, Selection, Edit, Toolbar]
  }
}
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>


