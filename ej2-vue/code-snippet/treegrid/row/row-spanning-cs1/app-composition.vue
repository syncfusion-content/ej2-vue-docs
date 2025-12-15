<template>
  <div id="app">
    <ejs-treegrid
      :dataSource="data"
      :treeColumnIndex="1"
      childMapping="subtasks"
      height="auto"
      width="auto"
      gridLines="Both"
      queryCellInfo="queryCellInfoEvent"
    >
      <e-columns>
        <e-column
          field="EmployeeID"
          headerText="Employee ID"
          width="120"
          textAlign="Right"
          :isPrimaryKey="true"
        ></e-column>
        <e-column
          field="EmployeeName"
          headerText="Employee Name"
          width="150"
        ></e-column>
        <e-column field="9:00" headerText="9:00 AM" width="120"></e-column>
        <e-column field="10:00" headerText="10:00 AM" width="120"></e-column>
        <e-column field="11:00" headerText="11:00 AM" width="120"></e-column>
        <e-column field="12:00" headerText="12:00 PM" width="120"></e-column>
        <e-column field="1:00" headerText="1:00 PM" width="120"></e-column>
        <e-column field="3:00" headerText="3:00 PM" width="120"></e-column>
        <e-column field="4:00" headerText="4:00 PM" width="120"></e-column>
        <e-column field="5:00" headerText="5:00 PM" width="120"></e-column>
      </e-columns>
    </ejs-treegrid>
  </div>
</template>
<script setup>

import { TreeGridComponent as EjsTreegrid, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-treegrid";
import { rowSpanData } from "./datasource.js";

const data = rowSpanData;

const queryCellInfoEvent: function (args) {
      let data = args.data;
      switch (data.EmployeeID) {
        case 10001:
          if (args.column.field === "1:00") {
            args.rowSpan = 10;
          }
          break;
      }
    };
</script>
