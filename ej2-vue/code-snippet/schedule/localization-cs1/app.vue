

<template>
    <div id='app'>
     <div id='container'>
      <ejs-schedule :locale = 'locale' height='550px' :selectedDate='selectedDate' :eventSettings='eventSettings'>
           <e-views>
              <e-view option='Day'></e-view>
              <e-view option='Week'></e-view>
              <e-view option='WorkWeek'></e-view>
              <e-view option='Month'></e-view>
            </e-views>
         </ejs-schedule>
        </div>
      </div>
</template>
<script>
    import Vue from 'vue';
    import { scheduleData } from './datasource.js';
    import { loadCldr } from '@syncfusion/ej2-base';
    import { SchedulePlugin, Day, Week, WorkWeek, Month } from '@syncfusion/ej2-vue-schedule';
    import * as numberingSystems from './numberingSystems.json';
    import * as gregorian from './ca-gregorian.json';
    import * as numbers from './numbers.json';
    import * as timeZoneNames from './timeZoneNames.json';

    Vue.use(SchedulePlugin);
    loadCldr(numberingSystems, gregorian, numbers, timeZoneNames);
    export default {
        data () {
            return {
               height: '550px',
               locale: 'fr-CH',
               selectedDate: new Date(2018, 0, 15),
               eventSettings: { dataSource: scheduleData }
            }
        },
        provide: {
            schedule: [Day, Week, WorkWeek, Month]
        }
    }
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



