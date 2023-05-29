
import Vue from "vue";
import { CalendarPlugin } from "@syncfusion/ej2-vue-calendars";

Vue.use(CalendarPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
        <div class='wrap'>
           <ejs-calendar id='calendar' ref="CalendarInstance"></ejs-calendar>
        </div>
  </div>
`,

  mounted () {
      let calendarObj = this.$refs.CalendarInstance;
       document.onkeyup = function (e) {
    if (e.altKey && e.keyCode === 84) {
        // press alt+t to focus the control.
        calendarObj.$el.querySelectorAll('.e-content table')[0].focus();
    }
        }

});