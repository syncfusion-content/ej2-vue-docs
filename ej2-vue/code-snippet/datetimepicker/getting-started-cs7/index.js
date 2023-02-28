
import Vue from 'vue';
import { DateTimePickerPlugin } from '@syncfusion/ej2-vue-calendars';

Vue.use(DateTimePickerPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app">
      <div class='wrapper'>
        <ejs-datetimepicker :enabled="enable" :placeholder="waterMark" ></ejs-datetimepicker>
      </div>
    </div>
`,

   data () {
        return {
           enable : false,
           waterMark: "Select a date and time"
        }
    }

});