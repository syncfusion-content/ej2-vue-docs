<template>
  <div id="app">
    <ejs-spreadsheet ref="spreadsheet" locale="de" listSeparator=";" :showRibbon="false" :showSheetTabs="false"
      :created="created">
      <e-sheets>
        <e-sheet selectedRange="E14">
          <e-ranges>
            <e-range :dataSource="dataSource"></e-range>
          </e-ranges>
          <e-rows>
            <e-row :index=12>
              <e-cells>
                <e-cell :index=3 value='Subtotal:'></e-cell>
                <e-cell formula='=SUBTOTAL(9;E2:E12)'></e-cell>
              </e-cells>
            </e-row>
            <e-row>
              <e-cells>
                <e-cell :index=3 value='Discount (8,5%):'></e-cell>
                <e-cell formula='=PRODUCT(8,5;E13)/100'></e-cell>
              </e-cells>
            </e-row>
            <e-row>
              <e-cells>
                <e-cell :index=3 value='Total Amount:'></e-cell>
                <e-cell formula='=E13-E14'></e-cell>
              </e-cells>
            </e-row>
          </e-rows>
          <e-columns>
            <e-column :width=120></e-column>
            <e-column :width=180></e-column>
            <e-column :width=100></e-column>
            <e-column :width=120></e-column>
            <e-column :width=120></e-column>
          </e-columns>
        </e-sheet>
      </e-sheets>
    </ejs-spreadsheet>
  </div>
</template>
<script>

import { SpreadsheetComponent, ColumnsDirective, ColumnDirective, RowsDirective, RowDirective, CellsDirective, CellDirective, RangesDirective, RangeDirective, SheetsDirective, SheetDirective, getFormatFromType } from "@syncfusion/ej2-vue-spreadsheet";
import { L10n, loadCldr, setCulture, setCurrencyCode } from '@syncfusion/ej2-base';
import * as deLocalization from './locale.json';
import * as currencies from "./currencies.json";
import * as cagregorian from "./ca-gregorian.json";
import * as numbers from "./numbers.json";
import * as timeZoneNames from "./timeZoneNames.json";
import * as numberingSystems from './numberingSystems.json';
import { data } from './datasource.js';

L10n.load(deLocalization);
loadCldr(cagregorian, currencies, numbers, timeZoneNames, numberingSystems);
setCulture('de');
setCurrencyCode('EUR');

export default {
  name: "App",
  components: {
    "ejs-spreadsheet": SpreadsheetComponent,
    "e-sheets": SheetsDirective,
    "e-sheet": SheetDirective,
    "e-ranges": RangesDirective,
    "e-range": RangeDirective,
    "e-rows": RowsDirective,
    "e-row": RowDirective,
    "e-cells": CellsDirective,
    "e-cell": CellDirective,
    "e-columns": ColumnsDirective,
    "e-column": ColumnDirective
  },

  data: () => {
    return {
      dataSource: data,
    };
  },
  methods: {
    created: function () {
      let spreadsheet = this.$refs.spreadsheet;
      spreadsheet.cellFormat({ textAlign: 'center', fontWeight: 'bold' }, 'A1:E1');
      spreadsheet.numberFormat(getFormatFromType('Currency'), 'D2:E12');
      spreadsheet.numberFormat(getFormatFromType('Currency'), 'E13:E15');
    },
  },
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-grids/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-spreadsheet/styles/material.css";
</style>
