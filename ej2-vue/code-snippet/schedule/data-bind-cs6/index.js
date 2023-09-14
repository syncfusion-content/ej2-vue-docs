
import Vue from 'vue';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
import { SchedulePlugin, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-vue-schedule';

Vue.use(SchedulePlugin);

var calendarId = 'en.usa%23holiday@group.v.calendar.google.com';
var publicKey = 'AIzaSyBgbX_tgmVanBP4yafDPPXxWr70sjbKAXM';
var dataManager = new DataManager({
    url: 'https://www.googleapis.com/calendar/v3/calendars/' + calendarId + '/events?key=' + publicKey,
    adaptor: new WebApiAdaptor,
    crossDomain: true
});



new Vue({
	el: '#app',
	template: `
  <div id='app'>
    <div id='container'>
        <ejs-schedule :height='height' :currentView='currentView' :readonly='readonly' :eventSettings='eventSettings' :dataBinding='onDataBinding'></ejs-schedule>
    </div>
  </div>
`,

  data (){
    return {
      height: '550px',
      eventSettings: {
          dataSource: dataManager
      },
      readonly: true,
      currentView: 'Month'
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

});