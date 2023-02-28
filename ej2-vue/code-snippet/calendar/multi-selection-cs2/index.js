
import Vue from "vue";
import { CalendarPlugin } from "@syncfusion/ej2-vue-calendars";

Vue.use(CalendarPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
        <div class='wrap'>
           <ejs-calendar id='calendar' ref="CalendarInstance" :isMultiSelection="isMultiSelection" :values="values" ></ejs-calendar>
        </div>
  </div>
`,

      data () {
        return {
          isMultiSelection: true,
            values: [new Date('1/1/2020'), new Date('1/15/2020'), new Date('1/3/2020'), new Date('1/25/2020')]
        }
    }
    
});