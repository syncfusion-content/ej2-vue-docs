
import Vue from "vue";
import { GridPlugin, Page, Filter, Sort, Edit, Toolbar, Group } from "@syncfusion/ej2-vue-grids";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";

import { data } from './datasource.js';
Vue.use(ButtonPlugin);
Vue.use(GridPlugin);


new Vue({
  el: '#app',
  template: `
    <div id="app">
    <h4 id='message' style='color: red; text-align: center'>{{ message }}</h4>
    <ejs-button style ='margin:3px' v-for="v in versions" :key="v" :id="'restore' + v" @click.native="clickHandler('v.' + v)">
      Version {{ v }}
    </ejs-button>
        <ejs-grid ref="grid" id="OrderDetails" :dataSource='data' :enablePersistence='true' :ej2StatePersistenceVersion='gridversion' :allowPaging='true' :allowFiltering='true' :allowSorting='true' :allowGrouping='true'>
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
    var gridversion = 'v.0';
    var versions = [1, 2, 3];
    var message = '';
    return {
      data: data,
      versions: versions,
      gridversion: gridversion,
      message: message
    };
  },
  methods: {
    clickHandler: function (version) {
      this.$refs.grid.ej2Instances.ej2StatePersistenceVersion = version;
      var persistedGridSettings = (window.localStorage.getItem(`gridOrderDetails` + this.$refs.grid.ej2Instances.ej2StatePersistenceVersion));
      if (persistedGridSettings) {
        this.$refs.grid.setProperties(JSON.parse(persistedGridSettings));
        this.message = `Grid state restored to ` + version;
      } else {
        var gridData = this.$refs.grid.ej2Instances.getPersistData();
        window.localStorage.setItem((`gridOrderDetails` + this.$refs.grid.ej2Instances.ej2StatePersistenceVersion), gridData);
        this.message = `Grid state saved to` + version;
      }
    }
  },
  provide: {
    grid: [Page, Filter, Sort, Edit, Toolbar, Group]
  }

});