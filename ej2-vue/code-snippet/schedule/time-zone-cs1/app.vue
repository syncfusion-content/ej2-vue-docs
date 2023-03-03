

<template>
  <div id='app'>
    <div id='container'>
        <ejs-schedule :height='height' :selectedDate='selectedDate' :eventSettings='eventSettings'>
            <e-views>
                <e-view option='Day'></e-view>
                <e-view option='Week'></e-view>
                <e-view option='TimelineWeek'></e-view>
                <e-view option='Month'></e-view>
                <e-view option='Agenda'></e-view>
            </e-views>
        </ejs-schedule>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import { SchedulePlugin, Day, Week, TimelineViews, Month, Agenda } from '@syncfusion/ej2-vue-schedule';

Vue.use(SchedulePlugin);

let data = [{
    Id: 1,
    Subject: 'Paris',
    StartTime: new Date(2018, 1, 15, 9, 0),
    EndTime: new Date(2018, 1, 15, 10, 0)
}];

export default {
  data (){
    return {
        height: '550px',
        selectedDate: new Date(2018, 1, 15),
        eventSettings: {
            dataSource: data
        }
    }
  },
  provide: {
    schedule: [Day, Week, TimelineViews, Month, Agenda]
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



