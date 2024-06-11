<template>
  <div id="app">
    <div id='container' style="margin:20px auto 0; width:250px;">
      <br>
      <ejs-dropdownlist id='dropdownlist' placeholder='Select a country' :allowFiltering='allowFiltering'
        :filtering='filtering' :dataSource='dataSource' :fields='fields'></ejs-dropdownlist>
    </div>
  </div>
</template>
<script setup>
import { DropDownListComponent as EjsDropdownlist } from "@syncfusion/ej2-vue-dropdowns";
import { Query } from "@syncfusion/ej2-data";

const dataSource = [
  { Index: "s1", Country: "Alaska" }, { Index: "s2", Country: "California" },
  { Index: "s3", Country: "Florida" }, { Index: "s4", Country: "Georgia" }
];
const fields = { text: "Country", value: "Index" };
const allowFiltering = true;

const filtering = function (e) {
  var searchData = [
    { Index: "s1", Country: "Alaska" }, { Index: "s2", Country: "California" },
    { Index: "s3", Country: "Florida" }, { Index: "s4", Country: "Georgia" }
  ];
  var query = new Query();
  //frame the query based on search string with filter type.
  query = (e.text != "") ? query.where("Country", "startswith", e.text, true) : query;
  //pass the filter data source, filter query to updateData method.
  e.updateData(searchData, query);
}

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
</style>
