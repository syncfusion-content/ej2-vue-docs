<template>
  <div id="app">
    <ejs-grid :dataSource="shiftPlanData" :allowSorting="true" :enableColumnSpan="true" :allowTextWrap="true" :textWrapSettings="{ wrapMode: 'Content' }" gridLines="Both" height="450px" width="auto" >
      <e-columns>
        <e-column field="Name" headerText="Doctor Name" width="170" textAlign="Center" freeze="Left" :template="'doctorTemplate'" ></e-column>
        <e-column field="Time9AM" headerText="9:00 AM" width="120" textAlign="Center" :allowSorting="false"></e-column>
        <e-column field="Time10AM" headerText="10:00 AM" width="120" textAlign="Center" :allowSorting="false"></e-column>
        <e-column field="Time11AM" headerText="11:00 AM" width="120" textAlign="Center" :allowSorting="false"></e-column>
        <e-column field="Time12PM" headerText="12:00 PM" width="120" textAlign="Center" :allowSorting="false"></e-column>
        <e-column field="Time1PM" headerText="1:00 PM" width="120" textAlign="Center" :allowSorting="false"></e-column>
        <e-column field="Time2PM" headerText="2:00 PM" width="120" textAlign="Center" :allowSorting="false"></e-column>
        <e-column field="Time3PM" headerText="3:00 PM" width="120" textAlign="Center" :allowSorting="false"></e-column>
        <e-column field="Time4PM" headerText="4:00 PM" width="120" textAlign="Center" :allowSorting="false"></e-column>
        <e-column field="Time5PM" headerText="5:00 PM" width="120" textAlign="Center" :allowSorting="false"></e-column>
        <e-column field="Time6PM" headerText="6:00 PM" width="120" textAlign="Center" :allowSorting="false"></e-column>
        <e-column field="Time7PM" headerText="7:00 PM" width="120" textAlign="Center" :allowSorting="false"></e-column>
      </e-columns>
      <!-- Template for Doctor Name and Designation -->
      <template v-slot:doctorTemplate="{ data }">
        <div class="doctor-name">{{ data.Name }}</div>
        <div class="doctor-designation">{{ data.Designation }}</div>
      </template>
    </ejs-grid>
  </div>
</template>

<script>
import { GridComponent,  ColumnsDirective,  ColumnDirective,  Sort, Freeze} from "@syncfusion/ej2-vue-grids";
import { shiftPlanData } from "./datasource.js";

export default {
  name: "ShiftPlan",
  components: {
    "ejs-grid": GridComponent,
    "e-columns": ColumnsDirective,
    "e-column": ColumnDirective,
  },
  data() {
    return {
      shiftPlanData,
    };
  },
  provide: {
    grid: [Sort, Freeze],
  },
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-calendars/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/material3.css";

.doctor-name {
  margin-bottom: 5px;
}
.doctor-designation {
  font-size: 12px;
  color: #7f8c8d;
}
</style>
