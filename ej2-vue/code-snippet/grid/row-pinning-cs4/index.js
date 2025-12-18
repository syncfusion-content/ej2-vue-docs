
import Vue from "vue";
import { GridPlugin, Page, Sort, Filter } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

Vue.use(GridPlugin);


new Vue({
  el: '#app',
  template: `
  <div id="app">
    <ejs-grid :dataSource='data' :isRowPinned="isRowPinned" :allowPaging="true" :pageSettings="pageSettings" :filterSettings="filterSettings" height='200px'>
      <e-columns>
        <e-column field="TaskID" headerText="Task ID" :isPrimaryKey="true" textAlign="Right" width="100"></e-column>
        <e-column field="Title" headerText="Title" width="120"></e-column>
        <e-column field="Priority" headerText="Priority" textAlign="Right" width="120" format="N0"></e-column>
        <e-column field="Status" headerText="Status" width="150"></e-column>
        <e-column field="Assignee" headerText="Assignee" width="150"></e-column>
      </e-columns>
    </ejs-grid>
</div>
`,

  data() {
    return {
      data: data,
      filterSettings: { type: 'Menu' },
      pageSettings: { pageSize: 15 }
    };
  },
  methods: {
    isRowPinned:function(data){
      if (data && data.Status === 'Open' && data.Priority === 'Critical') {
          return true;
      }
      return false;
    }
  },
  provide: {
    grid: [Page, Sort, Filter]
  }

});