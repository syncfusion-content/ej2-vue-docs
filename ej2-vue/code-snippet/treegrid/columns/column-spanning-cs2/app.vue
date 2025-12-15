<template>
<div id="app">
      <ejs-treegrid :dataSource="data" childMapping="children" :treeColumnIndex="0" :enableColumnSpan="true"
        :height=400 gridLines="Both" :enableHover=false :allowSelection=false :allowPaging='true'
        :pageSettings='pageSettings' clipMode='EllipsisWithTooltip'>
        <e-columns>
          <e-column field="activityName" headerText="Phase Name" width="250" freeze='Left'></e-column>
          <e-column headerText="Schedule" textAlign="Center" :columns="scheduleColumns"></e-column>
          <e-column headerText="Work Status" textAlign="Center" :columns="statusColumns"></e-column>
          <e-column headerText="Compliance" textAlign="Center" :columns="complianceColumns"></e-column>
          <e-column headerText="Personnel" textAlign="Center" :columns="personnelColumns"></e-column>
          <e-column headerText="Materials" textAlign="Center" :columns="materialsColumns"></e-column>
          <e-column headerText="Cost Summary" textAlign="Center" :columns="budgetColumns"></e-column>
        </e-columns>
      </ejs-treegrid>
</div>
</template>
<script>

import { TreeGridComponent, ColumnDirective, ColumnsDirective, Freeze, Page } from "@syncfusion/ej2-vue-treegrid";
import { columnSpanData } from "./datasource.js";

export default {
name: "App",
components: {
"ejs-treegrid":TreeGridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective,

},

  data() {
    return {
      data: columnSpanData,
      pageSettings: { pageSizeMode: 'All', pageSize: 18 },
      scheduleColumns: [
        { field: 'startDate', headerText: 'Start Date', type: 'date', format: 'MM/dd/yyyy', width: 140, textAlign: 'Center' },
        { field: 'endDate', headerText: 'End Date', type: 'date', format: 'MM/dd/yyyy', width: 140, textAlign: 'Center' }
      ],
      personnelColumns: [
        {
          field: 'supervisor',
          headerText: 'Supervisor',
          width: 180,
        },
        { field: 'team', headerText: 'Crew', width: 200 }
      ],
      statusColumns: [
        { field: 'status', headerText: 'Status', width: 180, textAlign: 'Center' }
      ],
      complianceColumns: [
        { field: 'permitStatus', headerText: 'Permit Status', width: 160, textAlign: 'Center' },
        { field: 'inspectionDate', headerText: 'Inspection Date', width: 180, type: 'date', format: 'MM/dd/yyyy', textAlign: 'Center' },
        { field: 'inspectionStatus', headerText: 'Inspection Status', width: 180, textAlign: 'Center' },
        { field: 'punchListStatus', headerText: 'Punch List Status', width: 180, textAlign: 'Center' }
      ],
      materialsColumns: [
        { field: 'materialUsed', headerText: 'Materials Used', width: 180, textAlign: 'Center' },
        { field: 'materialCost', headerText: 'Material Cost', width: 140, format: 'C2', textAlign: 'Right', enableColumnSpan: false }
      ],
      budgetColumns: [
        { field: 'totalBudget', headerText: 'Planned Budget', width: 140, format: 'C2', textAlign: 'Center', enableColumnSpan: false },
        { field: 'paidToDate', headerText: 'Actual Spend', width: 140, format: 'C2', textAlign: 'Center', enableColumnSpan: false }
      ]
    };
  },
  provide: {
    treegrid: [Freeze, Page]
  }
}
</script>