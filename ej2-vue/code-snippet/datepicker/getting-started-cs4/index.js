
import Vue from "vue";
import { DatePickerPlugin } from "@syncfusion/ej2-vue-calendars";
import { FormValidator } from '@syncfusion/ej2-inputs';

Vue.use(DatePickerPlugin);

new Vue({
	el: '#app',
	template: `
  <div id="app">
    <div class='wrap'>
      <form id="form-element" class="form-horizontal">
           <div class="form-group" style="padding-top: 11px;">
                <div class="col-lg-8">
                    <ejs-datepicker id="datepicker" name="date" :change="onValueChange" class="form-control" placeholder='Select a date'></ejs-datepicker>
                </div>
            </div>
      </form>
    </div>
  </div>
`,

    data: function() {
        return {
          formObj: '',
          options : {
            customPlacement: function(inputelement, errorElement) {
                var parentElement = inputelement.closest('.form-group');
                parentElement.appendChild(errorElement);
            },
            rules: {
                'date': {
                    required: true
                }
            }
          }
        }
    },
  mounted: function () {
      this.formObj = new FormValidator('#form-element', this.options);
  },
    methods:  {
       onValueChange: function(args) {
           this.formObj.validate();
        }
    }

});