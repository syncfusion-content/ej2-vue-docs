
import Vue from "vue";
import { GridPlugin, Page } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);


new Vue({
  el: '#app',
  template: `
    <div id="app">
        <ejs-grid :dataSource='data' height='182' :allowPaging= true :pageSettings='pageSettings'>
        <e-columns>
          <e-column field='RollNo' headerText='Roll No'></e-column>
          <e-column field='Mark1' headerText='Mark 1'></e-column>
          <e-column field='Mark2' headerText='Mark 2' format='N'></e-column>
          <e-column field='Average' headerText='Average' format='N2'></e-column>
          <e-column field='Percentage' headerText='Percentage of Marks' format='P'></e-column>
          <e-column field='Fees' headerText='Fees' textAlign='Right' format='C'></e-column>
      </e-columns>
        </ejs-grid>
    </div>
`,

  data() {
    return {
      data: data,
      pageSettings: { pageSize: 5 }
    };
  },
  methods: {
  },
  provide: {
    grid: [Page]
  }

});