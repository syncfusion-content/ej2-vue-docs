
import Vue from "vue";
import { GridPlugin, Toolbar, Group } from "@syncfusion/ej2-vue-grids";
import { ToolbarPlugin } from "@syncfusion/ej2-vue-navigations";
import { data } from './datasource.js';

Vue.use(GridPlugin);
Vue.use(ToolbarPlugin);


new Vue({
  el: '#app',
  template: `
    <div id="app">
      <ejs-grid ref='grid' id="Grid" :dataSource='data' :allowGrouping='true' :groupSettings='groupOptions' :toolbarTemplate='toolbar'>
        <e-columns>
          <e-column field='OrderID' headerText='Order ID' type='number' textAlign='Right' isPrimaryKey='true' width=120></e-column>
          <e-column field='CustomerID' headerText='Customer ID' type='string' width=150></e-column>
          <e-column field='ShipCity' headerText='Ship City' type='string' width=150></e-column>
          <e-column field='ShipName' headerText='Ship Name' type='string' width=150></e-column>
        </e-columns>
      </ejs-grid>
    </div>`,

  data() {
    return {
      data: data,
      groupOptions: { columns: ['CustomerID'] },
      toolbar: function () {
        return {
          template: Vue.component('custom-toolbar', {
            template: `<ejs-toolbar :clicked="clickHandler">
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
                var grid = document.getElementById("Grid").ej2_instances[0];
                if (target.id === 'collapse') {
                  // collapse all expanded grouped row
                  grid.groupModule.collapseAll();
                }
                if (target.id === 'expand') {
                  // expand all collapsed grouped row
                  grid.groupModule.expandAll();
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

});