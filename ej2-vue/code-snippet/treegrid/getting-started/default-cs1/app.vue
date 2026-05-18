<template>
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
</template>
<script>
// Import the required grid modules from the grid package
import { TreeGridComponent, ColumnsDirective, ColumnDirective, Page, Sort, Filter, Edit, Toolbar } from "@syncfusion/ej2-vue-treegrid";
// Import Grid data from external file
import { sampleData } from "./data";

export default {
name: "App",
components: {
"ejs-treegrid":TreeGridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective,
  },
  data() {
    return {
      data: sampleData,
      pageSettings: { pageSize: 6 },
      filterSettings: { type: "CheckBox" },
      editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true },
      toolbar: ['Add', 'Edit', 'Delete', 'Update', 'Cancel'],
      taskIDRules: {required: true, number: true},
      taskNameRules: { required: true },
    };
  },
  // Inject required Grid features
  provide: {
    treegrid: [Page, Sort, Filter, Edit, Toolbar]
  }
}
</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material3.css';  
@import '../node_modules/@syncfusion/ej2-buttons/styles/material3.css';  
@import '../node_modules/@syncfusion/ej2-calendars/styles/material3.css';  
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material3.css';  
@import '../node_modules/@syncfusion/ej2-inputs/styles/material3.css';  
@import '../node_modules/@syncfusion/ej2-navigations/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material3.css';
@import "../node_modules/@syncfusion/ej2-grids/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-treegrid/styles/material3.css";
</style>