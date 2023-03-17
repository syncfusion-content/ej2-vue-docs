
import Vue from "vue";
import { loadCldr, L10n } from '@syncfusion/ej2-base';
import { CalendarPlugin } from "@syncfusion/ej2-vue-calendars";
// Here we have referred local json files for preview purpose
import * as numberingSystems from './numberingSystems.json';
import * as gregorian from './ca-gregorian.json';
import * as numbers from './numbers.json';
import * as timeZoneNames from './timeZoneNames.json';

Vue.use(CalendarPlugin);
loadCldr(numberingSystems, gregorian, numbers, timeZoneNames);

L10n.load({
    'de': {
      'calendar': { today: 'heute'}
    }
});

new Vue({
	el: '#app',
	template: `
  <div id="app">
        <div class='wrap'>
           <ejs-calendar id='calendar' locale='de'></ejs-calendar>
        </div>
  </div>
`,

});