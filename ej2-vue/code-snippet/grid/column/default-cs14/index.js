
import Vue from "vue";
import { GridPlugin, Reorder } from "@syncfusion/ej2-vue-grids";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
import { data } from './datasource.js';

Vue.use(GridPlugin);
Vue.use(ButtonPlugin);


new Vue({
  el: '#app',
  template: `
    <div id="app">
     <p id='message' style="color:red;textAlign:center">{{ message }}</p>
       <ejs-grid ref='grid' :dataSource="data" :allowReordering='true' height='315px' :enableHover='false'
         :columnDragStart="columnDragStart" :columnDrag="columnDrag" :columnDrop="columnDrop">
          <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
            <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
            <e-column field='ShipRegion' headerText='Ship Region' width=80></e-column>
            <e-column field='ShipName' headerText='Ship Name' width=80></e-column>
          </e-columns>
        </ejs-grid>
    </div>
`,

  data() {
    return {
      data: data,
      message:''
    };
  },
  provide: {
    grid: [Reorder]
  },
  methods: {
    columnDrop: function (args) {
      this.message = `columnDrop event triggered`;
      if (args.column.allowReordering == true) {
        this.$refs.grid.getColumnByField(args.column.field).customAttributes = {
          class: 'customcss',
        };
      }
    },
    columnDragStart: function (args) {
      this.message = `columnDragStart event triggered`;
      if (args.column.field == 'OrderID') {
        this.$refs.grid.getColumnByField(args.column.field).allowReordering = false;
      }
    },
    columnDrag: function (args) {
      var index = args.target.getAttribute('data-colIndex');
      if (index) {
        this.message = `columnDrag event is triggered. ` + args.column.headerText + ` column is dragged to index ` + index;
      }
    },
  }

});