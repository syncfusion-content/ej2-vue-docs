
import Vue from "vue";
import { TreeGridPlugin, Sort, ColumnMenu, Page } from "@syncfusion/ej2-vue-treegrid";
import { sampleData } from "./datasource.js";

Vue.use(TreeGridPlugin);


new Vue({
	el: '#app',
	template: `
<div id="app">
        <ejs-treegrid ref='treegrid':dataSource="data" :treeColumnIndex='1' :allowPaging='true' :allowSorting='true' :sortSettings='sortSettings' :showColumnMenu='true' childMapping='subtasks' :columnMenuItems='columnMenuItems' :columnMenuClick='columnMenuClick'>
            <e-columns>
                <e-column field='taskID' headerText='Task ID' textAlign='Right' width=90></e-column>
                <e-column field='taskName' headerText='Task Name' width=180></e-column>
                <e-column field='startDate' headerText=' Start Date' textAlign='Right' format='yMd' type='date' width=90></e-column>
                <e-column field='duration' headerText='Duration' textAlign='Right'  width=80></e-column>
            </e-columns>
        </ejs-treegrid>
</div>
`,

 data() {
    return {
      data: sampleData,
      columnMenuItems: [{text:'Clear Sorting', id:'clearsorting'}],
      sortSettings: {columns:[{direction: "Ascending", field: "taskID"}]}
    };
  },
  provide: {
      treegrid: [Sort, ColumnMenu, Page]
  },
  methods: {
  columnMenuClick: function(args) {
      if(args.item.id === 'clearsorting'){
        this.$refs.treegrid.clearSorting();
      }
    }
  },

});