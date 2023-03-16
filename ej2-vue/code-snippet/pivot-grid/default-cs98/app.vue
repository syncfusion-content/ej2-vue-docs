


<template>
    <div id="app">
        <ejs-pivotview :dataSourceSettings="dataSourceSettings" :height="height" :showFieldList="showFieldList" :locale="locale" :enableRtl="enableRtl"> </ejs-pivotview>
    </div>
</template>

<script>
import Vue from "vue";
import { L10n } from '@syncfusion/ej2-base';
import { PivotViewPlugin, FieldList } from "@syncfusion/ej2-vue-pivotview";
import { pivotData } from './pivotData.js';

Vue.use(PivotViewPlugin);

L10n.load({
    'ar-AE': {
        'pivotview': {
            'grandTotal': 'المجموع الكلى',
            'total': 'المجموع',
            'value': 'القيمة',
            'noValue': 'لا قيمة لها',
            'row': 'صف',
            'column': 'العمود',
            'collapse': 'الانهيار',
            'expand': 'توسيع'
        },
        'pivotfieldlist': {
            'fieldList': 'قائمة الحقول',
            'dropRowPrompt': 'تراجع الخلاف هنا',
            'dropColPrompt': 'انخفاض العمود هنا',
            'dropValPrompt': 'انخفاض قيمة هنا',
            'dropFilterPrompt': 'انخفاض هنا عامل التصفية',
            'addPrompt': 'اضافة حقل هنا',
            'adaptiveFieldHeader': 'اختر الحقل',
            'centerHeader': 'اسحب المجالات بين المناطق الموضحة ادناه:',
            'add': 'اضافة',
            'drag': 'اسحب',
            'filters': 'عوامل التصفية',
            'rows': 'الصفوف',
            'columns': 'الاعمدة',
            'values': 'قيم',
            'search': 'البحث',
            'close': 'قريب',
            'cancel': 'الغاء',
            'delete': 'احذف',
            'alert': 'حالة تاهب قصوى',
            'warning': 'تحذير',
            'ok': 'موافق',
            'allFields': 'جميع الحقول',
            'noMatches': 'لا مباريات'
        }
    }
});

export default {
  data () {
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
      locale: 'ar-AE',
      enableRtl: true
    }
  },
  provide: {
        pivotview: [FieldList]
    }
}
</script>
<style>
@import "@syncfusion/ej2-vue-pivotview/styles/material.css";
</style>



