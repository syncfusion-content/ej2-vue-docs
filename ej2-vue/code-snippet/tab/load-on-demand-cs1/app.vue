<template>
<div id="app">
  <ejs-tab>
    <e-tabitems>
      <e-tabitem :header="headerText0" :content="'calendarComponent'"></e-tabitem>
      <template v-slot:calendarComponent>
      <ejs-calendar id="calendar"></ejs-calendar>
    </template>
      <e-tabitem :header="headerText1" :content="'scheduleComponent'"></e-tabitem>
      <template  v-slot:scheduleComponent>
      <ejs-schedule id="Schedule">
        <e-views>
          <e-view option="Day"></e-view>
        </e-views>
      </ejs-schedule>
    </template>
    </e-tabitems>
  </ejs-tab>
</div>
</template>

<script>
import { TabComponent, TabItemsDirective, TabItemDirective } from "@syncfusion/ej2-vue-navigations";
import { ScheduleComponent, ViewDirective, ViewsDirective, Day} from "@syncfusion/ej2-vue-schedule";
import { CalendarComponent } from "@syncfusion/ej2-vue-calendars";

export default {
name: "App",
components: {
  "ejs-tab": TabComponent,
  "e-tabitem": TabItemDirective,
  "e-tabitems": TabItemsDirective,
  "ejs-schedule": ScheduleComponent,
  "e-view": ViewDirective,
  "e-views": ViewsDirective,
  'ejs-calendar': CalendarComponent,
},
data: function () {
  return {
    headerText0: { text: "Calendar" },
    headerText1: { text: "Schedule" },
  };
},
provide: {
  schedule: [Day],
},
};
</script>