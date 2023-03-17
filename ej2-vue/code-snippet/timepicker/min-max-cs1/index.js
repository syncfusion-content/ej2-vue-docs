
import Vue from 'vue';
import { TimePickerPlugin } from '@syncfusion/ej2-vue-calendars';

Vue.use(TimePickerPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app">
      <div class='wrapper'>
       <ejs-timepicker :min="minDate" :max="maxDate" :value="timeVal"></ejs-timepicker>
      </div>
    </div>
`,

  data () {
        return {
           minDate : new Date("05/07/2017 7:00 AM"),
           maxDate : new Date("05/07/2017 4:00 PM"),
           timeVal : new Date("05/27/2017 1:00 PM")
        }
    }

});