
import Vue from "vue";
import { GridPlugin, Reorder } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-grid :dataSource="data" :allowReordering='true' :allowSelection='false' height='315px'>
          <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
            <e-column field='ShipCity' width=90 :lockColumn='true' :customAttributes="customAttributes"></e-column>
            <e-column field='ShipName' width=120></e-column>
            <e-column field='ShipCountry' width=120></e-column>
            <e-column field='ShipRegion' width=120></e-column>
          </e-columns>
        </ejs-grid>
    </div>
`,

  data() {
    return {
      data: data,
      customAttributes : {class: 'customcss'}
    };
  },
  provide: {
      grid: [Reorder]
  }

});