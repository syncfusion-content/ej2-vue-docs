

<template>
    <div id="app">
        <ejs-grid :dataSource='data' :editSettings='editSettings' height='270px' :toolbar='toolbar'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120 isPrimaryKey="true"></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script>
import Vue from "vue";
import { GridPlugin, Toolbar, Edit } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);

export default {
  data() {
    return {
      data: data,
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
      toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel']
    };
  },
  provide: {
      grid: [Edit, Toolbar]
  }
}
</script>
<style>
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
 .e-toolbar .e-tbar-btn-text, .e-toolbar .e-toolbar-items .e-toolbar-item .e-tbar-btn-text {
      display: none;
}
</style>


