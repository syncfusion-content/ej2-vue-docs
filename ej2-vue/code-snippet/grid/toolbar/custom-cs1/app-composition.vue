<template>
  <div id="app">
    <ejs-grid ref='grid' id='Grid' :dataSource='data' :allowGrouping='true' :groupSettings='groupOptions'
      :toolbarTemplate='toolbar'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' type='number' textAlign='Right' width=90></e-column>
        <e-column field='CustomerID' headerText='Customer ID' type='string' width=100></e-column>
        <e-column field='ShipCity' headerText='Ship City' type='string' width=100></e-column>
        <e-column field='ShipName' headerText='Ship Name' type='string' width=120></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide, ref, createApp } from "vue";
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Toolbar, Group } from "@syncfusion/ej2-vue-grids";
import { ToolbarComponent as EjsToolbar } from "@syncfusion/ej2-vue-navigations";
import { data } from './datasource.js';
const grid = ref(null);
const app = createApp();
const groupOptions = { columns: ['CustomerID'] };
const toolbar = function () {
  return {
    template: app.component('custom-toolbar', {
      template: `<ejs-toolbar :clicked='clickHandler'>
                        <e-items>
                          <e-item id="collapse" text="Collapse All" prefixIcon="e-chevron-up icon"></e-item>
                          <e-item id="expand" text="Expand All" prefixIcon="e-chevron-down icon"></e-item>
                        </e-items>
                    </ejs-toolbar>`,
      data: function () {
        return {};
      },
      methods: {
        clickHandler(args) {
          let target = args.originalEvent.target.closest('button'); //find clicked button
          if (target.id === 'collapse') {
            // collapse all expanded grouped row
            grid.value.ej2Instances.groupModule.collapseAll();
          }
          if (target.id === 'expand') {
            // expand all collapsed grouped row
            grid.value.ej2Instances.groupModule.expandAll();
          }
        }
      }
    })
  };
}
provide('grid', [Toolbar, Group]);
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

.e-icons.e-collapse::before {
  content: "\e834";
}
</style>