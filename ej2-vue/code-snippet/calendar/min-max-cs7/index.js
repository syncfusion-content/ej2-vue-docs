
import Vue from 'vue';
import { CalendarPlugin } from '@syncfusion/ej2-vue-calendars';

Vue.use(CalendarPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
   <div class='wrapper'>
    <ejs-calendar :min="minDate" :max="maxDate" :value="dateVal" ></ejs-calendar>
  </div>
  </div>
`,

  data () {
    return {
       minDate : new Date("05/09/2017"),
       maxDate : new Date("05/15/2017"),
       dateVal : new Date("05/11/2017")
    }
  }

});