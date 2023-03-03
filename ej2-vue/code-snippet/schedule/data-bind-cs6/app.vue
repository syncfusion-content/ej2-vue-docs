

<template>
  <div id='app'>
    <div id='container'>
        <ejs-schedule :height='height' :selectedDate='selectedData' :readonly='readonly' :eventSettings='eventSettings' :dataBinding='onDataBinding'></ejs-schedule>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
import { SchedulePlugin, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-vue-schedule';

Vue.use(SchedulePlugin);

var calendarId = '5105trob9dasha31vuqek6qgp0@group.calendar.google.com';
var publicKey = 'AIzaSyD76zjMDsL_jkenM5AAnNsORypS1Icuqxg';
var dataManager = new DataManager({
    url: 'https://www.googleapis.com/calendar/v3/calendars/' + calendarId + '/events?key=' + publicKey,
    adaptor: new WebApiAdaptor,
    crossDomain: true
});

export default {
  data (){
    return {
      height: '550px',
      eventSettings: {
          dataSource: dataManager
      },
      selectedData: new Date(2018, 10, 14),
      readonly: true,
    }
  },
  methods: {
      onDataBinding: function(e){
        var items = e.result.items;
        var scheduleData = [];
        if (items.length > 0) {
            for (var i = 0; i < items.length; i++) {
                var event = items[i];
                var when = event.start.dateTime;
                var start = event.start.dateTime;
                var end = event.end.dateTime;
                if (!when) {
                    when = event.start.date;
                    start = event.start.date;
                    end = event.end.date;
                }
                scheduleData.push({
                    Id: event.id,
                    Subject: event.summary,
                    StartTime: new Date(start),
                    EndTime: new Date(end),
                    IsAllDay: !event.start.dateTime
                });
            }
        }
        e.result = scheduleData;
    }
  },
  provide: {
    schedule: [Day, Week, WorkWeek, Month, Agenda]
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


