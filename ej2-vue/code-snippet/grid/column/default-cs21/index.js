
import Vue from "vue";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-grid :dataSource="data"  height='315px'>
          <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
            <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
            <e-column field='OrderDate' headerText='Order Date' textAlign='Right' :format='formatOptions' type='date' width=120></e-column>
            <e-column field='OrderDate' headerText='Ship Date' textAlign='Right' :format='shipFormat' type='date' width=180></e-column>
          </e-columns>
        </ejs-grid>
    </div>
`,

  data() {
    return {
      data: data,
      formatOptions: {type:'date', format:'dd/MM/yyyy'},
      shipFormat: { type: 'dateTime', format: 'dd/MM/yyyy hh:mm a' }
    };
  }

});