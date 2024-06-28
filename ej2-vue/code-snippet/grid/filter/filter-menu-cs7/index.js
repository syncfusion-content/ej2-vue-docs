
import Vue from "vue";
import { GridPlugin, Filter } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js'
Vue.use(GridPlugin);


new Vue({
  el: '#app',
  template: `
    <div id="app">
      <ejs-grid :dataSource='data' :allowFiltering='true' :filterSettings='filterOptions' height='273px'>
        <e-columns>
          <e-column field='OrderID' headerText='Order ID'  textAlign='Right' width=100></e-column>
          <e-column field='CustomerID' headerText='Customer ID' :filter='filterParams' width=100></e-column>
          <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
          <e-column field='Freight' headerText='Freight' format='C2' width=80></e-column>                
        </e-columns>
      </ejs-grid>
    </div>
`,

  data() {
    return {
      data: data,
      filterOptions: {
        type: 'Menu'
      },
      filterParams:{
        params: { autofill: false }
      }
    };
  },
  provide: {
    grid: [Filter]
  }

});