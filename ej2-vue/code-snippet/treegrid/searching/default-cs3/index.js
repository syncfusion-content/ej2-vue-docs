
import Vue from "vue";
import { TreeGridPlugin, Filter } from "@syncfusion/ej2-vue-treegrid";
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { sampleData } from "./datasource.js";

Vue.use(TreeGridPlugin);
Vue.use(ButtonPlugin);


new Vue({
	el: '#app',
	template: `
<div id="app">
<div class="e-float-input" style="width: 200px; display: inline-block;">
                <input type="text" class="searchtext"/>
                <span class="e-float-line"></span>
                <label class="e-float-text">Search text</label>
            </div>
        <ejs-button id='search' @click.native='search'>Search</ejs-button>
        <ejs-treegrid ref='treegrid' :dataSource='data' childMapping='subtasks' :treeColumnIndex='1' height='220px'>
            <e-columns>
                <e-column field='taskID' headerText='Task ID' width='90' textAlign='Right'></e-column>
                <e-column field='taskName' headerText='Task Name' width='160'></e-column>
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
      treegrid: [ Filter ]
    },
    methods:{
        search: function() {
        let searchText = document.getElementsByClassName('searchtext')[0].value;
        this.$refs.treegrid.search(searchText);
    }
}

});