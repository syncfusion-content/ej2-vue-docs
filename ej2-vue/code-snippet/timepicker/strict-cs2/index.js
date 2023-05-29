
import Vue from "vue";
import { TimePickerPlugin } from "@syncfusion/ej2-vue-calendars";

Vue.use(TimePickerPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
        <div class='wrap'>
           <ejs-timepicker id='timepicker' :strictMode='Strict' :value='timeval' :min='minTime' :max='maxTime'></ejs-timepicker>
        </div>
  </div>
`,

  data () {
    return{
        Strict: true,
        timeval:new Date('7/18/2017 3:00 PM'),
        minTime: new Date('7/18/2017 10:00 AM'),
        maxTime: new Date('7/18/2017 4:00 PM')
    }
  }

});