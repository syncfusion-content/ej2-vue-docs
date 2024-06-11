<template>
  <div id="app">
    <ejs-button id="calculated-field-btn" :isPrimary="isPrimary" v-on:click="btnClick">Number Formatting</ejs-button>
    <ejs-pivotview id="pivotview" :height="height" :dataSourceSettings="dataSourceSettings" :showFieldList="showFieldList"
      :allowNumberFormatting="allowNumberFormatting" :numberFormatting="numberFormatting"> </ejs-pivotview>
  </div>
</template>
<script>
import { PivotViewComponent, NumberFormatting, FieldList } from "@syncfusion/ej2-vue-pivotview";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import { pivotData } from './pivotData.js';

export default {
  name: "App",
  components: {
    "ejs-button": ButtonComponent,
    "ejs-pivotview": PivotViewComponent
  },
  data() {
    return {
      dataSourceSettings: {
        dataSource: pivotData,
        expandAll: false,
        enableSorting: true,
        formatSettings: [{ name: 'Amount', format: 'C2', useGrouping: false, currency: 'EUR' }],
        drilledMembers: [{ name: 'Country', items: ['France', 'Germany'] }],
        columns: [{ name: 'Year' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        values: [{ name: 'Amount', caption: 'Sold Amount' },
        { name: 'Sold', caption: 'Units Sold' }],
        filters: []
      },
      height: 350,
      showFieldList: true,
      allowNumberFormatting: true,
      isPrimary: true,
    }
  },
  methods: {
    btnClick: function () {
      let pivotGridObj = document.getElementById('pivotview').ej2_instances[0];
      pivotGridObj.numberFormattingModule.showNumberFormattingDialog();
    },
    numberFormatting: function (args) {
      if (args.formatName === 'Amount') {
        args.cancel = true;
      }
    },
    provide: {
      pivotview: [NumberFormatting, FieldList]
    }
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/material.css";
</style>