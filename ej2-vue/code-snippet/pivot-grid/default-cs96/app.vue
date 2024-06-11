<template>
  <div id="app">
    <ejs-pivotview :dataSourceSettings="dataSourceSettings" :height="height" :showFieldList="showFieldList"
      :locale="locale"> </ejs-pivotview>
  </div>
</template>
<script>
import { loadCldr, L10n, setCulture, setCurrencyCode } from '@syncfusion/ej2-base';
import * as currencies from './currencies.json';
import * as cagregorian from './ca-gregorian.json';
import * as numbers from './numbers.json';
import * as timeZoneNames from './timeZoneNames.json';
import * as numberingSystems from './numberingSystems.json';
import { PivotViewComponent, FieldList } from "@syncfusion/ej2-vue-pivotview";
import { pivotData } from './pivotData.js';

loadCldr(currencies, cagregorian, numbers, timeZoneNames, numberingSystems);
setCulture('de');
setCurrencyCode('EUR');

L10n.load({
  'de-DE': {
    'pivotview': {
      'grandTotal': 'Gesamtsumme',
      'total': 'Insgesamt',
      'value': 'Wert',
      'noValue': 'Kein Wert',
      'row': 'Zeile',
      'column': 'Spalte',
      'collapse': 'Zusammenbruch',
      'expand': 'Erweitern'
    },
    "pivotfieldlist": {
      'fieldList': 'Feld Liste',
      'dropRowPrompt': 'Drop Reihe hier',
      'dropColPrompt': 'Drop column Hier',
      'dropValPrompt': 'Drop wert hier',
      'dropFilterPrompt': 'Drop Filter Hier',
      'addPrompt': 'Feld hinzufügen',
      'centerHeader': 'Ziehen Sie die Felder zwischen den Bereichen unten:',
      'add': 'Hinzufügen',
      'drag': 'Ziehen',
      'filters': 'Filter',
      'rows': 'Zeilen',
      'columns': 'Spalten',
      'values': 'Werte',
      'error': 'Fehler',
      'dropAction': 'Berechnetes Feld nicht in jeder anderen Region außer Wert Achse sein.',
      'search': 'Suche',
      'close': 'Schließen',
      'cancel': 'Abbrechen',
      'delete': 'Löschen',
      'alert': 'Warnung',
      'warning': 'Warnung',
      'ok': 'OK',
      'allFields': 'Alle Felder',
      'noMatches': 'Keine Treffer'
    }
  }
});

export default {
  name: "App",
  components: {
    "ejs-pivotview": PivotViewComponent
  },
  data() {
    return {
      dataSourceSettings: {
        dataSource: pivotData,
        drilledMembers: [{ name: 'Country', items: ['France'] }],
        filterSettings: [{ name: 'Country', type: 'exclude', items: ['United States'] }],
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C2', currency: 'EUR' }],
        filters: []
      },
      height: 350,
      showFieldList: true,
      locale: 'de-DE'
    }
  },
  provide: {
    pivotview: [FieldList]
  },
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/material.css";
</style>