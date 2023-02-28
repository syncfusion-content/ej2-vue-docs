
import Vue from 'vue';
import { DateRangePickerPlugin } from '@syncfusion/ej2-vue-calendars';

Vue.use(DateRangePickerPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app">
      <div class='wrapper'>
        <ejs-daterangepicker placeholder="Select a Range" ref="DateInstance"></ejs-daterangepicker>
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