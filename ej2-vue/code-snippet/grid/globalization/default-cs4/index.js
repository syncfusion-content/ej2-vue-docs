
import Vue from "vue";
import { L10n, loadCldr, setCulture, setCurrencyCode } from '@syncfusion/ej2-base';
import cagregorian from './ca-gregorian.json';
import currencies from './currencies.json';
import numbers from './numbers.json';
import timeZoneNames from './timeZoneNames.json';
import numberingSystems from './numberingSystems.json'
import deDELocalization from './locale.json'
import { GridPlugin, Page, Group } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';

setCulture('de-DE');
setCurrencyCode('EUR');
L10n.load(deDELocalization);
loadCldr(
    cagregorian,
    currencies,
    numbers,
    timeZoneNames,
    numberingSystems
);

Vue.use(GridPlugin);


new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-grid :dataSource='data' :allowGrouping='true' :allowPaging='true' height='315px'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
                <e-column field='Freight' headerText='Freight' :format='formatOptions' textAlign='Right' width=80></e-column>
                <e-column field='ShipName' headerText='Ship Name' width=120></e-column>
            </e-columns>
        </ejs-grid>
    </div>`,

  data() {
    return {
      data: data,
      formatOptions: { format:'C2' , useGrouping: false, minimumSignificantDigits:1, maximumSignificantDigits:3 },
    };
  },
  provide: {
    grid: [Page, Group]
  }
});