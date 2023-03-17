

<template>
    <div id="app">
        <ejs-grid ref='grid' id='Grid' :dataSource='data' :allowGrouping='true' :groupSettings='groupOptions' :toolbarTemplate='toolbar'>
                <e-columns>
                    <e-column field='OrderID' headerText='Order ID' type='number' textAlign='Right' isPrimaryKey='true' width=120></e-column>
                    <e-column field='CustomerID' headerText='Customer ID' type='string' width=150></e-column>
                    <e-column field='ShipCity' headerText='Ship City' type='string' width=150></e-column>
                    <e-column field='ShipName' headerText='Ship Name' type='string' width=150></e-column>
                </e-columns>
        </ejs-grid>
    </div>
</template>
<script>
import Vue from "vue";
import { GridPlugin, Toolbar, Group } from "@syncfusion/ej2-vue-grids";
import { ToolbarPlugin } from "@syncfusion/ej2-vue-navigations";
import { cdata } from './datasource.js';

Vue.use(GridPlugin);
Vue.use(ToolbarPlugin);

export default {
  data() {
    return {
      data: cdata,
      groupOptions: { columns: ['CustomerID'] },
      toolbar: function () {
        return {
          template: Vue.component('custom-toolbar', {
            template: `<ejs-toolbar :clicked='clickHandler'>
                        <e-items>
                            <e-item id='collapse' prefixIcon='e-collapse'></e-item>
                        </e-items>
                    </ejs-toolbar>`,
            data: function () {
              return {};
            },
            methods: {
              clickHandler(args) {
                let target = args.originalEvent.target.closest('button'); //find clicked button
                var gridInstance = document.getElementById("Grid").ej2_instances[0];
                if (target.id === 'collapse') {
                  //collapse all expanded grouped row
                  gridInstance.groupModule.collapseAll();
                }
              }
            }
          })
        };
      }
    };
  },
  provide: {
    grid: [Toolbar, Group]
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
.e-icons.e-collapse::before {
  content: "\e834";
}
</style>



