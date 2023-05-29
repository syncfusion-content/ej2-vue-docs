

<template>
    <div id="app">
        <ejs-grid :dataSource='data' :allowPaging="true" :allowFiltering='true' :allowSelection="true" :selectionSettings='selectionOptions' :editSettings='editSettings' :pageSettings='pageSettings' :toolbar='toolbar' :filterSettings='filterOptions' :rowDataBound='rowDataBound' height='185px'>
            <e-columns>
                <e-column type='checkbox' width='120'></e-column>
                <e-column field='List' headerText='List' width=120></e-column>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' :isPrimaryKey='true' width=120></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                <e-column field='EmployeeID' headerText='Employee ID' width=150></e-column>
                <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script>
import Vue from "vue";
import { GridPlugin, Edit, Page, Toolbar, Filter } from "@syncfusion/ej2-vue-grids";
import { cdata } from './datasource.js';

Vue.use(GridPlugin);

for (let i = 0; i < cdata.length; i++) {
  cdata[i]["List"] = i + 1;
}

export default {
  data() {
    return {
      data: cdata,
      selectionOptions: { persistSelection: true },
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' },
      pageSettings: { pageSize: 5 },
      toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'],
      filterOptions: {
           type: 'CheckBox'
        }
    };
  },
  methods: {
    rowDataBound(args) {
    args.isSelectable = args.data.List % 5 === 0;
    }
  },
  provide: {
    grid: [Edit, Page, Toolbar, Filter]
  }
}
</script>
<style>
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>


