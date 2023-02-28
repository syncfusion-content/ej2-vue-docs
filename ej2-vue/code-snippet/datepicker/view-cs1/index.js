
import Vue from "vue";
import { DatePickerPlugin } from "@syncfusion/ej2-vue-calendars";

Vue.use(DatePickerPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
        <div class='wrap'>
           <ejs-datepicker id='datepicker' start='Decade' placeholder='Select a date'></ejs-datepicker>
        </div>
  </div>
`,



});