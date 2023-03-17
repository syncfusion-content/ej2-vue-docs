
import Vue from "vue";
import { DatePickerPlugin, DatePicker, MaskedDateTime } from "@syncfusion/ej2-vue-calendars";

DatePicker.Inject(MaskedDateTime)
Vue.use(DatePickerPlugin);
export default Vue.extend({
  data: function() {
    return {
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
        <div class='wrapper'>
         <ejs-datepicker id="datepicker" :enableMask="true"></ejs-datepicker>
     </div>
  </div>
`,

});