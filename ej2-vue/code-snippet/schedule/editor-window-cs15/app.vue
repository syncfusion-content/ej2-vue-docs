

<template>
  <div>
    <div id="app">
      <div id="container">
        <tr>
          <td>
            <div>
              <ejs-button v-on:click.native="onCellClick">Show Cell QuickInfo Popup</ejs-button>
            </div>
          </td>
          <td>
            <div>
              <ejs-button v-on:click.native="onEventClick">Show Event QuickInfo Popup</ejs-button>
            </div>
          </td>
        </tr>
        <br /><br />
        <ejs-schedule id="Schedule" width="100%" height="500px" :eventSettings="eventSettings" :selectedDate="selectedDate">
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
<script>
import Vue from "vue";
import { extend } from "@syncfusion/ej2-base";
import { scheduleData } from "./datasource.js";
import {
  SchedulePlugin,
  Day,
  Week,
  WorkWeek,
  Month,
} from "@syncfusion/ej2-vue-schedule";
import { ButtonPlugin } from "@syncfusion/ej2-vue-buttons";
Vue.use(ButtonPlugin);
Vue.use(SchedulePlugin);
export default {
  data() {
    return {
      eventSettings: {
        dataSource: [
          {
            Id: 1,
            Subject: "Review Meeting",
            StartTime: new Date(2023, 2, 5, 20, 0, 0),
            EndTime: new Date(2023, 2, 5, 21, 0, 0),
          },
        ],
      },
      selectedDate: new Date(2023, 2, 5),
    };
  },
  provide: {
    schedule: [Day, Week, WorkWeek, Month],
  },
  methods: {
    onEventClick: function () {
      let scheduleObj = document.getElementById("Schedule").ej2_instances[0];
      let eventData = {
        Id: 1,
        Subject: "Review Meeting",
        StartTime: new Date(2023, 2, 5, 20, 0, 0),
        EndTime: new Date(2023, 2, 5, 21, 0, 0),
      };
      scheduleObj.openQuickInfoPopup(eventData, "Save");
    },
    onCellClick: function () {
      let scheduleObj = document.getElementById("Schedule").ej2_instances[0];
      let cellData = {
        Subject: "Review Meeting",
        StartTime: new Date(2023, 2, 5, 20, 0, 0),
        EndTime: new Date(2023, 2, 5, 21, 0, 0),
      };
      scheduleObj.openQuickInfoPopup(cellData, "Add");
    },
  },
};
</script>
<style>
@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-schedule/styles/material.css";
</style>



