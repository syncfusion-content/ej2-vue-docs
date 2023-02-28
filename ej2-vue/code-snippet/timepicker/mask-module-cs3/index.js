
import Vue from "vue";
import { TimePickerPlugin, TimePicker, MaskedDateTime } from "@syncfusion/ej2-vue-calendars";

TimePicker.Inject(MaskedDateTime)
Vue.use(TimePickerPlugin);
export default{
  data() {
    return {
      maskPlaceholderValue: { hour: 'h', minute: 'm', second: 's' }
    };
  },
  provide: {
      timepicker: [MaskedDateTime]
  }  
};
new Vue({
	el: '#app',
	template: `
<div id="app">
        <div class='wrapper1'>
        <!-- Specifies the masked timepicker without mask placeholder. -->
        <ejs-timepicker id="timepicker" :enableMask="true" ></ejs-timepicker>
     </div>
     <div class='wrapper2'>
        <!-- Specifies the masked timepicker with mask placeholder. -->
        <ejs-timepicker id="placeholder" :enableMask="true" :maskPlaceholder="maskPlaceholderValue"></ejs-timepicker>
     </div>
  </div>
`,

});