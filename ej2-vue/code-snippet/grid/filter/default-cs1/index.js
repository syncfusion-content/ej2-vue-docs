
import Vue from "vue";
import { GridPlugin, Filter } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js'
Vue.use(GridPlugin);

;
new Vue({
	el: '#app',
	template: `
  <div id="app">
    <ejs-grid ref="Grid" :dataSource="data" :allowFiltering="true" :filterSettings="filterOptions" height="273px">
      <e-columns>
        <e-column field="OrderID" headerText="ID" width="80" isPrimaryKey="true"></e-column>
        <e-column field="CustomerID" headerText="CustomerID" width="90"></e-column>
        <e-column field="OrderDate" headerText="OrderDate" width="120" format="yMd"><e-column>
        <e-column field="ShipName" headerText="ShipName" width="120"></e-column>
        <e-column field="ShipCity" headerText="ShipCity" width="120"></e-column>
      </e-columns>
    </ejs-grid>
  </div>
`,

  data() {
    return {
      data: data,
     filterOptions: { type: "Excel" },
    };
  },
  methods: {
  },
  provide: {
    grid: [Filter],
  },

});