
import Vue from "vue";
import { TreeGridPlugin, Page } from "@syncfusion/ej2-vue-treegrid";
import { projectData } from "./datasource.js";

Vue.use(TreeGridPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
      <ejs-treegrid :dataSource="data" :treeColumnIndex="1" height='300px' idMapping='TaskID' parentIdMapping='parentID' :rowDataBound="rowDataBound" :selectionSettings="selectionOptions"
        :dataBound="dataBound" ref="treegrid">
        <e-columns>
          <e-column field="TaskID" headerText="Task ID" :isPrimaryKey='true' width="70" textAlign="Right"></e-column>
          <e-column field="TaskName" headerText="Task Name" width="100" ></e-column>
          <e-column field="StartDate" headerText="Start Date" format="yMd" width="100" textAlign="Right"></e-column>
          <e-column field="EndDate" headerText="End Date" width="100" format="yMd" textAlign="Right"></e-column>
          <e-column field="Duration" headerText="Duration" width="90" textAlign="Right"></e-column>
          <e-column field="Priority" headerText="Priority" width="90" textAlign="eft"></e-column>
        </e-columns>
       </ejs-treegrid>
  </div>
`,

  data() {
    return {
      selIndex: [],
      selectionOptions: { type: "Multiple" },
      data: projectData,
    };
  },
  methods: {
    rowDataBound(args) {
       if (args.data["Duration"] > 3) {
        this.selIndex.push(parseInt(args.row.getAttribute("aria-rowindex")));
      }
    },
    dataBound(args) {
      if (this.selIndex.length) {
        this.$refs.treegrid.selectRows(this.selIndex);
        this.selIndex = [];
      }
    }
  },
  provide: {
    treegrid: [Page]
  }

});