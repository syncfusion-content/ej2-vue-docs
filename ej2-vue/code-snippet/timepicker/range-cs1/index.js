
import Vue from "vue";
import { TimePickerPlugin } from "@syncfusion/ej2-vue-calendars";

Vue.use(TimePickerPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
        <div class='wrap'>
           <ejs-timepicker id='timepicker' :value='timeval' :min='minTime' :max='maxTime'></ejs-timepicker>
        </div>
  </div>
`,

  data () {
    return{
        timeval:new Date('3/8/2017 11:00 AM'),
        minTime: new Date('3/8/2017 9:00 AM'),
        maxTime: new Date('3/8/2017 11:30 AM')
    }
  }

});