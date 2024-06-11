<template>
  <div id="app">
    <ejs-grid :dataSource='data' :allowSorting='true' :locale='locale' height='315px'>
      <e-columns>
        <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90 :sortComparer ="sortComparer"></e-column>
        <e-column field='CustomerID' headerText='Customer ID' width=100 :sortComparer="sortComparer"></e-column>
        <e-column field='Freight' headerText='Freight' format='C2' textAlign='Right' width=80 :sortComparer="sortComparer"></e-column>
        <e-column field='OrderDate' headerText='OrderDate' type="date" :format="formatOptions" textAlign='Right' width=120 :sortComparer="sortComparer"></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script setup>
import { provide } from "vue";

import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns, Sort } from "@syncfusion/ej2-vue-grids";
import {loadCldr, setCulture, setCurrencyCode } from '@syncfusion/ej2-base';
import * as currencies from "./currencies.json";
import * as cagregorian from "./ca-gregorian.json";
import * as numbers from "./numbers.json";
import * as timeZoneNames from "./timeZoneNames.json";
import * as numberingSystems from'./numberingSystems.json'
import { data } from './datasource.js';
loadCldr(cagregorian, currencies, numbers, timeZoneNames, numberingSystems);
setCulture('ar');
setCurrencyCode('QAR');
      const locale = 'ar';
      const formatOptions = { type: 'date', format: 'yyyy/MMM/dd' };
    const sortComparer = (reference, comparer, sortOrder) => {
    const referenceDate = new Date(reference);
    const comparerDate = new Date(comparer);
    if (typeof reference === 'number' && typeof comparer === 'number') {
        // Numeric column sorting
        return sortOrder === 'Ascending' ? comparer - reference : reference - comparer;
    } else if (!isNaN(referenceDate.getTime()) && !isNaN(comparerDate.getTime())) {
        // Date column sorting
        return sortOrder === 'Ascending' ? comparerDate.getTime() - referenceDate.getTime() : referenceDate.getTime() - comparerDate.getTime();
    }
    else {
        // Default sorting for other types
        const intlCollator = new Intl.Collator(undefined, { sensitivity: 'variant', usage: 'sort' });
        const comparisonResult = intlCollator.compare(String(reference), String(comparer));
        return sortOrder === 'Ascending' ? -comparisonResult : comparisonResult;
    }
  }
  provide('grid',  [Sort]);
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-calendars/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-popups/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind.css";
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/tailwind.css";
</style>