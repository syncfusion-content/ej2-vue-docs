<template>
<div id="app">
      <ejs-treegrid :dataSource='data' locale='ar-AE' childMapping='subtasks' :treeColumnIndex='1' :allowPaging='true' :pageSettings='pageSettings' :allowFiltering='true' :filterSettings='filterSettings' :toolbar='toolbar' :enableRtl='true'>
        <e-columns>
          <e-column field='taskID' headerText='Task ID' width='90' textAlign='Right'></e-column>
          <e-column field='taskName' headerText='Task Name' width='160'></e-column>
          <e-column field='startDate' headerText='Start Date' width='90' format="yMd" textAlign='Right'></e-column>
          <e-column field='duration' headerText='Duration' width='80' textAlign='Right'></e-column>
        </e-columns>
      </ejs-treegrid>
</div>
</template>
<script>

import { L10n, setCulture } from '@syncfusion/ej2-base';
import { TreeGridComponent, Page, Toolbar, Filter, ColumnDirective, ColumnsDirective } from "@syncfusion/ej2-vue-treegrid";
import { sampleData } from "./datasource.js";

setCulture('ar-AE');

L10n.load({
    'ar-AE': {
        'treegrid': {
            "EmptyRecord": "لا سجلات لعرضها",
            "Print": "طباعة",
            "FilterButton": "منقي",
            "ClearButton": "واضح",
            "StartsWith": "ابدا ب",
            "EndsWith": "ينتهي مع",
            "Contains": "يحتوي على",
            "Equal": "مساو",
            "NotEqual": "غير متساوي",
            "LessThan": "أقل من",
            "LessThanOrEqual": "اصغر من او يساوي",
            "GreaterThan": "أكثر من",
            "GreaterThanOrEqual": "أكبر من أو يساوي",
            "ChooseDate": "اختر تاريخا",
            "EnterValue": "أدخل القيمة",
            "FilterMenu": "منقي"
        },
        'pager': {
            'currentPageInfo': '{0} من {1} صفحة',
            'totalItemsInfo': '({0} العناصر)',
            'firstPageTooltip': 'انتقل إلى الصفحة الأولى',
            'lastPageTooltip': 'انتقل إلى الصفحة الأخيرة',
            'nextPageTooltip': 'انتقل إلى الصفحة التالية',
            'previousPageTooltip': 'انتقل إلى الصفحة السابقة',
            'nextPagerTooltip': 'الذهاب إلى بيجر المقبل',
            'previousPagerTooltip': 'الذهاب إلى بيجر السابقة'
        },
        "dropdowns": {
            "noRecordsTemplate": "لا توجد سجلات"
        },
        "datepicker": {
            "placeholder": "اختر تاريخا",
            "today": "اليوم"
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
      data: sampleData,
      pageSettings: { pageSize: 7 },
      filterSettings: { type: 'Menu' },
      toolbar: ['Print']
    };
  },
  provide: {
      treegrid: [ Page, Toolbar, Filter ]
    }
}
</script>