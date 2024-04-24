
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
        <ejs-button id='reordersingle' cssClass='e-info' @click.native='reorderSingleColumnByFieldNames'>Reorder single column</ejs-button>
        <ejs-button id='reordermultipe' cssClass='e-info' @click.native='reorderMultipleColumnByFieldNames'>Reorder mutiple columns</ejs-button>
        <ejs-grid ref='grid' :dataSource="data" :allowReordering='true' height='315px'>
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
      data: data
    };
  },
  provide: {
      grid: [Reorder]
  },
  methods: {
    reorderSingleColumnByFieldNames: function () {
      this.$refs.grid.reorderColumns("ShipCity", "OrderID");
    },
    reorderMultipleColumnByFieldNames: function () {
      this.$refs.grid.reorderColumns(['ShipCity', 'ShipRegion', 'ShipName'], 'OrderID');
    }
  }

});