
import Vue from "vue";
import { GridPlugin, Page } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);


new Vue({
  el: '#app',
  template: `
    <div id="app">
        <ejs-grid :dataSource='data' height='182' :allowPaging= true :pageSettings='pageSettings'>
          <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
            <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
            <e-column field='OrderDate' :format='formatOptions' headerText='Order Date' textAlign='Right' width=120></e-column>
            <e-column field='OrderDate' :format='shipFormat' headerText='Ship Date' textAlign='Right' width=150></e-column>
          </e-columns>
        </ejs-grid>
    </div>
`,

  data() {
    return {
      data: data,
      pageSettings: { pageSize: 5 },
      formatOptions: { type: 'date', format: 'dd/MM/yyyy' },
      shipFormat: { type: 'dateTime', format: 'dd/MM/yyyy hh:mm a' }
    };
  },
  methods: {
  },
  provide: {
    grid: [Page]
  }

});