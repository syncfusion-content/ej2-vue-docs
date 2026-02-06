<template>
  <div id="app">
    <div id="container">
      <ejs-schedule ref='scheduleObj' :height="height" :selectedDate="selectedDate" :views="views"
        :eventSettings="eventSettings" :dataBound=this.dataBound></ejs-schedule>
    </div>
  </div>
</template>

<script>
import { ScheduleComponent, Day, Week, Month, Agenda, DragAndDrop } from "@syncfusion/ej2-vue-schedule";

let initialLoad = true;
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

export default {
  name: "App",
  components: {
    "ejs-schedule": ScheduleComponent
  },
  data() {
    return {
      height: "550px",
      views: ["Day", "Week", "Month", "Agenda"],
      eventSettings: {
        dataSource: data,
        spannedEventPlacement: "TimeSlot",
      },
      selectedDate: new Date(2022, 3, 26),
    };
  },
  provide: {
    schedule: [Day, Week, Month, Agenda, DragAndDrop],
  },
  methods: {
    dataBound(args) {
      let scheduleObj = this.$refs.scheduleObj.ej2Instances;
      debugger;
      if (initialLoad) {
        setTimeout(() => {
          console.log(scheduleObj.element.querySelector.querySelector('.e-all-day-appointment-section'));
          scheduleObj.element.querySelector.querySelector('.e-all-day-appointment-section').click();
        }, 0)
        initialLoad = false;
      }
    }
  }
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-schedule/styles/material3.css";
@import '../node_modules/@syncfusion/ej2-buttons/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-calendars/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material3.css';
</style>
