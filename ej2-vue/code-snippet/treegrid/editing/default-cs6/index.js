
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
                <e-column field='taskID'  :isPrimaryKey='true'  headerText='Task ID'  width=90 textAlign='Right'></e-column>
                <e-column field='taskName' headerText='Task Name' editType= 'stringedit' width=170 ></e-column>
                <e-column field='startDate' headerText='Start Date' editType= 'datetimepickeredit' :edit='dateParams' :format='formatOptions' textAlign='Right' width=170></e-column>
                <e-column field='approved' headerText='Approved' editType= 'booleanedit' type='boolean' width=110 displayAsCheckBox='true' textAlign='Right'></e-column>
                <e-column field='progress' headerText='Progress' width=120 editType= 'numericedit' :edit='progressParams' textAlign='Right'></e-column>
                 <e-column field='priority' headerText='Priority' editType= 'dropdownedit'  width=110 textAlign='Right'></e-column>
                </e-columns>
        </ejs-treegrid>
</div>
`,

  data() {
    return {
      data: sampleData,
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true,  mode: 'Row' },
      toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
      formatOptions: {type:'dateTime', format:'M/d/y hh:mm a'},
      dateParams: { params: {format: 'M/d/y hh:mm a' } },
      progressParams: { params: {format: 'n' } },
    };
  },
    provide: {
    treegrid: [ Edit, Toolbar]
  }

});