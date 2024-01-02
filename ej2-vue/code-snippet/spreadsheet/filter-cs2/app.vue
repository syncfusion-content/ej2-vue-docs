

<template>
  <div>
    <ejs-button class="e-btn custom-btn" @click="getFilterData">Get Filtered Data</ejs-button>
    <ejs-spreadsheet ref="spreadsheet" :created="created">
      <e-sheets>
        <e-sheet>
          <e-ranges>
            <e-range :dataSource="dataSource"></e-range>
          </e-ranges>
          <e-columns>
            <e-column :width="width1"></e-column>
            <e-column :width="width2"></e-column>
            <e-column :width="width2"></e-column>
            <e-column :width="width1"></e-column>
            <e-column :width="width2"></e-column>
            <e-column :width="width3"></e-column>
          </e-columns>
        </e-sheet>
      </e-sheets></ejs-spreadsheet>
  </div>
</template>

<script>
import Vue from "vue";
import { SpreadsheetPlugin } from "@syncfusion/ej2-vue-spreadsheet";
import { defaultData } from './data.js';
Vue.use(SpreadsheetPlugin);
export default {
  data: () => {
    return {
      dataSource: defaultData,
      width1: 180,
      width2: 130,
      width3: 120,
    }
  },
  methods: {
    created: function () {
      var spreadsheet = this.$refs.spreadsheet;
      spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle' }, 'A1:F1');
      var predicates = [{
        field: 'C',
        operator: 'equal',
        value: 'Pink',
        matchCase: false
      }];
      spreadsheet.applyFilter(predicates, 'A1:C7');
    },
    getFilterData: function () {
      var spreadsheet = this.$refs.spreadsheet;
      var activeSheet = spreadsheet.ej2Instances.getActiveSheet();
      var usedRange = activeSheet.usedRange;
      for (var i = 0; i <= usedRange.rowIndex; i++) {
        // Get the filtered row using isFiltered property.
        var filteredRow = (activeSheet.rows[i]).isFiltered;
        if (!filteredRow) {
          var rowData = spreadsheet.getRowData(i);
          console.log("Row:", i + 1, "Cells", rowData);
        }
      }
    },
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-spreadsheet/styles/material.css";
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-grids/styles/material.css';
@import "../node_modules/@syncfusion/ej2-spreadsheet/styles/material.css";
.custom-btn {
  margin: 0 0 10px 0;
}
</style>


