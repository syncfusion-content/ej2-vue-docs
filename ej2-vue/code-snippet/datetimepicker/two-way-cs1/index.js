
import Vue from "vue";
import { DateTimePickerPlugin } from "@syncfusion/ej2-vue-calendars";

Vue.use(DateTimePickerPlugin);

new Vue({
	el: '#app',
	template: `
<div id="app">
    <div id="wrapper1">
        <ejs-datetimepicker id="datetimepicker" v-model="date"></ejs-datetimepicker>
    </div>
    <div id="wrapper2">
        <ejs-datetimepicker id="datetimepicker1" v-model="date"></ejs-datetimepicker>
    </div>
</div>
`,

  data: function() {
    return {
      date: new Date()
    };
  }

});