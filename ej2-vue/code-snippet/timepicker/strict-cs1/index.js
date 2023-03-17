
import Vue from "vue";
import { TimePickerPlugin } from "@syncfusion/ej2-vue-calendars";

Vue.use(TimePickerPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
        <div class='wrap'>
           <ejs-timepicker id='timepicker' placeholder='Select a time' cssClass='e-custom-style'></ejs-timepicker>
        </div>
  </div>
`,

});