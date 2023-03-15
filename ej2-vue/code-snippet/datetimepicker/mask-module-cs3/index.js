
import Vue from "vue";
import { DateTimePickerPlugin, DateTimePicker, MaskedDateTime } from "@syncfusion/ej2-vue-calendars";

DateTimePicker.Inject(MaskedDateTime)
Vue.use(DateTimePickerPlugin);
export default Vue.extend({
  data: function() {
    return {
      maskPlaceholderValue: {day: 'd', month: 'M', year: 'y', hour: 'h', minute: 'm', second: 's'}
    };
  },
  provide: {
      datetimepicker: [MaskedDateTime]
  }  
});
new Vue({
	el: '#app',
	template: `
<div id="app">
        <div class='wrapper1'>
         <!-- Specifies the masked datetimepicker without mask placeholder. -->
         <ejs-datetimepicker id="datetimepicker" :enableMask="true" ></ejs-datetimepicker>
     </div>
     <div class='wrapper2'>
          <!-- Specifies the masked datetimepicker with mask placeholder. -->
         <ejs-datetimepicker id="placeholder" :enableMask="true" maskPlaceholder='maskPlaceholderValue'></ejs-datetimepicker>
     </div>
  </div>
`,

});