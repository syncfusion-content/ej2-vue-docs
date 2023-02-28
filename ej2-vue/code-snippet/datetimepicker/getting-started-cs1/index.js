
import Vue from "vue";
import { DateTimePickerPlugin } from "@syncfusion/ej2-vue-calendars";

Vue.use(DateTimePickerPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
        <div class='wrap'>
           <ejs-datetimepicker  placeholder='Select a datetime' ref="DateInstance"></ejs-datetimepicker>
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