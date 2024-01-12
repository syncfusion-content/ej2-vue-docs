import Vue from 'vue';
import { TabPlugin } from '@syncfusion/ej2-vue-navigations';
import { DatePickerPlugin, CalendarPlugin } from '@syncfusion/ej2-vue-calendars';

Vue.use(TabPlugin);
Vue.use(DatePickerPlugin);
Vue.use(CalendarPlugin);

new Vue({
  el: '#app',
  template: `
  <div id="app">
    <ejs-tab id='element'>
      <e-tabitems>
        <e-tabitem :header='headerText0' :content="'datePickerTemplate'">
          <template v-slot:datePickerTemplate>
            <ejs-datepicker></ejs-datepicker></template>
        </e-tabitem>
        <e-tabitem :header='headerText1' :content="'calendarTemplate'">
          <template v-slot:calendarTemplate>
            <ejs-calendar></ejs-calendar></template>
        </e-tabitem>
      </e-tabitems>
    </ejs-tab>
  </div>
`,

  name: 'app',
  data: function () {
    return {
        headerText0: { text: 'Datepicker' },
        headerText1: { text: 'Calendar' },    
    }
  }
});