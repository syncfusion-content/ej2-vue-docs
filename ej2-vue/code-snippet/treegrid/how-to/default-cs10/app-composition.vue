<template>
  <div id="app">
        <ejs-treegrid :dataSource="data" :treeColumnIndex="1" height='260px' :allowSorting='true' :queryCellInfo='queryCellInfo' childMapping='Children' :editSettings="editSettings" :toolbar="toolbar"  ref="treegrid">
        <e-columns>
         <e-column field="EmpID" headerText="Emp ID" :isPrimaryKey='true' width="70" textAlign="Right"></e-column>
          <e-column field="Name" headerText="Employee Name" width="70" ></e-column>
          <e-column field="Contact" headerText="Contact" width="90" textAlign="Right"></e-column>
          <e-column field="DOB" headerText="DOB" width="100" format="yMd" editType='datepickeredit' textAlign="Right"></e-column>
          <e-column field="EmployeeID" headerText="EmployeeID" width="70" editType= 'dropdownedit' :edit="employeeParams" ></e-column>
          <e-column field="Country" headerText="Country" width="90" textAlign="Left"></e-column>
          </e-columns>
       </ejs-treegrid>
  </div>
</template>
<script setup>
import { provide } from "vue";

import { TreeGridComponent as EjsTreegrid, Page, Toolbar, Edit,
  ColumnDirective as EColumn, ColumnsDirective as EColumns
 } from "@syncfusion/ej2-vue-treegrid";
import { textData, dropData } from "./datasource.js";
import { Query } from '@syncfusion/ej2-data';

const data = textData;
const editSettings = { allowAdding:true, allowDeleting:true, allowEditing: true };
const toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
const employeeParams = {
  params: {
    dataSource: dropData,
    fields: { text: "EmployeeName", value: "EmployeeID"},
    query: new Query()
  }
};

const queryCellInfo = function(args) {
  if (args.column.field === "EmployeeID") {
   for (var i = 0; i < dropData.length; i++) {
      let data = args.data;
      if ((data[args.column.field]).toString() === dropData[i]["EmployeeID"]) {
        args.cell.innerText = dropData[i]["EmployeeName"]; // assign the foreignkey field value to the innertext
      }
    }
  }
};

provide('treegrid',  [Page,Edit, Toolbar]);

</script>