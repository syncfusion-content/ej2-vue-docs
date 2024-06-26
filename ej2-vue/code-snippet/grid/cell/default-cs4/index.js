
import Vue from "vue";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
Vue.use(GridPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-grid ref='grid' :dataSource="data" height='315' :dataBound="dataBound">
          <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
            <e-column field='ShipCity' headerText='Ship City' width=120></e-column>
            <e-column field='ShipName' headerText='Ship Name' textAlign='Right' width=80></e-column>
          </e-columns>
        </ejs-grid>
    </div>
`,

  data() {
    return {
      data: data
    };
  },
  methods: {
    dataBound: function() {
      let header=this.$refs.grid.getHeaderContent().querySelector('.e-headercell');
      header.style.backgroundColor = 'red';
      header.style.color = 'white';
      let cell = this.$refs.grid.getCellFromIndex(1, 2);
      cell.style.background = '#f9920b';
      cell.style.color = 'white';
    }
  }

});