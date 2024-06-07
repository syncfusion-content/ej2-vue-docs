<template>
<div id="app">
      <ejs-treegrid :dataSource='data' locale='de-DE' childMapping='subtasks' :treeColumnIndex='1' :allowPaging='true' :pageSettings='pageSettings' :allowFiltering='true' :filterSettings='filterSettings' :toolbar='toolbar'>
        <e-columns>
          <e-column field='orderID' headerText='Order ID' width='90' textAlign='Right'></e-column>
          <e-column field='orderName' headerText='Order Name' width='160'></e-column>
          <e-column field='price' headerText='Price' width='90' :format='formatOptions' textAlign='Right'></e-column>
          </e-columns>
      </ejs-treegrid>
</div>
</template>
<script>
/* eslint-disable */
import { L10n, loadCldr, setCulture, setCurrencyCode } from '@syncfusion/ej2-base';
import * as currencies from './currencies.json';
import * as cagregorian from './ca-gregorian.json';
import * as numbers from './numbers.json';
import * as timeZoneNames from './timeZoneNames.json';
import * as numberingSystems from './numberingSystems.json';
import { TreeGridComponent, Page, Toolbar, Filter, ColumnDirective, ColumnsDirective } from "@syncfusion/ej2-vue-treegrid";
import { formatData } from "./datasource.js";

setCulture('de-DE');
setCurrencyCode('EUR');

L10n.load({
    'de-DE': {
        'treegrid': {
            'EmptyRecord': 'Keine Aufzeichnungen angezeigt',
            'Expand All': 'Alle erweitern',
            'Collapse All': 'Alles einklappen',
            "Print": "Drucken",
            "Pdfexport": "PDF-Export",
            "Excelexport": "Excel-Export",
            "Wordexport": "Word-Export",
            "FilterButton": "Filter",
            "ClearButton": "klar",
            "StartsWith": "Beginnt mit",
            "EndsWith": "Endet mit",
            "Contains": "Enthält",
            "Equal": "Gleich",
            "NotEqual": "Nicht gleich",
            "LessThan": "Weniger als",
            "LessThanOrEqual": "Weniger als oder gleich",
            "GreaterThan": "Größer als",
            "GreaterThanOrEqual": "Größer als oder gleich",
            "EnterValue": "Geben Sie den Wert ein",
            "FilterMenu": "Filter"
        },
        'pager': {
            'currentPageInfo': '{0} von {1} Seiten',
            'totalItemsInfo': '({0} Beiträge)',
            'firstPageTooltip': 'Zur ersten Seite',
            'lastPageTooltip': 'Zur letzten Seite',
            'nextPageTooltip': 'Zur nächsten Seite',
            'previousPageTooltip': 'Zurück zur letzten Seit',
            'nextPagerTooltip': 'Zum nächsten Pager',
            'previousPagerTooltip': 'Zum vorherigen Pager'
        },
        "dropdowns": {
            "noRecordsTemplate": "Keine Aufzeichnungen gefunden"
        },
        "datepicker": {
            "placeholder": "Wählen Sie ein Datum",
            "today": "heute"
        }
    }
});



export default {
name: "App",
components: {
"ejs-treegrid":TreeGridComponent,
"e-columns":ColumnsDirective,
"e-column":ColumnDirective,

},

  data ()  {
    return {
      data: formatData,
      pageSettings: { pageSize: 7 },
      filterSettings: { type: 'Menu' },
      formatOptions: { format:'C2' , useGrouping: false, minimumSignificantDigits:1, maximumSignificantDigits:3, currency:'EUR' },
      toolbar: ['Print']
    };
  },
  provide: {
      treegrid: [ Page, Toolbar, Filter ]
    }
}
</script>