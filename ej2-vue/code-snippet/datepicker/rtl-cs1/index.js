
import Vue from "vue";
import { loadCldr, L10n } from '@syncfusion/ej2-base';
import { DatePickerPlugin } from "@syncfusion/ej2-vue-calendars";
// Here we have referred local json files for preview purpose
import * as numberingSystems from './numberingSystems.json';
import * as gregorian from './ca-gregorian.json';
import * as numbers from './numbers.json';
import * as timeZoneNames from './timeZoneNames.json';

Vue.use(DatePickerPlugin);
loadCldr(numberingSystems, gregorian, numbers, timeZoneNames);
L10n.load({
    'he': {
      'datepicker': { placeholder: 'הזן תאריך',
             today: 'היו'}
    }
});

new Vue({
	el: '#app',
	template: `
    <div id="app">
      <div class='wrapper'>
        <ejs-datepicker id="datepicker" :locale="locale" :enableRtl="rtl" ></ejs-datepicker>
      </div>
    </div>
`,

    data () {
       return {
           locale: "he",
           rtl: true
        }
    }

});