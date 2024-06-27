
import Vue from "vue";
import { GridPlugin, Page, Toolbar } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
    <ejs-grid ref='grid' :dataSource='data' :allowPaging="true" :toolbar='toolbarOptions' :beforePrint='beforePrint' height='272px'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
        <e-column field='CustomerID' headerText='Customer ID' :visible='false' width=150></e-column>
        <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
        <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
      </e-columns>
    </ejs-grid>
    </div>
`,

data() {
  return {
    data: data,
    toolbarOptions: ['Print']
  };
},
methods: {
  beforePrint: function() {
    var styleElement = document.createElement('style');
    styleElement.innerHTML = `
    .e-grid .e-headercell {
        background: #24a0ed !important;
    }
    .e-grid .e-row .e-rowcell {
        background: #cbecff !important;
    }
    .e-grid .e-altrow .e-rowcell{
        background: #e7d7f7 !important;
    }
    `;
    document.querySelector('head').appendChild(styleElement);
  }
},
provide: {
    grid: [Toolbar, Page]
}

});