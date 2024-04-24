
import Vue from "vue";
import { GridPlugin, Page } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);


new Vue({
  el: '#app',
  template: `
    <div id="app">
        <ejs-grid ref='grid' :dataSource="data"  height='315px' :rowDataBound='rowDataBound' allowPaging="true" :pageSettings="pageSettings">
          <e-columns>
            <e-column headerText='S.No' width=90 textAlign='Center'></e-column>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
            <e-column field='Freight' headerText='Freight' textAlign='Right' width=90></e-column>
            <e-column field='ShipCity' headerText='Ship City' width=120></e-column>
          </e-columns>
        </ejs-grid>
    </div>
`,

  data() {
    return {
      data: data,
      pageSettings: { pageSize: 8 }
    };
  },
  methods: {
    rowDataBound: function (args) {
      if (args.row) {
        let grid = this.$refs.grid.$el.ej2_instances[0];
        var rowIndex = parseInt(args.row.getAttribute('aria-rowIndex'));
        var currentPageNumber = grid.pageSettings.currentPage;
        var pageSize = grid.pageSettings.pageSize;
        var startIndex = (currentPageNumber - 1) * pageSize;
        args.row.querySelector('.e-rowcell').innerHTML = (
          startIndex + rowIndex
        ).toString();
      }
    }
  },
  provide: {
    grid: [Page],
  },

});