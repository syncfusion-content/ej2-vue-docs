<template>
  <div id='app'>
    <div id='container'>
      <ejs-schedule ref='scheduleObj' :height='height' :width='width' :selectedDate='selectedDate' :currentView='currentView'
        :views='views' :eventSettings='eventSettings' @tooltipOpen='onTooltipOpen'>
      </ejs-schedule>
    </div>
  </div>
</template>

<script>
import { ScheduleComponent, Day, Week, WorkWeek, Month, Year, Agenda, MonthAgenda, TimelineViews, TimelineMonth, TimelineYear, Resize, DragAndDrop } from '@syncfusion/ej2-vue-schedule';

export default {
  name: "App",
  components: {
    "ejs-schedule": ScheduleComponent
  },
  data() {
    return {
      height: '550px',
      width: '100%',
      selectedDate: new Date(2025, 1, 15),
      currentView: 'Week',
      views: ['Day', 'Week', 'WorkWeek', 'Month', 'Year', 'Agenda', 'MonthAgenda', 'TimelineDay', 'TimelineWeek', 'TimelineWorkWeek', 'TimelineMonth', 'TimelineYear'],
      eventSettings: {
        dataSource: [
          {
            Id: 1,
            Subject: 'Conference',
            StartTime: new Date(2025, 1, 7, 10, 0),
            EndTime: new Date(2025, 1, 7, 11, 0),
            IsAllDay: false
          },
          {
            Id: 2,
            Subject: 'Meeting - 1',
            StartTime: new Date(2025, 1, 15, 10, 0),
            EndTime: new Date(2025, 1, 16, 12, 30),
            IsAllDay: false
          },
          {
            Id: 3,
            Subject: 'Paris',
            StartTime: new Date(2025, 1, 13, 12, 0),
            EndTime: new Date(2025, 1, 13, 12, 30),
            IsAllDay: false
          },
          {
            Id: 4,
            Subject: 'Vacation',
            StartTime: new Date(2025, 1, 12, 10, 0),
            EndTime: new Date(2025, 1, 12, 10, 30),
            IsAllDay: false
          }
        ],
        enableTooltip: true,
        fields: {
          subject: { title: 'Name', name: 'Subject' },
          location: { title: 'Country Name', name: 'Location' },
          description: { title: 'Summary', name: 'Description' },
          startTime: { title: 'From', name: 'StartTime' },
          endTime: { title: 'To', name: 'EndTime' },
          startTimezone: { title: 'Origin', name: 'StartTimezone' },
          endTimezone: { title: 'Destination', name: 'EndTimezone' }
        }
      }
    };
  },
  methods: {
    onTooltipOpen(args) {
      if (args.data.Subject === 'Vacation') {
        args.cancel = true;
      }
    }
  },
  provide: {
    schedule: [Day, Week, WorkWeek, Month, Year, Agenda, MonthAgenda, TimelineViews, TimelineMonth, TimelineYear, Resize, DragAndDrop]
  }
};
</script>

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css';
@import '../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css';
@import '../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-vue-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-vue-schedule/styles/material.css';
</style>
