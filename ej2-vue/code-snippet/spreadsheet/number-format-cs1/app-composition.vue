<template>
  <ejs-spreadsheet ref="spreadsheet" :created="created">
    <e-sheets>
      <e-sheet name="PriceDetails">
        <e-columns>
          <e-column :width=88></e-column>
          <e-column :width=88></e-column>
          <e-column :width=106></e-column>
          <e-column :width=98></e-column>
          <e-column :width=88></e-column>
          <e-column :width=86></e-column>
          <e-column :width=107></e-column>
          <e-column :width=81></e-column>
        </e-columns>
        <e-rows>
          <e-row>
            <e-cells>
              <e-cell value="Seller Name" :style="style"></e-cell>
              <e-cell value="Customer Id" :style="style"></e-cell>
              <e-cell value="Customer Name" :style="style"></e-cell>
              <e-cell value="Product Name" :style="style"></e-cell>
              <e-cell value="Product Price" :style="style"></e-cell>
              <e-cell value="Sales Date" :style="style"></e-cell>
              <e-cell value="Billing Time" :style="style"></e-cell>
              <e-cell value="Total Price" :style="style"></e-cell>
            </e-cells>
          </e-row>
          <e-row>
            <e-cells>
              <e-cell value="John"></e-cell>
              <e-cell value="1" :validation="validation"></e-cell>
              <e-cell value="Nash"></e-cell>
              <e-cell value="Digger" :validation="listValidation"></e-cell>
              <e-cell value="50000" :validation="listValidation1"></e-cell>
              <e-cell value="04/11/2019"></e-cell>
              <e-cell value="11:34:32 AM"></e-cell>
              <e-cell value="1,45,000.00"></e-cell>
            </e-cells>
          </e-row>
          <e-row>
            <e-cells>
              <e-cell value="Mike"></e-cell>
              <e-cell value="2" :validation="validation"></e-cell>
              <e-cell value="Jim"></e-cell>
              <e-cell value="Cherrypicker" :validation="validation1"></e-cell>
              <e-cell value="45000" :validation="validation"></e-cell>
              <e-cell value="04/11/2019"></e-cell>
              <e-cell value="10:15:00 AM"></e-cell>
              <e-cell value="1,40,040.00"></e-cell>
            </e-cells>
          </e-row>
          <e-row>
            <e-cells>
              <e-cell value="shane"></e-cell>
              <e-cell value="3" :validation="validation"></e-cell>
              <e-cell value="Sean"></e-cell>
              <e-cell value="Kango" :validation="listValidation3"></e-cell>
              <e-cell value="450" :validation="listValidation4"></e-cell>
              <e-cell value="06/25/2019"></e-cell>
              <e-cell value="01:30:11 PM"></e-cell>
              <e-cell value="545.00"></e-cell>
            </e-cells>
          </e-row>
          <e-row>
            <e-cells>
              <e-cell value="John"></e-cell>
              <e-cell value="1" :validation="validation"></e-cell>
              <e-cell value="Nash"></e-cell>
              <e-cell value="JCB" :validation="listValidation5"></e-cell>
              <e-cell value="90000" :validation="listValidation6"></e-cell>
              <e-cell value="09/22/2019"></e-cell>
              <e-cell value="12:30:02 PM"></e-cell>
              <e-cell value="1,00,095.00"></e-cell>
            </e-cells>
          </e-row>
        </e-rows>
      </e-sheet>
    </e-sheets>
  </ejs-spreadsheet>
</template>

<script setup>
import { ref } from "vue";
import { SpreadsheetComponent as EjsSpreadsheet, ColumnsDirective as EColumns, ColumnDirective as EColumn, RowsDirective as ERows, RowDirective as ERow, CellsDirective as ECells, CellDirective as ECell, SheetsDirective as ESheets, SheetDirective as ESheet } from "@syncfusion/ej2-vue-spreadsheet";

const spreadsheet = ref(null);
const style = { fontWeight: "bold", textAlign: "center" };
const validation = { type: 'WholeNumber', operator: 'NotEqualTo', value1: '1' };
const listValidation = { type: 'List', value1: 'Digger, Digger, Cherrypicker' };
const listValidation1 = { type: 'List', value1: '50000,50000,45000' };
const validation1 = { type: 'List', value1: 'Cherrypicker, JCB, Wheelbarrow' };
const listValidation2 = { type: 'List', value1: '45000,90000,40' };
const listValidation3 = { type: 'List', value1: 'Kango, Ropes' };
const listValidation4 = { type: 'List', value1: '450, 95' };
const listValidation5 = { type: 'List', value1: 'JCB, Ropes, scaffolding' };
const listValidation6 = { type: 'List', value1: '90000, 95, 10000' };

const created = function () {
  //Add Data validation to range.
  spreadsheet.value.addDataValidation({ type: 'TextLength', operator: 'LessThanOrEqualTo', value1: '4' }, 'A2:A5');
  spreadsheet.value.addDataValidation({ type: 'WholeNumber', operator: 'NotEqualTo', value1: '1' }, 'B2:B5');
  spreadsheet.value.addDataValidation({ type: 'Date', operator: 'NotEqualTo', value1: '04/11/2019' }, 'F2:F5');
  spreadsheet.value.addDataValidation({ type: 'Time', operator: 'Between', value1: '10:00:00 AM', value2: '11:00:00 AM' }, 'G2:G5');
  spreadsheet.value.addDataValidation({ type: 'Decimal', operator: 'LessThan', value1: '100000.00' }, 'H2:H5');
  //Highlight Invalid Data.
  spreadsheet.value.addInvalidHighlight('A1:H5');
}
</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-grids/styles/material.css';
@import "../node_modules/@syncfusion/ej2-vue-spreadsheet/styles/material.css";
</style>
