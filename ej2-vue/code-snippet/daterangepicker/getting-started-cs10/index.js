
import Vue from 'vue';
import { DateRangePickerPlugin } from '@syncfusion/ej2-vue-calendars';

Vue.use(DateRangePickerPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app">
      <div class='wrapper'>
        <ejs-daterangepicker :min="minDate" :max="maxDate" :placeholder="waterMark"></ejs-daterangepicker>
      </div>
    </div>
`,

   data () {
        return {
            waterMark:'Select a Range',
            minDate : new Date(new Date().getFullYear(), new Date().getMonth(), 15),
            maxDate :  new Date(new Date().getFullYear(), new Date().getMonth()+1, 15)
        }
    }

});