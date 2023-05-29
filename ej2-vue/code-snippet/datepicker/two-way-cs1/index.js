
import Vue from "vue";
import { DatePickerPlugin } from "@syncfusion/ej2-vue-calendars";

Vue.use(DatePickerPlugin);

new Vue({
	el: '#app',
	template: `
<div id="app">
    <div id="wrapper1">
        <ejs-datepicker id="datepicker" v-model="date"></ejs-datepicker>
    </div>
    <div id="wrapper2">
        <ejs-datepicker id="datepicker1" v-model="date"></ejs-datepicker>
    </div>
</div>
`,

  data: function() {
    return {
      date: new Date()
    };
  }

});