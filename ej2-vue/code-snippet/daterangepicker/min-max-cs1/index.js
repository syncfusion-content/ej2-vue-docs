
import Vue from 'vue';
import { DateRangePickerPlugin } from '@syncfusion/ej2-vue-calendars';

Vue.use(DateRangePickerPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app">
      <div class='wrapper'>
        <ejs-daterangepicker :startDate="startVal" :endDate="endVal" :placeholder="waterMark"></ejs-daterangepicker>
      </div>
    </div>
`,

   data () {
        return {
           startVal : new Date("11/12/2019 12:00 PM"),
           endVal : new Date("11/25/2019 5:00 PM"),
           waterMark : 'Select a Range'
        }
    }

});