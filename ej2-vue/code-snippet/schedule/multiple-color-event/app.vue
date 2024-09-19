<template>
  <div class="schedule-vue-sample">
    <div class="col-md-12 control-section">
      <div class="content-wrapper">
        <ejs-schedule id="Schedule" width="100%" height="650px" :selectedDate="selectedDate" :eventSettings="eventSettings" :cssClass="cssClass">
          <e-views>
            <e-view option="Week" :eventTemplate="'eventTemplate'">
              <template v-slot:eventTemplate="{ data }">
                <div class="template-wrapper">
                  <div v-for="(item, index) in data.SubCount" :key="index" :style="{ background: item.background, height: item.height }">
                    <div class="subject">{{ data.Subject }}</div>
                  </div>
                </div>
              </template>
            </e-view>
          </e-views>
        </ejs-schedule>
      </div>
    </div>
  </div>
</template>
<script>
import { ScheduleComponent, ViewDirective, ViewsDirective, Week, Resize, DragAndDrop } from '@syncfusion/ej2-vue-schedule';

export default {
   components: {
    'ejs-schedule': ScheduleComponent,
    'e-view': ViewDirective,
    'e-views': ViewsDirective
  },
  data() {
    return {
      selectedDate: new Date(2024, 1, 15),
      cssClass: 'schedule-event-template',
      eventSettings: {
        dataSource: [
          {
            Id: 1,
            Subject: 'Environment Day',
            Description: 'A day that creates awareness to promote the healthy planet and reduce the air pollution crisis on nature earth.',
            StartTime: new Date(2024, 1, 15, 9, 0),
            EndTime: new Date(2024, 1, 15, 14, 0),
            SubCount: [
              { background: 'darkblue', height: '50%' },
              { background: 'lightblue', height: '50%' },
            ]
          },
          {
            Id: 2,
            Subject: 'Health Day',
            Description: 'A day that raises awareness on different health issues. It marks the anniversary of the foundation of WHO.',
            StartTime: new Date(2024, 1, 16, 9, 0),
            EndTime: new Date(2024, 1, 16, 14, 0),
            SubCount: [
              { background: 'yellow', height: '33.3%' },
              { background: 'yellowgreen', height: '33.3%' },
              { background: 'green', height: '33.3%' },
            ]
          },
          {
            Id: 3,
            Subject: 'Cancer Day',
            Description: 'A day that raises awareness on cancer and its preventive measures. Early detection saves life.',
            StartTime: new Date(2024, 1, 17, 9, 0),
            EndTime: new Date(2024, 1, 17, 14, 0),
            SubCount: [
              { background: 'pink', height: '50%' },
              { background: 'red', height: '50%' },
            ]
          }
        ]
      }
    };
  },
  provide: {
    schedule: [Week, Resize, DragAndDrop]
  }
}

</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/bootstrap5.css';
@import '../node_modules/@syncfusion/ej2-vue-buttons/styles/bootstrap5.css';
@import '../node_modules/@syncfusion/ej2-vue-calendars/styles/bootstrap5.css';
@import '../node_modules/@syncfusion/ej2-vue-dropdowns/styles/bootstrap5.css';
@import '../node_modules/@syncfusion/ej2-vue-inputs/styles/bootstrap5.css';
@import '../node_modules/@syncfusion/ej2-vue-navigations/styles/bootstrap5.css';
@import '../node_modules/@syncfusion/ej2-vue-popups/styles/bootstrap5.css';
@import '../node_modules/@syncfusion/ej2-vue-schedule/styles/bootstrap5.css';
</style>
