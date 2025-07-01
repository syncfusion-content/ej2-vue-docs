
import Vue from 'vue';
import { DateRangePickerPlugin } from '@syncfusion/ej2-vue-calendars';

Vue.use(DateRangePickerPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app">
      <div class='wrapper'>
        <ejs-daterangepicker :placeholder="waterMark" :startDate="startValue" :endDate="endValue" :format="dateFormat"></ejs-daterangepicker>
      </div>
  </div>
`,

data () {
    return {
      waterMark: 'Select a range',
      startValue: new Date(new Date().setDate(3)),
      endValue: new Date(new Date().setDate(28)),
      dateFormat: 'yyyy-MM-dd'
    }
  }

});