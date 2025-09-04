
import Vue from 'vue';
import { DatePickerPlugin } from '@syncfusion/ej2-vue-calendars';

Vue.use(DatePickerPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app">
      <div class='wrapper'>
        <ejs-datepicker :placeholder="waterMark" :serverTimezoneOffset="serverOffset"></ejs-datepicker>
      </div>
  </div>
`,

data () {
    return {
      waterMark : 'Select a date',
      serverOffset : 5.5
    }
  }

});