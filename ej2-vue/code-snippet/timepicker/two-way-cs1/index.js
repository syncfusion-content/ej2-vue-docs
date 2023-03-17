
import Vue from "vue";
import { TimePickerPlugin } from "@syncfusion/ej2-vue-calendars";

Vue.use(TimePickerPlugin);

new Vue({
	el: '#app',
	template: `
<div id="app">
    <div id="wrapper1">
        <ejs-timepicker id="timepicker" v-model="date"></ejs-timepicker>
    </div>
    <div id="wrapper2">
        <ejs-timepicker id="timepicker1" v-model="date"></ejs-timepicker>
    </div>
</div>
`,

  data: function() {
    return {
      date: new Date()
    };
  }

});