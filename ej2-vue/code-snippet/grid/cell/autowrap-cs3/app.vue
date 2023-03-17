

<template>
    <div id="app">
        <ejs-grid :dataSource='data' height='315' >
            <e-columns>
                <e-column field='Inventor' headerText='Name of the Inventor' clipMode='Clip' width='80'></e-column>
                <e-column field='NumberofPatentFamilies' headerText='Number of Patent Families' clipMode='Ellipsis' width='100'></e-column>
                <e-column field='Country' headerText='Country' width='80'></e-column>
                <e-column field='Number of INPADOC patents' headerText='Number of INPADOC patents' width='100'></e-column>
                <e-column field='Mainfieldsofinvention' headerText='Main fields of invention' clipMode='EllipsisWithTooltip' width='100'></e-column>
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
      data: data
    };
  }
}
</script>
<style>
 @import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>


