
import Vue from "vue";
import { GridPlugin, Resize } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);


new Vue({
  el: '#app',
  template: `
    <div id="app">
      <div style="margin-left:180px"><p style="color:red;" id="message">{{ message }}</p></div>
      <ejs-grid ref='grid' :dataSource="data" :allowResizing='true' height='315px' :resizeStart='resizeStart' :resizing='resizing' :resizeStop='resizeStop'>
        <e-columns>
          <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
          <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
          <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
          <e-column field='ShipName' headerText='Ship Name' width=80></e-column>
          <e-column field='ShipCountry' headerText='Ship Country' textAlign='Right' width=100></e-column>
          <e-column field='ShipAddress' headerText='Ship Address' width=120></e-column>
          <e-column field='Freight' headerText='Freight' width=80></e-column>
        </e-columns>
      </ejs-grid>
    </div>
`,

  data() {
    return {
      data: data,
      message: ''
    };
  },
  provide: {
    grid: [Resize]
  },
  methods: {
    resizeStart: function (args) {
      this.message = `resizeStart event triggered`;
      if (args.column.field === 'OrderID') {
        args.cancel = true;
      }
    },
    resizing: function (args) {
      this.message = `resizing event triggered`;
    },
    resizeStop: function (args) {
      this.message = `resizeStop event triggered`;
      const headerCell = this.$refs.grid.getColumnHeaderByField(args.column.field);
      headerCell.classList.add('customcss');
      const columnCells = this.$refs.grid.getContentTable()
        .querySelectorAll(`[data-colindex="${args.column.index}"]`);
      columnCells.forEach(cell => {
        cell.style.backgroundColor = 'rgb(43, 195, 226)';
      });
    }
  }

});