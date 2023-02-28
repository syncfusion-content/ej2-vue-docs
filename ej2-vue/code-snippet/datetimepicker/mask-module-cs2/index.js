
import Vue from "vue";
import { DateTimePickerPlugin, DateTimePicker, MaskedDateTime } from "@syncfusion/ej2-vue-calendars";

DateTimePicker.Inject(MaskedDateTime)
Vue.use(DateTimePickerPlugin);
export default Vue.extend({
  data: function() {
    return {
      dateFormat: 'M/d/yyyy hh:mm a'
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
        <!-- Specifies the masked datetimepicker without format property. -->
        <ejs-datetimepicker id="datetimepicker" :enableMask="true" ></ejs-datetimepicker>
     </div>
     <div class='wrapper2'>
        <!-- Specifies the masked datetimepicker with format property. -->
        <ejs-datetimepicker id="datetimepicker" :enableMask="true" :format='dateFormat'></ejs-datetimepicker>
     </div>
  </div>
`,

});