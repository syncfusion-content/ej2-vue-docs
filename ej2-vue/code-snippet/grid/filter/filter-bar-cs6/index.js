
import Vue from "vue";
import { GridPlugin, Filter, } from "@syncfusion/ej2-vue-grids";
import { data } from "./datasource.js";
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';

Vue.use(GridPlugin);
Vue.use(ButtonPlugin);

new Vue({
  el: '#app',
  template: `
    <div id="app">
      <ejs-grid ref='grid' :dataSource='data' :allowFiltering='true' :filterSettings='filterOptions' height='273px' :load='load'>
        <e-columns>
          <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
          <e-column field='CustomerID' headerText='Customer ID' :allowFiltering='false' width=120></e-column>
          <e-column headerText='Action' width='150' :template="'columnTemplate'"></e-column>
        </e-columns>
        <template v-slot:columnTemplate="{data}">
          <div>
            <ejs-button>Custom Action</ejs-button>
          </div>
        </template>
      </ejs-grid>
    </div>
`,

  data: () => {
    return {
      data: data,
      filterOptions: {
        type: 'FilterBar'
      }
    };
  },
  methods: {
    load() {
      this.$refs.grid.$el.ej2_instances[0].columns[2].filterTemplate='<span></span>';
    },
  },
  provide: {
    grid: [Filter]
  }
});