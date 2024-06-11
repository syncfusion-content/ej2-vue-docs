<template>
  <div>
    <div id="app">
      <div id="container">
        <tr>
          <td>
            <div>
              <ejs-button v-on:click="onCellClick">Show Cell QuickInfo Popup</ejs-button>
            </div>
          </td>
          <td>
            <div>
              <ejs-button v-on:click="onEventClick">Show Event QuickInfo Popup</ejs-button>
            </div>
          </td>
        </tr>
        <br /><br />
        <ejs-schedule ref='scheduleObj' width="100%" height="500px" :eventSettings="eventSettings"
          :selectedDate="selectedDate">
          <e-views>
            <e-view option="Day"></e-view>
            <e-view option="Week"></e-view>
            <e-view option="WorkWeek"></e-view>
            <e-view option="Month"></e-view>
          </e-views>
        </ejs-schedule>
      </div>
    </div>
  </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { ScheduleComponent as EjsSchedule, ViewDirective as EView, ViewsDirective as EViews, Day, Week, WorkWeek, Month } from "@syncfusion/ej2-vue-schedule";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";

const scheduleObj = ref(null);
const eventSettings = {
  dataSource: [
    {
      Id: 1,
      Subject: "Review Meeting",
      StartTime: new Date(2023, 2, 5, 20, 0, 0),
      EndTime: new Date(2023, 2, 5, 21, 0, 0),
    },
  ],
};
const selectedDate = new Date(2023, 2, 5);

provide('schedule', [Day, Week, WorkWeek, Month],);
const onEventClick = function () {
  let schedule = scheduleObj.value.ej2Instances;
  let eventData = {
    Id: 1,
    Subject: "Review Meeting",
    StartTime: new Date(2023, 2, 5, 20, 0, 0),
    EndTime: new Date(2023, 2, 5, 21, 0, 0),
  };
  schedule.openQuickInfoPopup(eventData, "Save");
}
const onCellClick = function () {
  let schedule = scheduleObj.value.ej2Instances;
  let cellData = {
    Subject: "Review Meeting",
    StartTime: new Date(2023, 2, 5, 20, 0, 0),
    EndTime: new Date(2023, 2, 5, 21, 0, 0),
  };
  schedule.openQuickInfoPopup(cellData, "Add");
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-schedule/styles/material.css";
</style>
