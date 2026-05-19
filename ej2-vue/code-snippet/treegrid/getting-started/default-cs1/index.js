
import Vue from "vue";
import { TreeGridPlugin, Page, Sort, Filter, Edit, Toolbar  } from "@syncfusion/ej2-vue-treegrid";
import { sampleData } from "./datasource.js";

Vue.use(TreeGridPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-treegrid :dataSource="data" :treeColumnIndex='1' childMapping='subtasks' :allowPaging='true' :allowSorting='true' :allowFiltering='true' 
          :pageSettings='pageSettings' :filterSettings='filterSettings' :editSettings='editSettings' :toolbar='toolbar'>
          <e-columns>
                <e-column field='TaskID' headerText='Task ID' :isPrimaryKey='true' textAlign='Right' :validationRules='taskIDRules' width=150></e-column>
                <e-column field='TaskName' headerText='Task Name' :validationRules='taskNameRules' width=170></e-column>
                <e-column field='StartDate' headerText='Start Date' textAlign='Right' editType= 'datetimepickeredit' format='yMd' width=130></e-column>
                <e-column field='EndDate' headerText='End Date' textAlign='Right' editType= 'datetimepickeredit' format='yMd' width=130></e-column>
                <e-column field='Duration' headerText='Duration' textAlign='Right'  editType='numericedit' width=100></e-column>
            </e-columns>
        </ejs-treegrid>
    </div>
`,

  data() {
    return {
      data: sampleData,
      pageSettings: { pageSize: 6 },
      filterSettings: { type: "CheckBox" },
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true},
      toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
      taskIDRules: {required: true, number: true},
      taskNameRules: { required: true },
    };
  },
  provide: {
    treegrid: [Page, Sort, Filter, Edit, Toolbar]
  }

});