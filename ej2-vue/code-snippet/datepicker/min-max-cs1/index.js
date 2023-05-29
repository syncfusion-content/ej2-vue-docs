
import Vue from "vue";
import { DatePickerPlugin } from "@syncfusion/ej2-vue-calendars";

Vue.use(DatePickerPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
        <div class='wrap'>
           <ejs-datepicker id='datepicker' :renderDayCell="disableDate" placeholder='Select a Date'></ejs-datepicker>
        </div>
  </div>
`,

  methods: {
        disableDate: function(args) {
            if (args.date.getDay() === 0 || args.date.getDay() === 6) {
               args.isDisabled = true;
            }
        }
  }

});