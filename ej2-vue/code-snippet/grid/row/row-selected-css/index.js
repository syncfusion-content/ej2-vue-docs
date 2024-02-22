
import Vue from "vue";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";
import { data } from "./datasource.js";

Vue.use(GridPlugin);


new Vue({
  el: '#app',
  template: `
    <div id="app">
      <ejs-grid :dataSource='data'>
        <e-columns>
          <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
          <e-column field='CustomerID' headerText='Customer ID' width=140></e-column>
          <e-column field='Freight' headerText='Freight' textAlign='Right' format='C' width=120></e-column>
          <e-column field='OrderDate' type="Date" headerText='Order Date' textAlign='Right' format='yMd' width=140></e-column>
        </e-columns>
      </ejs-grid>
    </div>`,

  data() {
    return {
      data: data,
    };
  }

});