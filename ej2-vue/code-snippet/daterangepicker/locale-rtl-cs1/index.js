
import Vue from 'vue';
import { loadCldr,L10n } from '@syncfusion/ej2-base';
import { DateRangePickerPlugin } from '@syncfusion/ej2-vue-calendars';
// Here we have referred local json files for preview purpose
import * as numberingSystems from './numberingSystems.json';
import * as gregorian from './ca-gregorian.json';
import * as numbers from './numbers.json';
import * as timeZoneNames from './timeZoneNames.json';

Vue.use(DateRangePickerPlugin);
loadCldr(numberingSystems, gregorian, numbers, timeZoneNames);

L10n.load({
    'he': {
        'daterangepicker': {
            placeholder: 'בחר טווח',
            startLabel: 'תווית התחלה',
            endLabel: 'ח',
            applyText: 'להחיל טקסט',
            cancelText: 'בטל טקסט',
            selectedDays: 'ימים נבחרים',
            days: 'أימים',
            customRange: 'טווח מותאם אישית'
        }
    }
});

new Vue({
	el: '#app',
	template: `
    <div id="app">
      <div class='wrapper'>
        <ejs-daterangepicker id="daterange" :locale="locale" :enableRtl="rtl" ></ejs-daterangepicker>
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