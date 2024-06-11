<template>
  <div id="app">
    <div id='container' style="margin:50px auto 0; width:250px;">
      <br>
      <ejs-combobox id='combobox' sortOrder='Ascending' popupHeight="250px" :allowFiltering='allowFiltering'
        :filtering='filtering' :dataSource='searchData' :fields='fields' placeholder="Select a country"></ejs-combobox>
    </div>
  </div>
</template>
<script setup>
import { ComboBoxComponent as EjsCombobox } from "@syncfusion/ej2-vue-dropdowns";
import { Query } from '@syncfusion/ej2-data';

const searchData = [
  { Index: "s1", Country: "California" }, { Index: "s2", Country: "Florida" },
  { Index: "s3", Country: "Alaska" }, { Index: "s4", Country: "Georgia" }
];
const fields = { text: "Country", value: "Index" };
const allowFiltering = true;

const filtering = function (args) {
  var searchData = [
    { Index: "s1", Country: "California" }, { Index: "s2", Country: "Florida" },
    { Index: "s3", Country: "Alaska" }, { Index: "s4", Country: "Georgia" }
  ];
  var query = new Query();
  //frame the query based on search string with filter type.
  query = (args.text != "") ? query.where("Country", "startswith", args.text, true) : query;
  //pass the filter data source, filter query to updateData method.
  args.updateData(searchData, query);
}

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
</style>
