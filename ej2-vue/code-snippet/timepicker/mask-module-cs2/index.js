
import Vue from "vue";
import { TimePickerPlugin, TimePicker, MaskedDateTime } from "@syncfusion/ej2-vue-calendars";

TimePicker.Inject(MaskedDateTime)
Vue.use(TimePickerPlugin);
export default{
  data() {
    return {
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
         <!-- Specifies the masked timepicker without format property. -->
         <ejs-timepicker id="timepicker" :enableMask="true" ></ejs-timepicker>
     </div>
     <div class='wrapper2'>
          <!-- Specifies the masked timepicker with format property. -->
         <ejs-timepicker id="format" :enableMask="true" format="hh:mm a"></ejs-timepicker>
     </div>
  </div>
`,

});