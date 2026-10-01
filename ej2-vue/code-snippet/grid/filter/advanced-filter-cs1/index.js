
import Vue from "vue";
import { GridPlugin, Sort, Toolbar, VirtualScroll, AdvancedFilter } from "@syncfusion/ej2-vue-grids";
import { ticketdata } from './datasource.js';

Vue.use(GridPlugin);

new Vue({
  el: '#app',
  template: `
    <div id="app">
      <ejs-grid ref="grid" id="Grid" :dataSource="data" :enableVirtualization="true"
        :allowSorting="true" height="400" :allowAdvancedFiltering="true"
        :toolbar="toolbar" :load="load" :rowHeight="45">
        <e-columns>
          <e-column field="TicketID" headerText="Ticket ID" textAlign="Right" width="120"
            :isPrimaryKey="true"></e-column>
          <e-column field="Title" headerText="Title" width="260"></e-column>
          <e-column field="TypeofRequest" headerText="Type" width="150"></e-column>
          <e-column field="Assignee" headerText="Assignee" width="150"></e-column>
          <e-column field="Priority" headerText="Priority" width="130"></e-column>
          <e-column field="Status" headerText="Status" width="130"></e-column>
          <e-column field="CreatedDate" headerText="Created Date" width="140" textAlign="Right" format='yMd'></e-column>
          <e-column field="DueDate" headerText="Due Date" width="140" textAlign="Right" format='yMd'></e-column>
        </e-columns>
      </ejs-grid>
    </div>
  `,
  data() {
    return {
      data: ticketdata,
      toolbar: ['AdvancedFilter']
    };
  },
  methods: {
    load(args) {
      if (this.$refs.grid.ej2Instances.enableVirtualization) {
        args.enableSeamlessScrolling = true;
      }
    }
  },
  provide: {
    grid: [Sort, Toolbar, VirtualScroll, AdvancedFilter]
  }
});