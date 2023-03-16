

<template>
  <div id="app">
    <div id='container' style="margin:50px auto 0; width:250px;">
        <br>
        <ejs-multiselect id='multiselect' popupHeight="250px" :allowFiltering='allowFiltering' :filtering='filtering' :dataSource='searchData' :fields='fields' placeholder="Select a country"></ejs-multiselect>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import { MultiSelectPlugin } from "@syncfusion/ej2-vue-dropdowns";
Vue.use(MultiSelectPlugin);
import { Query } from '@syncfusion/ej2-data';

export default {
  data (){
    return {
        searchData : [
            { Index: "s1", Country: "California" }, { Index: "s2", Country: "Florida" },
            { Index: "s3", Country: "Alaska" }, { Index: "s4", Country: "Georgia" }
        ],
        fields : { text: "Country", value: "Index" },
        allowFiltering : true
        }
  },
   methods: {
        filtering: function(args) {
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
    }
}
</script>
<style>
@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-dropdowns/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-buttons/styles/material.css";
</style>


