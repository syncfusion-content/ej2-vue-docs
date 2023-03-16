

<template>
  <div id="app">
    <div id='container' style="margin:50px auto 0; width:250px;">
        <br>
        <ejs-multiselect id='multiselect' sortOrder='Ascending' :allowFiltering='allowFiltering' :filtering='filtering' :dataSource='sportsData' :fields='fields' placeholder="Select a game"></ejs-multiselect>
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
            sportsData : [
                { id: 'game1', sports: 'Badminton' },
                { id: 'game2', sports: 'Tennis' },
                { id: 'game3', sports: 'Football' }
            ],
            fields : { text: 'sports', value: 'id' }
            allowFiltering : true,
        }
  },
   methods: {
        filtering: function(e) {
           var sportsData = [
                { id: 'game1', sports: 'Badminton' },
                { id: 'game2', sports: 'Tennis' },
                { id: 'game3', sports: 'Football' }
           ];
            if (e.text == '') e.updateData(sportsData);
            else {
                var query = new Query().select(["sports", "id"]);
                //enable the case sensitive filtering by passing false to 4th parameter.
                query = (e.text !== '') ? query.where('sports', 'startsWith', e.text, false) : query;
                e.updateData(sportsData, query);
            }
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


