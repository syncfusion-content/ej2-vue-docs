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
<script>
import { ScheduleComponent, ViewDirective, ViewsDirective, Day, Week, WorkWeek, Month } from "@syncfusion/ej2-vue-schedule";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";

export default {
  name: "App",
  components: {
    "ejs-button": ButtonComponent,
    "ejs-schedule": ScheduleComponent,
    "e-views": ViewsDirective,
    "e-view": ViewDirective
  },
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
      let scheduleObj = this.$refs.scheduleObj.ej2Instances;
      let eventData = {
        Id: 1,
        Subject: "Review Meeting",
        StartTime: new Date(2023, 2, 5, 20, 0, 0),
        EndTime: new Date(2023, 2, 5, 21, 0, 0),
      };
      scheduleObj.openQuickInfoPopup(eventData, "Save");
    },
    onCellClick: function () {
      let scheduleObj = this.$refs.scheduleObj.ej2Instances;
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
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3";
@import "../node_modules/@syncfusion/ej2-vue-buttons/styles/tailwind3";
@import "../node_modules/@syncfusion/ej2-vue-calendars/styles/tailwind3";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/tailwind3";
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/tailwind3";
@import "../node_modules/@syncfusion/ej2-vue-navigations/styles/tailwind3";
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/tailwind3";
@import "../node_modules/@syncfusion/ej2-vue-schedule/styles/tailwind3";
</style>
