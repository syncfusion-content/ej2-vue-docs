

<template>
    <div id="app">
        <ejs-grid :dataSource="data" :allowPaging="true" :pageSettings='pageSettings'>
          <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
            <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
            <e-column field='ShipCity' headerText='Ship City' width=150></e-column>
          </e-columns>
        </ejs-grid>
    </div>
</template>
<script>
import Vue from "vue";
import { GridPlugin, Page } from "@syncfusion/ej2-vue-grids";
import { data } from "./datasource.js";

Vue.use(GridPlugin);

export default {
  data() {
    return {
      data: data,
      pageSettings: { pageSizes: true, pageSize: 9 }
    };
  },
  provide: {
    grid: [Page]
  }
}
</script>

<style lang="scss">
// syncfusion styles
@import "../node_modules/@syncfusion/ej2-base/styles/material.scss";
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.scss";
</style>



