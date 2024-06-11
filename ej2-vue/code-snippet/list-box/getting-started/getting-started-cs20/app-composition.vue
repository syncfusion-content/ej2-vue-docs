<template>
  <div id="app">
    <div id='container' style="margin:10px auto 0; width:250px;">
      <ejs-listbox :dataSource='data' :fields="fields"></ejs-listbox>
    </div>
  </div>
</template>
<script setup>
import { ListBoxComponent as EjsListbox } from "@syncfusion/ej2-vue-dropdowns";

const data = [
  { "Vegetable": "Cabbage", "Category": "Leafy and Salad", "Id": "item1" },
  { "Vegetable": "Spinach", "Category": "Leafy and Salad", "Id": "item2" },
  { "Vegetable": "Wheat grass", "Category": "Leafy and Salad", "Id": "item3" },
  { "Vegetable": "Yarrow", "Category": "Leafy and Salad", "Id": "item4" },
  { "Vegetable": "Pumpkins", "Category": "Leafy and Salad", "Id": "item5" },
  { "Vegetable": "Chickpea", "Category": "Beans", "Id": "item6" },
  { "Vegetable": "Green bean", "Category": "Beans", "Id": "item7" },
  { "Vegetable": "Horse gram", "Category": "Beans", "Id": "item8" },
  { "Vegetable": "Garlic", "Category": "Bulb and Stem", "Id": "item9" },
  { "Vegetable": "Nopal", "Category": "Bulb and Stem", "Id": "item10" },
  { "Vegetable": "Onion", "Category": "Bulb and Stem", "Id": "item11" }
];

const fields = { groupBy: "Category", text: "Vegetable", value: "Id" };

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
</style>
