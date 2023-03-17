
import Vue from "vue";
import { DatePickerPlugin } from "@syncfusion/ej2-vue-calendars";

Vue.use(DatePickerPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
        <div class='wrap'>
           <ejs-datepicker id='date' placeholder="Select Date" :readonly='read' :value='dateval'></ejs-datepicker>
        </div>
  </div>
`,

    data () {
        return{
            dateval: new Date(),
            read: true
        }
    }

});