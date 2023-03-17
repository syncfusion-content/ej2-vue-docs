
import Vue from "vue";
import { DatePickerPlugin } from "@syncfusion/ej2-vue-calendars";
import { FormValidator } from "@syncfusion/ej2-vue-inputs";
import { queryParams } from "@syncfusion/ej2-base";
import { throws } from "assert";
Vue.use(DatePickerPlugin);


new Vue({
	el: '#app',
	template: `
  <div class="wrap">

    <form id="form-element" class="form-horizontal">
      <div class="form-group">
        <div class="col-sm-3 control-label">Select Date</div>
        <div class="col-sm-6">
          <ejs-datepicker
            id="datepicker"
            name="date"
            class="form-control"
            placeholder="Select a date"
          ></ejs-datepicker>
          <div class="error-element"></div>
        </div>
      </div>
    </form>
      `,

  name: "App",
  mounted() {
      var options = {
      rules: {
        date: { required: [true, "Select any value"] }
      },
      customPlacement: function(element, errorElement) {
        document.querySelector(".error-element").appendChild(errorElement);
      },
    };
     // defines FormValidator to validate the TimePicker
        var formObject = new FormValidator("#form-element", options);
  }

});