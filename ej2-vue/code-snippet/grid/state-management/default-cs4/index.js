
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
    <ejs-button style='margin:3px' cssClass="e-success" @click.native="save()">Save</ejs-button>
    <ejs-button style='margin:3px' cssClass="e-danger" @click.native="restore()">Restore</ejs-button>
    <ejs-grid ref="grid" id="OrderDetails" :dataSource='data' :enablePersistence='true' :allowPaging='true'
        :allowFiltering='true' allowGrouping='true' allowSorting="true" :groupSettings="groupSettings">
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
                <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
                <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
                <e-column field='ShipCountry' headerText='Ship Country' width=150></e-column>
            </e-columns>
        </ejs-grid>
    </div>
`,

  data() {
    var groupSettings = { showGroupedColumns: false, columns: ['ShipCountry'] }
    var message = '';
    return {
      data: data,
      groupSettings: groupSettings,
      message: message
    };
  },
  methods: {
    // Save grid state to local storage
    save: function () {
      var persistData = this.$refs.grid.ej2Instances.getPersistData(); // Grid persistData
      window.localStorage.setItem("gridOrderDetails", persistData);
      this.message = "Grid state saved.";
    },

    // Restore grid state from local storage
    restore: function () {
      let value = window.localStorage.getItem("gridOrderDetails"); //"gridOrderDetails" is component name + component id.
      this.state = JSON.parse(value);
      if (this.state) {
        this.$refs.grid.ej2Instances.setProperties(this.state);
        this.message = "Previous grid state restored.";
      } else {
        this.message = "No saved state found.";
      }
    }
  },
  provide: {
    grid: [Page, Filter, Sort, Edit, Toolbar, Group]
  }

});