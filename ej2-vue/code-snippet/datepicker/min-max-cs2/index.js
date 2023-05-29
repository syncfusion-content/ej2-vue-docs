
import Vue from "vue";
import { DatePickerPlugin } from "@syncfusion/ej2-vue-calendars";

Vue.use(DatePickerPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
        <div class='wrap'>
           <ejs-datepicker id='datepicker' :value='calVal' :min='minVal' :max='maxVal'></ejs-datepicker>
        </div>
  </div>
`,

  data () {
    var today = new Date();
    var currentYear = today.getFullYear();
    var currentMonth = today.getMonth();
    var currentDay = today.getDate();
    return {
        calVal: new Date(new Date().setDate(14)),
        minVal: new Date(currentYear, currentMonth, 7),
        maxVal: new Date(currentYear, currentMonth, 27),
    }
  }

});