
import Vue from "vue";
import { CalendarPlugin } from "@syncfusion/ej2-vue-calendars";

Vue.use(CalendarPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
        <div class='wrap'>
           <ejs-calendar id='calendar' :firstDayOfWeek='firstDay'></ejs-calendar>
        </div>
  </div>
`,

   data () {
        return {
           firstDay : 2
        }
    }

});