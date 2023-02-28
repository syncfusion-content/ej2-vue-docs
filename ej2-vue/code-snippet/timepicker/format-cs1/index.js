
import Vue from 'vue';
import { TimePickerPlugin } from '@syncfusion/ej2-vue-calendars';

Vue.use(TimePickerPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app">
    <div class='wrapper'>
    <ejs-timepicker :step="timeStep" :format="timeFormat" :value="timeVal"></ejs-timepicker>
  </div>
`,

  data () {
        return {
           timeStep : 60,
           timeFormat : 'HH:mm',
           timeVal : new Date()
        }
    }

});