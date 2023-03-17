

<template>
    <div id="app">
        <ejs-grid :dataSource='data' :allowPaging='true' :allowTextWrap='true' :textWrapSettings='wrapSettings' height='310'>
            <e-columns>
                <e-column field='Inventor' headerText='Inventor Name' width='180' textAlign="Right"></e-column>
                <e-column field='NumberofPatentFamilies' headerText="Number of Patent Families" width='180' textAlign="Right"></e-column>
                <e-column field='Country' headerText='Country' width='140'></e-column>
                <e-column field='Active' width='120'></e-column>
                <e-column field='Mainfieldsofinvention' headerText='Main fields of invention' width='200'></e-column>
            </e-columns>
        </ejs-grid>
    </div>
</template>
<script>
import Vue from "vue";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";
import { data } from './datasource.js';
Vue.use(GridPlugin);

export default {
  data() {
    return {
      data: data,
      wrapSettings: { wrapMode: 'Content' }
    };
  }
}
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>


