
import Vue from 'vue';
import { SchedulePlugin, Day, Week, Month, TimelineViews, Agenda } from '@syncfusion/ej2-vue-schedule';

Vue.use(SchedulePlugin);



new Vue({
	el: '#app',
	template: `
  <div id='app'>
    <div id='container'>
        <ejs-schedule :height='height' :width='width' :views='views' :quickInfoOnSelectionEnd='quickInfoOnSelectionEnd'></ejs-schedule>
    </div>
  </div>
`,

  data (){
    return {
      height: '550px',
      width: '100%',
      views: ['TimelineDay', 'Day', 'Week', 'Month', 'Agenda'],
      quickInfoOnSelectionEnd: true,
    }
  },
  provide: {
    schedule: [TimelineViews, Day, Week, Month, Agenda]
  }

});