
import Vue from "vue";
import { DateTimePickerPlugin, DateTimePicker, MaskedDateTime } from "@syncfusion/ej2-vue-calendars";

DateTimePicker.Inject(MaskedDateTime)
Vue.use(DateTimePickerPlugin);
export default Vue.extend({
  data: function() {
    return {
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
        <div class='wrapper'>
        <ejs-datetimepicker id="datetimepicker" :enableMask="true"></ejs-datetimepicker>
     </div>
  </div>
`,

});