
import Vue from 'vue';
import { DateRangePickerPlugin } from '@syncfusion/ej2-vue-calendars';

Vue.use(DateRangePickerPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app">
      <div class='wrapper'>
        <ejs-daterangepicker :placeholder="waterMark" :renderDayCell="disableDate" ></ejs-daterangepicker>
      </div>
    </div>
`,

   data () {
     return {
         waterMark : 'Select a Range'
        }
    },
    methods: {
        disableDate: function(args) {
            if (args.date.getDay() === 0 || args.date.getDay() === 6) {
             args.isDisabled = true;
            }
        }
    }


});