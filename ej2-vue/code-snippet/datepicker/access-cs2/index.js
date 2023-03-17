
import Vue from "vue";
import { DatePickerPlugin } from "@syncfusion/ej2-vue-calendars";

Vue.use(DatePickerPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
        <div class='wrap'>
           <ejs-datepicker id='date' :enabled="enable"></ejs-datepicker>
        </div>
  </div>
`,

    data () {
        return{
            enable: false
        }
    }

});