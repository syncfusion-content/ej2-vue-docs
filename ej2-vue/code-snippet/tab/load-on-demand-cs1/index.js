import Vue from 'vue';
import { TabPlugin } from '@syncfusion/ej2-vue-navigations';
import { Day, SchedulePlugin } from "@syncfusion/ej2-vue-schedule";
import { CalendarPlugin } from "@syncfusion/ej2-vue-calendars";

Vue.use(TabPlugin);
Vue.use(SchedulePlugin);
Vue.use(CalendarPlugin)

new Vue({
        el: '#app',
        template: `
        <div id="app">
        <div id="calendarComponent" style="display: none"><ejs-calendar id="calendar"></ejs-calendar></div>
        <div id="scheduleComponent" style="display: none">
                <ejs-schedule id="Schedule">
                <e-views>
                <e-view option="Day"></e-view>
                </e-views>
        </ejs-schedule></div>
        <ejs-tab>
        <e-tabitems>
        <e-tabitem :header="headerText0" content="#calendarComponent"></e-tabitem>
        <e-tabitem :header="headerText1" content="#scheduleComponent"></e-tabitem>
        </e-tabitems>
        </ejs-tab>
        </div>
    `,
        name: 'app',
        data: function () {
                return {
                        headerText0: { text: "Calendar" },
                        headerText1: { text: "Schedule" }
                };
        },
        provide: {
                schedule: [Day]
        }

});