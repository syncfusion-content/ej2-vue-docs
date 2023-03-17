
import Vue from 'vue';
import { DateRangePickerPlugin } from '@syncfusion/ej2-vue-calendars';

Vue.use(DateRangePickerPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app">
      <div class='wrapper'>
       <ejs-daterangepicker :placeholder="waterMark">
            <e-presets>
                <e-preset label="This Week" :start='weekStart' :end='weekEnd'></e-preset>
                <e-preset label="This Month" :start='monthStart' :end='monthEnd'></e-preset>
                <e-preset label="Last Month" :start='lastStart' :end='lastEnd'></e-preset>
                <e-preset label="Last Year" :start='yearStart' :end='yearEnd'></e-preset>
            </e-presets>
        </ejs-daterangepicker>
      </div>
    </div>
`,

   data () {
     return {
           waterMark : 'Selct a Range',
           weekStart :  new Date(new Date(new Date().setDate(new Date().getDate() - (new Date().getDay() + 7) % 7)).toDateString()),

           weekEnd : new Date(new Date(new Date().setDate(new Date(new Date().setDate((new Date().getDate()
           - (new Date().getDay() + 7) % 7))).getDate() + 6)).toDateString()),

           monthStart :  new Date(new Date(new Date().setDate(1)).toDateString()),

           monthEnd : new Date(new Date(new Date(new Date().setMonth(new Date().getMonth() + 1)).setDate(0)).toDateString()),

           lastStart : new Date(new Date(new Date(new Date().setMonth(new Date().getMonth() - 1)).setDate(1)).toDateString()),

           lastEnd : new Date(new Date(new Date().setDate(0)).toDateString()),
           yearStart : new Date(new Date(new Date().getFullYear() - 1, 0, 1).toDateString()),
           yearEnd  :  new Date(new Date(new Date().getFullYear() - 1, 11, 31).toDateString())
        }
    }

});