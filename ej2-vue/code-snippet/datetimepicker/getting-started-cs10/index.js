
import Vue from 'vue';
import { DateTimePickerPlugin } from '@syncfusion/ej2-vue-calendars';

Vue.use(DateTimePickerPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app">
      <div class='wrapper'>
        <ejs-datetimepicker :min="minDate" :max="maxDate" :value="dateVal" :placeholder="waterMark" ></ejs-datetimepicker>
      </div>
    </div>
`,

   data () {
        return {
           minDate : new Date('5/5/2017 2:00 PM'),
           maxDate : new Date('5/25/2017 3:00 PM'),
           dateVal : new Date('5/25/2017 4:00 PM'),
           waterMark: "Select a date and time"
        }
    }

});