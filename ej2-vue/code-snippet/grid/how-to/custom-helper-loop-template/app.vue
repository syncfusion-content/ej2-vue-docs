<template>
  <div id="app">
    <ejs-grid ref="grid" :dataSource="data" height=315 >
      <e-columns>
        <e-column field='OrderID' headerText='Employee ID' textAlign='Right' width='90'></e-column>
        <e-column field='CustomerID' headerText='Name' width='100'></e-column>
        <e-column field='Rating' headerText='Customer Rating' width='120' :template="'columnTemplate'"></e-column>
      </e-columns>
      <template v-slot:columnTemplate="{data}">
        <div class="rate">
          <div class="rating">
            <span
              v-for="i in item"
              :key="i"
              :class="{
                checked: isRatingGreater(data.Rating, i),
                star: true,
              }"
            ></span>
          </div>
        </div>
      </template>
    </ejs-grid>
  </div>
</template>

<script>
import Vue from "vue";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";
import { data } from "./datasource.js";

Vue.use(GridPlugin);

export default {
  data: () => {
    return {
      data: data,
      item:[1, 2, 3, 4, 5],
    };
  },
  methods: {
    isRatingGreater(dataRating, comparisonValue) {
      return dataRating >= comparisonValue;
    },
  },
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


