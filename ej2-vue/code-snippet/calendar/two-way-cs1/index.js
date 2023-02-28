
import Vue from "vue";
import { CalendarPlugin } from "@syncfusion/ej2-vue-calendars";

Vue.use(CalendarPlugin);

new Vue({
	el: '#app',
	template: `
<div id="app">
    <div id="wrapper1">
        <ejs-calendar id="calendar" v-model="date"></ejs-calendar>
    </div>
    <div id="wrapper2">
        <ejs-calendar id="calendar1" v-model="date"></ejs-calendar>
    </div>
</div>
`,

  data: function() {
    return {
      date: new Date()
    };
  }

});