
import Vue from "vue";
import { GridPlugin, Page, Filter } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
       <button id="restore"  @click="clickRestore">Restore to initial state</button>
      <br /><br />
        <ejs-grid ref="grid" :dataSource='data' :enablePersistence='true' :allowPaging='true' :allowFiltering='true' height='230px' id="Grid">
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
    clickRestore: function () {
        this.$refs.grid.ej2Instances.enablePersistence = false;
        window.localStorage.setItem("gridGrid", "");
        this.$refs.grid.ej2Instances.destroy();
        location.reload();
    }
  },
  provide: {
    grid: [Page, Filter]
  }

});