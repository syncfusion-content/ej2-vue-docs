
import Vue from 'vue';
import { SchedulePlugin, Day, Week, WorkWeek, Month } from '@syncfusion/ej2-vue-schedule';
import { scheduleData } from './datasource.js';

Vue.use(SchedulePlugin);



new Vue({
	el: '#app',
	template: `
  <div id='app'>
    <div id='container'>
        <ejs-schedule ref='scheduleObj' :height='height' :width='width' :selectedDate='selectedDate' :views='views' cssClass= 'custom-class' :eventSettings='eventSettings' :eventRendered='onEventRendered'></ejs-schedule>
    </div>
  </div>
`,

  data (){
    return {
      height: '550px',
      width: '100%',
      views: ['Day', 'Week', 'WorkWeek', 'Month'],
      eventSettings: {
        dataSource: scheduleData
      },
      selectedDate: new Date(2018, 1, 15),
    }
  },
  methods:{
    isReadOnly: function(data) {
      return (data.EndTime < this.$refs.scheduleObj.ej2Instances.selectedDate);
    },
    onEventRendered: function(args) {
      if (this.isReadOnly(args.data)) {
        args.element.classList.add('e-past-app');
      }
    }
  },
  provide: {
    schedule: [Day, Week, WorkWeek, Month]
  }

});