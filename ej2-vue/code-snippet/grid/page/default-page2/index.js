import Vue from "vue";
import { GridPlugin, Page } from "@syncfusion/ej2-vue-grids";
import { data } from "./datasource.js";

Vue.use(GridPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
    <ejs-grid ref="grid" id='pagerAtTop' :dataSource='data' :allowPaging='true' :dataBound='dataBound'
      height='268px' :pageSettings='pageSettings'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=120></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=150></e-column>
        <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
        <e-column field='ShipName' headerText='Ship Name' width=150></e-column>
      </e-columns>
    </ejs-grid>
  </div>`,

  data() {
    return {
      data: data,
      pageSettings: { pageSizes: true, pageSize: 12 },
      initialGridLoad: true,
    };
  },
  methods: {
    dataBound() {
      if (this.initialGridLoad) {
        this.initialGridLoad = false;
        const pager = document.getElementsByClassName("e-gridpager");
        let topElement;
        if (
          this.$refs.grid.$el.ej2_instances[0].allowGrouping ||
          this.$refs.grid.$el.ej2_instances[0].toolbar
        ) {
          topElement = this.$refs.grid.$el.ej2_instances[0].allowGrouping
            ? document.getElementsByClassName("e-groupdroparea")
            : document.getElementsByClassName("e-toolbar");
        } else {
          topElement = document.getElementsByClassName("e-gridheader");
        }
        this.$refs.grid.$el.insertBefore(pager[0], topElement[0]);
      }
    },
  },
  provide: {
    grid: [Page],
  }

});