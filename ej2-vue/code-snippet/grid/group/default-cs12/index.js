
import Vue from "vue";
import { GridPlugin, Group, Page, Data } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js'
Vue.use(GridPlugin);

let oldGenerateQuery = Data.prototype.generateQuery;
    Data.prototype.generateQuery = function() {
     const query = oldGenerateQuery.call(this, true);
    // Check if 'pageQuery' is available in the prototype chain
    if (Data.prototype.hasOwnProperty('pageQuery')) {
        const pageQueryFn = Data.prototype['pageQuery'];
        pageQueryFn.call(this, query);
    }
  return query;
};


new Vue({
	el: '#app',
	template: `
  <div id="app">
    <ejs-grid :dataSource='data' :allowGrouping='true' :groupSettings='groupOptions' :allowPaging='true' :pageSettings='pageOptions' height='273px'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
        <e-column field='ShipCountry' headerText='ShipCountry' width=100></e-column>
        <e-column field='CustomerID' headerText='Name' width=100></e-column>
        <e-column field='ShipName' headerText='ShipName' width=120></e-column>
        <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
      </e-columns>
    </ejs-grid>
  </div>
`,

  data() {
    return {
      data: data,
      pageOptions: { pageSize: 5 },
      groupOptions: { columns: ["ShipCountry"] }
    };
  },
  provide: {
    grid: [Group, Page]
  }

});