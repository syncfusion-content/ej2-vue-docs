
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
'de': {
        'daterangepicker': {
           placeholder: 'Wählen Sie einen Bereich aus',
           startLabel: 'Wählen Sie Startdatum',
           endLabel: 'Wählen Sie Enddatum',
           applyText: 'Sich bewerben',
           cancelText: 'Stornieren',
           selectedDays: 'Ausgewählte Tage',
           days: 'Tage',
           customRange: 'benutzerdefinierten Bereich'
        }
    }
});

new Vue({
	el: '#app',
	template: `
    <div id="app">
      <div class='wrapper'>
        <ejs-daterangepicker id="daterange" locale="de" ></ejs-daterangepicker>
      </div>
    </div>
`,

});