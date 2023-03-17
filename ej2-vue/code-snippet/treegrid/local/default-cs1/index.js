
import Vue from "vue";
import { L10n, setCulture } from '@syncfusion/ej2-base';
import { TreeGridPlugin, Page, Toolbar, Filter } from "@syncfusion/ej2-vue-treegrid";
import { sampleData } from "./datasource.js";

setCulture('de-DE');

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

Vue.use(TreeGridPlugin);


new Vue({
	el: '#app',
	template: `
<div id="app">
      <ejs-treegrid :dataSource='data' locale='de-DE' childMapping='subtasks' :treeColumnIndex='1' :allowPaging='true' :pageSettings='pageSettings' :allowFiltering='true' :filterSettings='filterSettings' :toolbar='toolbar'>
        <e-columns>
          <e-column field='taskID' headerText='Task ID' width='90' textAlign='Right'></e-column>
          <e-column field='taskName' headerText='Task Name' width='160'></e-column>
          <e-column field='startDate' headerText='Start Date' width='90' format="yMd" textAlign='Right'></e-column>
          <e-column field='duration' headerText='Duration' width='80' textAlign='Right'></e-column>
        </e-columns>
      </ejs-treegrid>
</div>
`,

  data ()  {
    return {
      data: sampleData,
      pageSettings: { pageSize: 7 },
      filterSettings: { type: 'Menu' },
      toolbar: ['Print']
    };
  },
  provide: {
      treegrid: [ Page, Toolbar, Filter ]
    }

});