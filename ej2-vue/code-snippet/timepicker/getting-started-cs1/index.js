
import Vue from 'vue';
import { TimePickerPlugin } from '@syncfusion/ej2-vue-calendars';

Vue.use(TimePickerPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app">
      <div class='wrapper'>
        <ejs-timepicker :placeholder="waterMark"></ejs-timepicker>
      </div>
    </div>
`,

  data () {
    return {
      waterMark : 'Select a time'
    }
  }

});