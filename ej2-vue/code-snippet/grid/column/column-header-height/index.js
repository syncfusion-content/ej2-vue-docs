import Vue from "vue";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { data } from "./datasource.js";
Vue.use(GridPlugin);
Vue.use(ButtonPlugin);

new Vue({
  el: '#app',
  template: `
      <div id="app">
        <div style="display: flex">
          <ejs-button id="small" v-on:click.native="changeHeaderHeight">Change height 20px</ejs-button>
          <ejs-button  id="medium"  v-on:click.native="changeHeaderHeight">Default height 42px</ejs-button>
          <ejs-button id="big" v-on:click.native="changeHeaderHeight">Change height 60px</ejs-button>
        </div>
        <div style="padding-top: 20px">
          <ejs-grid ref="grid" :dataSource="data">
            <e-columns>
              <e-column field="OrderID" headerText="Order ID" width="120"></e-column>
              <e-column field="CustomerID" headerText="Customer ID" width="140"></e-column>
              <e-column field="Freight" headerText="Freight" format="C" width="120">
              </e-column>
              <e-column field="OrderDate" type="date" headerText="Order Date" format="yMd" width="140">
              </e-column>
            </e-columns>
          </ejs-grid>
        </div>
      </div>`,

  data() {
    return {
      data: data,
    };
  },
  methods: {
    changeHeaderHeight: function (args) {
      const heightMap = {
        small: '20px',
        medium: '42px',
        big: '60px'
      };
      const headerCells = this.$refs.grid.getHeaderContent().querySelectorAll('.e-headercell');
      headerCells.forEach((headerCell) => {
        headerCell.style.height = (heightMap)[args.target.id];
      });
    }
  }
});