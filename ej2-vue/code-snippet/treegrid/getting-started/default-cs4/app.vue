<template>
    <div id="app">
        <!-- Assigns the dataset to the TreeGrid component -->
        <ejs-treegrid :dataSource="data" :treeColumnIndex='1' childMapping='subtasks'>
          <!-- Define the columns to be displayed -->
          <e-columns>
                <e-column field='TaskID' headerText='Task ID' textAlign='Right' width=150></e-column>
                <e-column field='TaskName' headerText='Task Name' width=170></e-column>
                <e-column field='StartDate' headerText='Start Date' textAlign='Right' format='yMd' width=130></e-column>
                <e-column field='EndDate' headerText='End Date' textAlign='Right' format='yMd' width=130></e-column>
                <e-column field='Duration' headerText='Duration' textAlign='Right' width=100></e-column>
            </e-columns>
        </ejs-treegrid>
    </div>
</template>
<script>
import { TreeGridComponent, ColumnDirective, ColumnsDirective } from "@syncfusion/ej2-vue-treegrid";
// Defines the data to be displayed in the TreeGrid
const dataSource = [
    {
        TaskID: 1, TaskName: 'Planning', StartDate: new Date('02/04/2025'), EndDate: new Date('02/07/2025'), Duration: 4,
        subtasks: [
            { TaskID: 2, TaskName: 'Plan timeline', StartDate: new Date('02/04/2025'), EndDate: new Date('02/07/2025'), Duration: 4, },
            { TaskID: 3, TaskName: 'Plan budget', StartDate: new Date('02/04/2025'), EndDate: new Date('02/07/2025'), Duration: 4, },
        ],
    },
    {
        TaskID: 4, TaskName: 'Design', StartDate: new Date('02/10/2025'), EndDate: new Date('02/14/2025'), Duration: 5,
        subtasks: [
            { TaskID: 5, TaskName: 'Software Specification', StartDate: new Date('02/10/2025'), EndDate: new Date('02/12/2025'), Duration: 3, },
            { TaskID: 6, TaskName: 'Design Documentation', StartDate: new Date('02/13/2025'), EndDate: new Date('02/14/2025'), Duration: 2, },
            { TaskID: 7, TaskName: 'Design complete', StartDate: new Date('02/14/2025'), EndDate: new Date('02/14/2025'), Duration: 1 },
        ],
    }
];

export default {
name: "App",
components: {
"ejs-treegrid":TreeGridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective,
  },
  data() {
    return {
      data: dataSource
    };
  },
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