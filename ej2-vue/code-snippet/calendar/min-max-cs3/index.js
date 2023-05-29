
import Vue from "vue";
import { CalendarPlugin } from "@syncfusion/ej2-vue-calendars";

Vue.use(CalendarPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
        <div class='wrap'>
           <ejs-calendar id='calendar' start='Decade' depth='Year'></ejs-calendar>
        </div>
  </div>
`,

  data () {
    return {
    }
  }

});