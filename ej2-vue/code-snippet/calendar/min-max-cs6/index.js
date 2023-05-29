
import Vue from "vue";
import { CalendarPlugin } from "@syncfusion/ej2-vue-calendars";

Vue.use(CalendarPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
        <div class='wrap'>
           <ejs-calendar id='calendar' :value='dateVal' :min='minVal' :max='maxVal' placeholder='Select a Date'></ejs-calendar>
        </div>
  </div>
`,

  data () {
    var today = new Date();
    var currentYear = today.getFullYear();
    var currentMonth = today.getMonth();
    var currentDay = today.getDate();
    return {
        dateVal: new Date(new Date().setDate(14)),
        minVal: new Date(currentYear, currentMonth, 7),
        maxVal: new Date(currentYear, currentMonth, 27),
    }
  }

});