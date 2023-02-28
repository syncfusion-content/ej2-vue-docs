
import Vue from "vue";
import { TimePickerPlugin, TimePicker, MaskedDateTime } from "@syncfusion/ej2-vue-calendars";

TimePicker.Inject(MaskedDateTime)
Vue.use(TimePickerPlugin);
export default Vue.extend({
  data: function() {
    return {
    };
  },
  provide: {
      timepicker: [MaskedDateTime]
  }  
});
new Vue({
	el: '#app',
	template: `
<div id="app">
        <div class='wrapper'>
        <ejs-timepicker id="timepicker" :enableMask="true"></ejs-timepicker>
     </div>
  </div>
`,

});