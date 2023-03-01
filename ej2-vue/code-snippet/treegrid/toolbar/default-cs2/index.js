
import Vue from "vue";
import { TreeGridPlugin, Toolbar, Filter } from "@syncfusion/ej2-vue-treegrid";
import { sampleData } from "./datasource.js";
import { ClickEventArgs } from '@syncfusion/ej2-vue-navigations';

Vue.use(TreeGridPlugin);


new Vue({
	el: '#app',
	template: `
<div id="app">
        <ejs-treegrid ref='treegrid' :dataSource='data' height='220' childMapping='subtasks' :treeColumnIndex='1' :toolbar='toolbar' :allowFiltering='true' :toolbarClick='toolbarClick'>
            <e-columns>
                <e-column field='taskID' headerText='Task ID' width='90' textAlign='Right'></e-column>
                <e-column field='taskName' headerText='Task Name' width='180'></e-column>
                <e-column field='startDate' headerText='Start Date' width='90' format="yMd" textAlign='Right'></e-column>
                <e-column field='duration' headerText='Duration' width='80' textAlign='Right'></e-column>
            </e-columns>
        </ejs-treegrid>
</div>
`,

  data ()  {
    return {
      data: sampleData,
      toolbar: [{text: 'Quick Filter', tooltipText: 'Quick Filter', id: 'toolbarfilter', align:'Right'}]
    };
  },
  methods: {
    toolbarClick: function (args: ClickEventArgs) {
      if (args.item.id === 'toolbarfilter') {
        this.$refs.treegrid.filterByColumn('taskName', 'startswith', 'Testing');
      }
    }
  },
  provide: {
      treegrid: [ Toolbar, Filter ]
  }

});