<template>
  <div id="app">
    <ejs-pivotview :dataSourceSettings="dataSourceSettings" :height="height" :showFieldList="showFieldList"
      :locale="locale"> </ejs-pivotview>
  </div>
</template>
<script>
import { L10n } from '@syncfusion/ej2-base';
import { PivotViewComponent, FieldList } from "@syncfusion/ej2-vue-pivotview";
import { pivotData } from './pivotData.js';

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
        expandAll: false,
        drilledMembers: [{ name: 'Country', items: ['France'] }],
        filterSettings: [{ name: 'Country', type: 'exclude', items: ['United States'] }],
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: []
      },
      height: 350,
      showFieldList: true,
      locale: 'de-DE'
    }
  },
  provide: {
    pivotview: [FieldList]
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/tailwind3.css";
</style>