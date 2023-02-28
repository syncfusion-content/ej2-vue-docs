
import Vue from 'vue';
import { DateTimePickerPlugin } from '@syncfusion/ej2-vue-calendars';

Vue.use(DateTimePickerPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app">
      <div class='wrapper'>
         <ejs-datetimepicker :placeholder="waterMark" :min="minDate" :max="maxDate"  :value="val"></ejs-datetimepicker>
      </div>
    </div>
`,

    data () {
    return {
      waterMark : 'Select a datetime',
       minDate : new Date('5/5/2019 2:00 AM'),
       maxDate : new Date('5/25/2019 2:00 AM'),
       val : new Date('5/10/2019 12:00 AM')
    }
  }

});