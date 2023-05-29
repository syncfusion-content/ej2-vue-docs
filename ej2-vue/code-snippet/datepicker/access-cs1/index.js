
import Vue from "vue";
import { DatePickerPlugin } from "@syncfusion/ej2-vue-calendars";

Vue.use(DatePickerPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
        <div class='wrap'>
           <ejs-datepicker id='date' placeholder='Select Date' ref="DateInstance"></ejs-datepicker>
        </div>
  </div>
`,

  mounted () {
      let DateObj = this.$refs.DateInstance;
       document.onkeyup = function (e) {
            if (e.altKey && e.keyCode === 84) {
            // press alt+t to focus the control.
            DateObj.$el.focus();
            }
        }
    }

});