<template>
  <div id="app">
    <div id="container">
      <ejs-schedule ref='scheduleObj' :height="height" :selectedDate="selectedDate" :views="views"
        :eventSettings="eventSettings" :dataBound="dataBound"></ejs-schedule>
    </div>
  </div>
</template>

<script setup>
import { provide, ref } from "vue";
import { ScheduleComponent as EjsSchedule, Day, Week, Month, Agenda, DragAndDrop } from "@syncfusion/ej2-vue-schedule";

var initialLoad = true;
let data = [
  {
    EndTime: new Date(2022, 3, 30, 0, 0),
    Id: "2",
    IsAllDay: true,
    StartTime: new Date(2022, 3, 29, 0, 0),
    Subject: "Plumbing Checklist | Jaimungal | 3671 :: Pool",
  },
  {
    EndTime: new Date(2022, 3, 30, 0, 0),
    Id: "4",
    IsAllDay: true,
    StartTime: new Date(2022, 3, 28, 0, 0),
    Subject: "Underground Plumbing | Jaimungal | 3671 :: Pool",
  },
  {
    EndTime: new Date(2022, 3, 30, 12, 30),
    Id: "7",
    IsAllDay: true,
    StartTime: new Date(2022, 3, 24, 0, 0),
    Subject: "Steel/ Checklist | VP Highland Model | 3719 :: Pool",
  },
  {
    EndTime: new Date(2022, 3, 30, 0, 0),
    Id: "9",
    IsAllDay: true,
    StartTime: new Date(2022, 3, 29, 0, 0),
    Subject:
      "Tile Selections/ Pavers/ Finish | VP Highland Model | 3719 :: Pool",
  },
  {
    EndTime: new Date(2022, 3, 30, 0, 0),
    Id: "10",
    IsAllDay: true,
    StartTime: new Date(2022, 3, 26, 0, 0),
    Subject: "Layout/ Form Rebar Shell | VP Highland Model | 3719 :: Pool",
  },
  {
    EndTime: new Date(2022, 3, 30, 0, 0),
    Id: "10",
    IsAllDay: true,
    StartTime: new Date(2022, 3, 26, 0, 0),
    Subject: " VP Highland Model | 3719 :: Pool",
  },
];

const scheduleObj = ref(null);
const height = "550px";
const views = ["Day", "Week", "Month", "Agenda"];
const eventSettings = {
  dataSource: data,
  spannedEventPlacement: "TimeSlot",
};
const selectedDate = new Date(2022, 3, 26);

provide('schedule', [Day, Week, Month, Agenda, DragAndDrop],);

const dataBound = function (args) {
  let schedule = scheduleObj.value.ej2Instances;
  debugger;
  if (initialLoad) {
    setTimeout(() => {
      console.log(schedule.element.querySelector.querySelector('.e-all-day-appointment-section'));
      schedule.element.querySelector.querySelector('.e-all-day-appointment-section').click();
    }, 0)
    initialLoad = false;
  }
}

</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-schedule/styles/material.css";
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-calendars/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
</style>
