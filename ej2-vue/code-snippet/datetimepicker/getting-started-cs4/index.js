
import Vue from 'vue';
import { DateTimePickerPlugin } from '@syncfusion/ej2-vue-calendars';

Vue.use(DateTimePickerPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app">
      <div class='wrapper'>
        <ejs-datetimepicker :min="minDate" :max="maxDate" :placehoder="waterMark" :value="dateVal"></ejs-datetimepicker>
      </div>
    </div>
`,

   data () {
        return {
        minDate :  new Date(new Date().getFullYear(), new Date().getMonth(), 7, 0, 0, 0),
        maxDate :  new Date(new Date().getFullYear(), new Date().getMonth(), 27, new Date().getHours(), new Date().getMinutes(), new Date().getSeconds()),
        dateVal : new Date(new Date().setDate(14)),
        waterMark : 'Select a datetime'
        }
    }

});