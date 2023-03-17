
import Vue from "vue";
import { TreeGridPlugin, Edit, Toolbar } from "@syncfusion/ej2-vue-treegrid";
import { sampleData } from "./datasource.js";

Vue.use(TreeGridPlugin);



new Vue({
	el: '#app',
	template: `
<div id="app">
        <ejs-treegrid :dataSource='data' childMapping='subtasks' :treeColumnIndex='1' height='270px' :editSettings='editSettings' :toolbar='toolbar'>
        <e-columns>
        <e-column field='taskID' :isPrimaryKey='true'  headerText='Task ID'  width=90 textAlign='Right'></e-column>
        <e-column field='taskName' headerText='Task Name' width=180></e-column>
        <e-column field='startDate' headerText='Start Date' editType= 'datepickeredit' type='date' format='yMd' textAlign='Right' width=170></e-column>
        <e-column field='priority' headerText='Priority' width=110 defaultValue='Normal'></e-column>
        </ejs-treegrid>
</div>
`,

  data() {
    return {
      data: sampleData,
      toolbar: ['Add', 'Delete', 'Update', 'Cancel'],
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Cell', showDeleteConfirmDialog: true },
    };
  },
    provide: {
    treegrid: [ Edit, Toolbar ]
  }

});