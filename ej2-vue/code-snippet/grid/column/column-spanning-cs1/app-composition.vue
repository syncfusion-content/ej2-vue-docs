<template>
  <div id="app">
    <ejs-grid :dataSource="shiftPlanData" :allowSorting="true" :enableColumnSpan="true" :allowTextWrap="true" :textWrapSettings="{ wrapMode: 'Content' }" gridLines="Both" height="450" width="auto" >
      <e-columns>
        <e-column field="Name" headerText="Doctor Name" width="170" textAlign="Center" freeze="Left" :template="'doctorTemplate'"></e-column>
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
      <!-- Doctor Name Template -->
      <template #doctorTemplate="{ data }">
        <div class="doctor-name">{{ data.Name }}</div>
        <div class="doctor-designation">{{ data.Designation }}</div>
      </template>
    </ejs-grid>
  </div>
</template>

<script setup>
import { provide } from 'vue';
import { GridComponent as EjsGrid, ColumnsDirective as EColumns, ColumnDirective as EColumn, Freeze, Sort } from '@syncfusion/ej2-vue-grids';
import { shiftPlanData } from './datasource.js';

provide('grid', [Freeze, Sort]);
</script>

<style>
@import "https://cdn.syncfusion.com/ej2/30.2.4/ej2-base/styles/bootstrap5.css";
@import "https://cdn.syncfusion.com/ej2/30.2.4/ej2-buttons/styles/bootstrap5.css";
@import "https://cdn.syncfusion.com/ej2/30.2.4/ej2-popups/styles/bootstrap5.css";
@import "https://cdn.syncfusion.com/ej2/30.2.4/ej2-navigations/styles/bootstrap5.css";
@import "https://cdn.syncfusion.com/ej2/30.2.4/ej2-dropdowns/styles/bootstrap5.css";
@import "https://cdn.syncfusion.com/ej2/30.2.4/ej2-lists/styles/bootstrap5.css";
@import "https://cdn.syncfusion.com/ej2/30.2.4/ej2-inputs/styles/bootstrap5.css";
@import "https://cdn.syncfusion.com/ej2/30.2.4/ej2-calendars/styles/bootstrap5.css";
@import "https://cdn.syncfusion.com/ej2/30.2.4/ej2-splitbuttons/styles/bootstrap5.css";
@import "https://cdn.syncfusion.com/ej2/30.2.4/ej2-grids/styles/bootstrap5.css";

.doctor-designation {
  font-size: 12px;
  color: #7f8c8d;
  font-weight: normal;
}
.doctor-name {
  margin-bottom: 5px;
}
</style>