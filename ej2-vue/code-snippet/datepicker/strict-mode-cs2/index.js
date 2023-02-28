
import Vue from "vue";
import { DatePickerPlugin } from "@syncfusion/ej2-vue-calendars";

Vue.use(DatePickerPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
        <div class='wrap'>
           <ejs-datepicker id='datepicker' :value='dateVal' :min='minVal' :max='maxVal'></ejs-datepicker>
        </div>
  </div>
`,

  data () {
      return {
        dateVal: new Date('5/28/2017'),
        minVal: new Date('5/5/2017'),
        maxVal: new Date('5/25/2017')
    }
  }

});