<template>
  <div id="app">
    <ejs-button id="frButton" cssClass='e-outline' v-on:click="ChangeFrLocale">Change FR Locale</ejs-button>
    <ejs-button id='enButton' style="margin-left:5px"  cssClass='e-outline' v-on:click="ChangeEnLocale">Change EN Locale</ejs-button>
    <ejs-grid style="padding: 10px 10px" :allowPaging='true' :dataSource='data' height='220px'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=100></e-column>
        <e-column field='Freight' headerText='Freight' format="C2"  width=90></e-column>
        <e-column field="ShipCountry" headerText="Ship Country" width="100"></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>

<script>
import { L10n, setCulture, setCurrencyCode, loadCldr } from '@syncfusion/ej2-base';
import { GridComponent, ColumnsDirective, ColumnDirective, Page } from '@syncfusion/ej2-vue-grids';
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { data } from './datasource.js';
import frFRLocalization from './locale.json';
import cagregorian from './ca-gregorian.json';
import currencies from './currencies.json';
import numbers from './numbers.json';
import timeZoneNames from './timeZoneNames.json';
import numberingSystems from './numberingSystems.json'
setCulture('fr-FR'); // Change the Grid culture
setCurrencyCode('EUR');
L10n.load(frFRLocalization);
loadCldr(
  cagregorian,
  currencies,
  numbers,
  timeZoneNames,
  numberingSystems
);
export default {
name: "App",
components: {
"ejs-button":ButtonComponent,
"ejs-grid":GridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective
},
  data() {
    return {
      data: data,
    };
  },
  methods: {
    ChangeFrLocale: function () {
      setCulture('fr-FR'); // Change the Grid culture to French locale
      setCurrencyCode('EUR'); // Change the currency code based on French culture
    },

    ChangeEnLocale: function () {
      setCulture('en-US'); // Change the Grid culture to English locale
      setCurrencyCode('USD'); // Change the currency code based on American English culture
    }
  },
  provide: {
    grid: [Page]
  }
}
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-calendars/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material3.css";
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material3.css";
</style>