
import Vue from "vue";
import { TimePickerPlugin } from "@syncfusion/ej2-vue-calendars";

Vue.use(TimePickerPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
        <div class='wrap'>
           <ejs-timepicker id='timepicker' ref="time"></ejs-timepicker>
        </div>
  </div>
`,

  mounted () {
      let TimeObj = this.$refs.time;
       document.onkeyup = function (e) {
            if (e.altKey && e.keyCode === 84) {
            // press alt+t to focus the control.
            TimeObj.$el.focus();
            }
        }
    }

});