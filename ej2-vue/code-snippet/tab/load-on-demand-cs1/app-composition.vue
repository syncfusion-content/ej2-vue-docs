<template>
  <div id="app">
    <ejs-tab>
      <e-tabitems>
        <e-tabitem
          :header="headerText0"
          :content="'calendarComponent'"
        ></e-tabitem>
        <template v-slot:calendarComponent>
          <ejs-calendar id="calendar"></ejs-calendar>
        </template>
        <e-tabitem
          :header="headerText1"
          :content="'scheduleComponent'"
        ></e-tabitem>
        <template v-slot:scheduleComponent>
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

<script setup>
import {
  TabComponent as EjsTab,
  TabItemsDirective as ETabitem,
  TabItemDirective as ETabitems,
} from "@syncfusion/ej2-vue-navigations";
import {
  ScheduleComponent as EjsSchedule,
  ViewsDirective as EViews,
  ViewDirective as Eview,
  Day,
} from "@syncfusion/ej2-vue-schedule";
import { CalendarComponent } from "@syncfusion/ej2-vue-calendars";
import { provide } from "vue";

const headerText0 = { text: "Calendar" };
const headerText1 = { text: "Schedule" };
const schedule = [Day];
provide("schedule", schedule);
</script>