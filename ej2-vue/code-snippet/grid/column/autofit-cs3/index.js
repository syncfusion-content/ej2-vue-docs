import Vue from "vue";
import { GridPlugin, Resize } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
      <ejs-grid ref='grid' :dataSource="data" :dataBound='dataBound' height='315px' :allowResizing="true">
      <e-columns>
        <e-column field='Inventor' headerText='Inventor' textAlign='Right' width=150 clipMode='EllipsisWithTooltip'></e-column>
        <e-column field='NumberofPatentFamilies' headerText='Number of Patent Families' width=120></e-column>
        <e-column field='Country' headerText='Country' width=150></e-column>
        <e-column field='Number of INPADOC patents' headerText='Number of INPADOC patents' width=150></e-column>
        <e-column field='Active' headerText='Active' width=120></e-column>
        <e-column field='Mainfieldsofinvention' headerText='Main fields of invention' width=120></e-column>
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
        this.$refs.grid.autoFitColumns(['Inventor', 'Number of INPADOC patents', 'Mainfieldsofinvention'], 1, 3);
    }
  },
  provide: {
      grid: [Resize]
  }

});