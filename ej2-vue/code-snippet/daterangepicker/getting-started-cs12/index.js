
import Vue from 'vue';
import { DateRangePickerPlugin } from '@syncfusion/ej2-vue-calendars';

Vue.use(DateRangePickerPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app">
      <div class='wrapper'>
        <ejs-daterangepicker :strictMode="mode" :placeholder="waterMark"></ejs-daterangepicker>
      </div>
    </div>
`,

   data () {
     return {
           waterMark : 'Select a Range',
           mode : true
        }
    }

});