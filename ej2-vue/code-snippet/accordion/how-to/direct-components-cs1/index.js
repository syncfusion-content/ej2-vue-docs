
import Vue from 'vue';
import { AccordionPlugin } from "@syncfusion/ej2-vue-navigations";
Vue.use(AccordionPlugin);
import { DatePickerComponent,CalendarComponent, DatePickerPlugin,CalendarPlugin } from '@syncfusion/ej2-vue-calendars';
Vue.use(DatePickerPlugin);
Vue.use(CalendarPlugin);
import { NumericTextBoxComponent,NumericTextBoxPlugin } from "@syncfusion/ej2-vue-inputs";
Vue.use(NumericTextBoxPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app">
   <ejs-accordion >
        <e-accordionitems>
        <e-accordionitem expanded='true' header='Calendar' :content='Template1'></e-accordionitem>
        <e-accordionitem header='DatePicker' :content='Template2'></e-accordionitem>
        <e-accordionitem header='Numeric Textbox' :content='Template3'></e-accordionitem>
      </e-accordionitems>
    </ejs-accordion>
  </div>
`,

  name: 'app',
  data: function(){
    return {
         Template1: function () {
          return {
          template: Vue.component('CalendarComponent', {
            template: '<ejs-calendar ></ejs-calendar>',
            data() { return {  }; }
          })
        }
      },
        Template2: function () {
        return {
          template: Vue.component('DatePickerComponent', {
            template: ' <ejs-datepicker :min="minDate" :max="maxDate" :value="dateVal" ></ejs-datepicker>',
            data() { return { minDate : new Date("05/09/2017"),
                             maxDate : new Date("05/15/2017"),
                             dateVal : new Date("05/11/2017") }; }
          })
        }
      },
      Template3: function () {
        return {
          template: Vue.component('NumericTextBoxComponent', {
            template: '<ejs-numerictextbox value="100"></ejs-numerictextbox>',
            data() { return { }; }
          })
        }
      }
   }
 }

});