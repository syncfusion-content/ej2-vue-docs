

<template>
    <div id="app">
        <div class="e-float-input" style="width: 200px; display: inline-block;">
                <input type="text" class="searchtext"/>
                <span class="e-float-line"></span>
                <label class="e-float-text">Search text</label>
            </div>
        <ejs-button id='search' @click.native='search'>Search</ejs-button>
        <ejs-grid ref='grid' :dataSource='data' height='262px'>
            <e-columns>
                <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=100></e-column>
                <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
                <e-column field='ShipCity' headerText='Ship City' width=100></e-column>
                <e-column field='ShipName' headerText='Ship Name' width=100></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script>
import Vue from "vue";
import { GridPlugin, Toolbar, Search } from "@syncfusion/ej2-vue-grids";
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';
import { data } from './datasource.js'

Vue.use(GridPlugin);
Vue.use(ButtonPlugin);

export default {
  data() {
    return {
      data: data
    };
  },
  methods: {
    search: function() {
        let searchText = document.getElementsByClassName('searchtext')[0].value;
        this.$refs.grid.search(searchText);
    }
  },
  provide: {
    grid: [Search]
  }
}
</script>
<style>
 @import "https://ej2.syncfusion.com/vue/documentation/node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>


