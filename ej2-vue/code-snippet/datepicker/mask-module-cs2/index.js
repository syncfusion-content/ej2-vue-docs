
import Vue from "vue";
import { DatePickerPlugin, DatePicker, MaskedDateTime } from "@syncfusion/ej2-vue-calendars";

DatePicker.Inject(MaskedDateTime)
Vue.use(DatePickerPlugin);
export default Vue.extend({
  data: function() {
    return {
      dateFormat: 'M/d/yyyy'
    };
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
         <!-- Specifies the masked datepicker without format property. -->
         <ejs-datepicker id="datepicker" :enableMask='true' ></ejs-datepicker>
     </div>
     <div class='wrapper2'>
          <!-- Specifies the masked datepicker with format property. -->
         <ejs-datepicker id="format" :enableMask='true' :format='dateFormat'></ejs-datepicker>
     </div>
  </div>
`,

});