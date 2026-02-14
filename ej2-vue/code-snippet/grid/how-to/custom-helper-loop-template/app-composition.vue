<template>
  <div id="app">
    <ejs-grid ref="grid" :dataSource="data" height=315>
      <e-columns>
        <e-column field='OrderID' headerText='Employee ID' textAlign='Right' width='90'></e-column>
        <e-column field='CustomerID' headerText='Name' width='100'></e-column>
        <e-column field='Rating' headerText='Customer Rating' width='120' :template="'columnTemplate'"></e-column>
      </e-columns>
      <template v-slot:columnTemplate="{ data }">
        <div class="rate">
          <div class="rating">
            <span v-for="i in item" :key="i" :class="{
              checked: isRatingGreater(data.Rating, i),
              star: true,
            }"></span>
          </div>
        </div>
      </template>
    </ejs-grid>
  </div>
</template>

<script setup>
import { GridComponent as EjsGrid, ColumnDirective as EColumn, ColumnsDirective as EColumns } from "@syncfusion/ej2-vue-grids";
import { data } from "./datasource.js";
const item = [1, 2, 3, 4, 5];
  const isRatingGreater = (dataRating, comparisonValue) => {
  return dataRating >= comparisonValue;
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-calendars/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/material3.css";

.e-grid .rating .star:before {
  content: '★';
}

.e-grid .rating .star {
  font-size: 132%;
  color: lightgrey;
}

.e-grid .rating .star.checked {
  color: #ffa600;
}
</style>