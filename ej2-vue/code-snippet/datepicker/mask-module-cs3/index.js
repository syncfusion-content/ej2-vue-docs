
import Vue from "vue";
import { DatePickerPlugin, MaskedDateTime, DatePicker } from "@syncfusion/ej2-vue-calendars";

DatePicker.Inject(MaskedDateTime)
Vue.use(DatePickerPlugin);
export default Vue.extend({
  data: function() {
    return {
      maskPlaceholderValue: {day: 'd', month: 'M', year: 'y'}
    }
  },
  provide: {
      datepicker: [MaskedDateTime]
  }  
});
new Vue({
	el: '#app',
	template: `
<div id="app">
        <div class='wrapper1'>
          <!-- Specifies the masked datepicker without mask placeholder. -->
         <ejs-datepicker id="datepicker"  :enableMask="true" ></ejs-datepicker>
     </div>
     <div class='wrapper2'>
          <!-- Specifies the masked datepicker with mask placeholder. -->
          <ejs-datepicker id="placeholder"  :enableMask="true" :maskPlaceholder='maskPlaceholderValue'></ejs-datepicker>
     </div>
  </div>
`,

});