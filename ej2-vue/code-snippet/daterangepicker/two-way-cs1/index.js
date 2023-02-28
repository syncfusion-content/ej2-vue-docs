
import Vue from "vue";
import { DateRangePickerPlugin } from "@syncfusion/ej2-vue-calendars";

Vue.use(DateRangePickerPlugin);

new Vue({
	el: '#app',
	template: `
<div id="app">
    <div id="wrapper1">
        <ejs-daterangepicker id="daterangepicker" :placeholder="waterMark" v-model="date"></ejs-daterangepicker>
    </div>
    <div id="wrapper2">
        <ejs-daterangepicker id="daterangepicker1" :placeholder="waterMark" v-model="date"></ejs-daterangepicker>
    </div>
</div>
`,

  data: function() {
    return {
        waterMark: "Select a Range",
        date: null
    };
  }

});