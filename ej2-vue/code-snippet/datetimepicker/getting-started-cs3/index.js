
import Vue from 'vue';
import { DateTimePickerPlugin } from '@syncfusion/ej2-vue-calendars';

Vue.use(DateTimePickerPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app">
      <div class='wrapper'>
         <ejs-datetimepicker :placeholder="Select Date" :floatLabelType="auto"></ejs-datetimepicker>
      </div>
    </div>
`,

    data () {
    return {
      waterMark : 'Select a datetime'
    }
  }

});