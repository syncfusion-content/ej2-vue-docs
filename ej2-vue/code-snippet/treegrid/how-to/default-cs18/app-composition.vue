<template>
    <div id="app">
        <div>
            <ejs-button  iconCss="e-icons e-play-icon" cssClass="e-flat" :isPrimary="true" :isToggle="true" v-on:click="Add">Add</ejs-button>
            <ejs-button  iconCss="e-icons e-play-icon" cssClass="e-flat" :isPrimary="true" :isToggle="true" v-on:click="Delete">Delete</ejs-button>
             <ejs-treegrid :dataSource="data" :treeColumnIndex="1" height='210px' idMapping= 'TaskID' parentIdMapping='parentID' ref="treegrid" :editSettings="editSettings" :toolbar="toolbar">
              <e-columns>
               <e-column field="TaskID" headerText="Task ID" :isPrimaryKey='true' width="70" textAlign="Right"></e-column>
               <e-column field="TaskName" headerText="Task Name" width="100" ></e-column>
               <e-column field="StartDate" headerText="Start Date" format="yMd" width="100" textAlign="Right"></e-column>
               <e-column field="EndDate" headerText="Start Date" format="yMd" width="100" textAlign="Right"></e-column>
               <e-column field="Duration" headerText="Duration" width="90" textAlign="Right"></e-column>
              </e-columns>
            </ejs-treegrid>
          </div>
    </div>
</template>
<script setup>
import { provide } from "vue";

import { TreeGridComponent as EjsTreegrid, Page, Toolbar, Edit,
ColumnDirective as EColumn, ColumnsDirective as EColumns
 } from "@syncfusion/ej2-vue-treegrid";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
import { projectData } from './datasource.js';

const data = projectData;
const editSettings = { allowAdding:true, allowDeleting:true, allowEditing: true };

const toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];

const Add = () => {
  let customData = {
    TaskID: 99,
    TaskName: "New Data",
    StartDate: new Date("02/03/2017"),
    EndDate: new Date("02/03/2017"),
    Duration: 10
  };
  data.unshift(customData);
  data = [...data];
};

const Delete = () => {
 let selectedRow = treegrid.getSelectedRowIndexes().length;
 let selectedRowIndex = treegrid.getSelectedRowIndexes()[0];
   if (selectedRow > 0) {
     data.splice(selectedRowIndex, 1);
    }
   else {
      alert("No records selected for delete operation");
   }
   data = [...data];
  };

provide('treegrid',  [Page, Edit, Toolbar]);

</script>