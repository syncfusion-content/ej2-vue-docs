
import Vue from 'vue';
import {SchedulePlugin, Day, Week, Month, Agenda } from '@syncfusion/ej2-vue-schedule';
let data = [{
        Id: 1,
        Subject: 'Explosion of Betelgeuse Star',
        StartTime: new Date(2020, 1, 15, 10, 0),
        EndTime: new Date(2018, 1, 15, 12, 30),
        IsAllDay: false
    },{
        Id: 2,
        Subject: 'Blue Moon Eclipse',
        StartTime: new Date(2020, 1, 16, 12, 0),
        EndTime: new Date(2018, 1, 16, 13, 0),
        IsAllDay: false
    }];
Vue.use(SchedulePlugin);

new Vue({
	el: '#app',
	template: `
  <div id='app'>
    <div id='container'>
        <ejs-schedule :height='height' :selectedDate='selectedDate' :views = 'views' :eventSettings='eventSettings' :timezoneDataSource='timezoneDataSource'></ejs-schedule>
    </div>
  </div>
`,

  data (){
    return {
      height: '550px',
      views: ['Day', 'Week', 'Month', 'Agenda'],
      eventSettings: {dataSource: data},
      timezoneDataSource : [
                    { Value: 'Pacific/Niue', Text: 'Niue' },
                    { Value: 'Pacific/Pago_Pago', Text: 'Pago Pago' },
                    { Value: 'Pacific/Honolulu', Text: 'Hawaii Time' },
                    { Value: 'Pacific/Rarotonga', Text: 'Rarotonga' },
                    { Value: 'Pacific/Tahiti', Text: 'Tahiti' },
                ],
      selectedDate: new Date(2020, 1, 15),
    }
  },
  provide: {
    schedule: [Day, Week, Month, Agenda]
  }

});