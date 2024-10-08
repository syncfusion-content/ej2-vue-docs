
import Vue from "vue";
import { GridPlugin, Page } from "@syncfusion/ej2-vue-grids";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons"
import { data } from './datasource.js';

Vue.use(GridPlugin);
Vue.use(ButtonPlugin);

new Vue({
  el: '#app',
  template: `
    <div id="app">
        <ejs-button id="add" style='margin:3px' cssClass="e-success" @click.native="addColumn">Add Columns</ejs-button>
        <ejs-button id="remove" style='margin:3px' cssClass="e-danger" @click.native="removeColumns">Remove Columns</ejs-button>
        <ejs-grid ref="grid" :dataSource='data' :enablePersistence='true' :allowPaging='true' id="Grid" :dataBound='dataBound'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
            </e-columns>
        </ejs-grid>
    </div>
`,

  data() {
    return {
      data: data
    };
  },
  methods: {
    dataBound: function () {
      let cloned = this.$refs.grid.ej2Instances.addOnPersist;
      this.$refs.grid.ej2Instances.addOnPersist = function (key) {
        key = key.filter((item) => item !== "columns");
        return cloned.call(this, key);
      };
    },
    addColumn: function () {
      let obj = { field: "Freight", headerText: 'Freight', width: 120 }
      this.$refs.grid.ej2Instances.columns.push(obj); //you can add the columns by using the Grid columns method
      this.$refs.grid.ej2Instances.refreshColumns();
    },
    removeColumns: function () {
      this.$refs.grid.ej2Instances.columns.pop();
      this.$refs.grid.ej2Instances.refreshColumns();
    }
  },
  provide: {
    grid: [Page]
  }

});