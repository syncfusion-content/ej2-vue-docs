
import Vue from "vue";
import { CalendarPlugin } from "@syncfusion/ej2-vue-calendars";

Vue.use(CalendarPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
        <div class='wrap'>
           <ejs-calendar id='calendar' :renderDayCell="highlightWeekend" ></ejs-calendar>
        </div>
  </div>
`,

  methods: {
        highlightWeekend: function(args) {
            if (args.date.getDay() === 0 || args.date.getDay() === 6) {
                // To highlight the week end of every month
               args.element.classList.add('e-highlightweekend');
            }
        }
  }

});