
import Vue from 'vue';
import { SchedulePlugin, Day, Week, WorkWeek, Month } from '@syncfusion/ej2-vue-schedule';

Vue.use(SchedulePlugin);

var data = [{
        Id: 13,
        Subject: 'Myths of Andromeda Galaxy',
        StartTime: new Date(2018, 1, 16, 10, 30),
        EndTime: new Date(2018, 1, 16, 10, 40)
    }, {
        Id: 14,
        Subject: 'Aliens vs Humans',
        StartTime: new Date(2018, 1, 15, 10, 0),
        EndTime: new Date(2018, 1, 15, 10, 20)
    }];


new Vue({
	el: '#app',
	template: `
  <div id='app'>
    <div id='container'>
        <ejs-schedule ref='scheduleObj' :height='height' :width='width' :selectedDate='selectedDate' :views='views' :eventSettings='eventSettings' :eventRendered='onEventRendered'></ejs-schedule>
    </div>
  </div>
`,

  data (){
    return {
      height: '550px',
      width: '100%',
      views: ['Day', 'Week', 'WorkWeek', 'Month'],
      eventSettings: {
        dataSource: data
      },
      selectedDate: new Date(2018, 1, 15),
    }
  },
  methods:{
    onEventRendered: function(args) {
      let scheduleObj = this.$refs.scheduleObj.ej2Instances;
      if (scheduleObj.currentView !== 'Month') {
        let cellHeight = scheduleObj.element.querySelector('.e-work-cells').offsetHeight;
        let appHeight = (args.data.EndTime.getTime() - args.data.StartTime.getTime()) / (60 * 1000) * (cellHeight * scheduleObj.timeScale.slotCount) / scheduleObj.timeScale.interval;
        args.element.style.height = appHeight+'px';
      }
    }
  },
  provide: {
    schedule: [Day, Week, WorkWeek, Month]
  }

});