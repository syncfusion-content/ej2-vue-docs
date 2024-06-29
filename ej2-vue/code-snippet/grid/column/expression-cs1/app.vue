<template>
  <div id="app">
    <ejs-grid :dataSource='data' :height='315'>
      <e-columns>
        <e-column field='FoodName' headerText='Food Name' width=150></e-column>
        <e-column field='Protein' headerText='Protein' textAlign='Right' width=120></e-column>
        <e-column field='Fat' headerText='Fat' textAlign='Right' width=80></e-column>
        <e-column field='Carbohydrate' headerText='Carbohydrate' textAlign='Right' width=120></e-column>
        <e-column headerText='Calories Intake' textAlign='Right' :valueAccessor='totalCalories' width=150></e-column>
      </e-columns>
    </ejs-grid>
  </div>
</template>
<script>

import { GridComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
export default {
  name: "App",
  components: {
    "ejs-grid": GridComponent,
    "e-columns": ColumnsDirective,
    "e-column": ColumnDirective
  },
  data() {
    return {
      data: data
    };
  },
  methods: {
    totalCalories: function (field, data) {
      return data.Protein * 4 + data.Fat * 9 + data.Carbohydrate * 4;
    }
  }
}
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