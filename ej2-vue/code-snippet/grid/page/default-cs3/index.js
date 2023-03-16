
import Vue from "vue";
import { GridPlugin, Page, Toolbar } from "@syncfusion/ej2-vue-grids";
import { data } from "./datasource.js";

Vue.use(GridPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-grid ref='grid' :dataSource="data" :allowPaging="true" :pageSettings='pageSettings' :toolbar='toolbar' :dataBound='dataBound'>
          <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
            <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
            <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
          </e-columns>
        </ejs-grid>
    </div>
`,

  data() {
    return {
      data: data,
      initialGridLoad: true,
      pageSettings: { pageSizes: true, pageSize: 9 },
      toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel']
    };
  },
  methods: {
    dataBound: function() {
      if (this.initialGridLoad) {
          this.initialGridLoad = false;
          let pager = document.getElementsByClassName('e-gridpager');
          let topElement;
          console.log('allowGroping n toolbar', this.$refs.grid);
        if (this.$refs.grid.allowGrouping || this.$refs.grid.toolbar) {
            topElement = this.$refs.grid.allowGrouping ? document.getElementsByClassName('e-groupdroparea') :
                        document.getElementsByClassName('e-toolbar');
        } else {
            topElement = document.getElementsByClassName('e-gridheader');
        }
        console.log('insetBefore',this.$refs.grid.$el);
        this.$refs.grid.$el.insertBefore(pager[0], topElement[0]);
      }
    }
  },
  provide: {
    grid: [Page, Toolbar]
  }

});