
import Vue from 'vue';
import { TabPlugin } from '@syncfusion/ej2-vue-navigations';
import { DatePickerComponent,CalendarComponent, DatePickerPlugin,CalendarPlugin } from '@syncfusion/ej2-vue-calendars';
Vue.use(TabPlugin);
Vue.use(TabPlugin);
Vue.component(DatePickerPlugin.name, DatePickerComponent);
Vue.component(CalendarPlugin.name, CalendarComponent);

new Vue({
	el: '#app',
	template: `
    <div id="app">
    <ejs-tab id="element" ref=element>
                <e-tabitems>
                    <e-tabitem :header='headerText0' :content='Template1'></e-tabitem>
                    <e-tabitem :header='headerText1' :content='Template2'></e-tabitem>
                </e-tabitems>
            </ejs-tab>
  </div>
`,

  name: 'app',
  data: function(){
    return {
        headerText0: { text: 'Tab1' },
        headerText1: { text: 'Tab2' },
        headerText2: { text: 'Tab3' },
        Template1: function () {
        return {
          template: Vue.component('DatePickerComponent', {
            template: ' <ejs-datepicker :min="minDate" :max="maxDate" :value="dateVal" ></ejs-datepicker>',
            data() { return { minDate : new Date("05/09/2017"),
                             maxDate : new Date("05/15/2017"),
                             dateVal : new Date("05/11/2017") }; }
          })
        }
      },
      Template2: function () {
        return {
          template: Vue.component('DatePickerComponent', {
            template: '<ejs-calendar id="calendar" ></ejs-calendar>',
            data() { return { }; }
          })
        }
      }
   }
 }

});