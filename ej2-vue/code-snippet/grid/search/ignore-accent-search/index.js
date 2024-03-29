
import Vue from "vue";
import { GridPlugin, Toolbar, Search } from "@syncfusion/ej2-vue-grids";
import { SwitchPlugin } from "@syncfusion/ej2-vue-buttons";
import { data } from './datasource.js'
Vue.use(GridPlugin);
Vue.use(SwitchPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
      <div style="display: flex;">
        <label style="margin-right:5px">
        Enable or disable ignoreAccent property
        </label>
        <ejs-switch id="switch" :change="change"></ejs-switch>
      </div>
      <ejs-grid ref='grid' style="padding-top: 10px" :dataSource='data' :toolbar='toolbarOptions' height='272px'>
        <e-columns>
          <e-column field='CategoryName' headerText='Category Name' width='100'></e-column>
          <e-column field='ProductName' headerText='Product Name' width='130'></e-column>
          <e-column field='QuantityPerUnit' headerText='Quantity per unit' width='150' textAlign='Right'></e-column>
          <e-column field='UnitsInStock' headerText='Units In Stock' width='80' textAlign='Right'></e-column>
        </e-columns>
      </ejs-grid>
    </div>
`,

  data() {
    return {
      data: data,
      toolbarOptions: ['Search'],
      searchOptions: { ignoreAccent:true }
    };
  },
  methods: {
    change: function(args) {
      let grid = this.$refs.grid.$el.ej2_instances[0];
      if (args.checked) {
        grid.searchSettings.ignoreAccent = true;
    } else {
        grid.searchSettings.ignoreAccent = false;
    }
  }
  },
  provide: {
    grid: [Toolbar, Search]
  }

});