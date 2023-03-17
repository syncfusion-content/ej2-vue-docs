
import Vue from 'vue';
import { DatePickerPlugin } from '@syncfusion/ej2-vue-calendars';

Vue.use(DatePickerPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
   <div class='wrapper'>
    <ejs-datepicker :min="minDate" :max="maxDate" :value="dateVal" ></ejs-datepicker>
  </div>
  </div>
`,

  data () {
    return {
       minDate : new Date("05/09/2017"),
       maxDate : new Date("05/15/2017"),
       dateVal : new Date("05/11/2017")
    }
  }

});