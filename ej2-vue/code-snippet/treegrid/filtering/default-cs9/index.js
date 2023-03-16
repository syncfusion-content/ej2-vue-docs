
import Vue from "vue";
import { TreeGridPlugin, Filter } from "@syncfusion/ej2-vue-treegrid";
import { sampleData } from "./datasource.js";

Vue.use(TreeGridPlugin);



new Vue({
	el: '#app',
	template: `
<div id="app">
        <ejs-treegrid ref='treegrid':dataSource='data'  childMapping='subtasks' :treeColumnIndex='1'  :allowFiltering='true' height='275px' :dataBound='dataBound'>
            <e-columns>
                <e-column field='taskID' headerText='Task ID' width='75' textAlign='Right'></e-column>
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
    };
  },
   provide: {
    treegrid: [Filter]
  },
  methods: {
    dataBound(args){
    this.$refs.treegrid.ej2Instances.grid.filterModule.filterOperators.startsWith="contains"
   }
    }
  
});