
import Vue from 'vue';
import { CalendarPlugin } from '@syncfusion/ej2-vue-calendars';

Vue.use(CalendarPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app">
    <h1>{{ msg }}</h1>
    <ejs-calendar ></ejs-calendar>
  </div>
`,

  name: 'app',
  data () {
    return {
      msg: 'Hi EJ2 Components for Vue',
      name: 'Calendar'
    }
  }

});