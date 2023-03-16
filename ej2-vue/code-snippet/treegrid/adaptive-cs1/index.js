
import Vue from "vue";
import { TreeGridPlugin, Page, Edit, Sort, Filter, Toolbar } from "@syncfusion/ej2-vue-treegrid";
import { sampleData } from "./datasource.js";

Vue.use(TreeGridPlugin);

export default ({
  data() {
    return {
      data: sampleData,
      editSettings: { allowAdding: true, allowEditing: true, allowDeleting: true, mode: 'Dialog' },
      toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'],
      filterSettings: { type: 'Excel' }
    };
  },
  methods: {
    load: function() {
        (this.$refs.treegrid as any).$el.ej2_instances[0].grid.adaptiveDlgTarget = document.getElementsByClassName('e-mobile-content')[0];
    }
  },
  provide: {
      treegrid: [Page, Edit, Sort, Filter, Toolbar]
  }
});
new Vue({
	el: '#app',
	template: `
    <div id="app">
    <div class="e-bigger e-adaptive-demo">
    <div class="e-mobile-layout">
        <div class="e-mobile-content">
            <ejs-treegrid ref='treegrid' id='adaptivebrowser' :dataSource='data' childMapping='subtasks' :treeColumnIndex='1' height='100%' :enableAdaptiveUI='true' :allowPaging='true' :allowSorting='true' :allowFiltering='true' :editSettings='editSettings' :toolbar='toolbar' :filterSettings='filterSettings' :load='load'>
                <e-columns>
                    <e-column field='taskID' headerText='Task ID' :isPrimaryKey='true' width='135' textAlign='Right'></e-column>
                    <e-column field='taskName' headerText='Task Name' width='280'></e-column>
                    <e-column field='duration' headerText='Duration' width='140' textAlign='Right'></e-column>
                    <e-column field='progress' headerText='Progress' width='145' textAlign='Right'></e-column>
                </e-columns>
            </ejs-treegrid>
        </div>
    </div>
    </div>
    </div>
`,

});