<template>
  <div id="app">
    <ejs-button id="refresh-btn" :isPrimary="isPrimary" v-on:click="btnClick">Refresh</ejs-button>
    <ejs-pivotview id="pivotview" :height="height" :showFieldList="showFieldList"
      :dataSourceSettings="dataSourceSettings"> </ejs-pivotview>
  </div>
</template>

<script>
import { PivotViewComponent, FieldList } from "@syncfusion/ej2-vue-pivotview";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";

export default {
  name: "App",
  components: {
    "ejs-button": ButtonComponent,
    "ejs-pivotview": PivotViewComponent
  },
  data() {
    return {
      dataSourceSettings: {
        dataSource: [
          { 'Sold': 31, 'Amount': 52824, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q1' },
          { 'Sold': 51, 'Amount': 86904, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q2' },
          { 'Sold': 90, 'Amount': 153360, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q3' },
          { 'Sold': 25, 'Amount': 42600, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2015', 'Quarter': 'Q4' },
          { 'Sold': 27, 'Amount': 46008, 'Country': 'France', 'Products': 'Mountain Bikes', 'Year': 'FY 2016', 'Quarter': 'Q1' }],
        expandAll: false,
        columns: [{ name: 'Year', caption: 'Production Year' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: []
      },
      showFieldList: true,
      height: 350,
      isPrimary: true
    }
  },
  provide: {
    pivotview: [FieldList]
  },
  methods: {
    btnClick: function () {
      let pivotGridObj = document.getElementById('pivotview').ej2_instances[0];
      pivotGridObj.engineModule.fieldList = {};
      pivotGridObj.dataSourceSettings.dataSource = [
        { 'Sold': 31, 'Amount': 52824, 'Country': 'France', 'Year': 'FY 2015' },
        { 'Sold': 51, 'Amount': 86904, 'Country': 'France', 'Year': 'FY 2015' },
        { 'Sold': 90, 'Amount': 153360, 'Country': 'France', 'Year': 'FY 2015' },
        { 'Sold': 25, 'Amount': 42600, 'Country': 'France', 'Year': 'FY 2015' },
        { 'Sold': 27, 'Amount': 46008, 'Country': 'France', 'Year': 'FY 2016' }];
    }
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/material.css";
</style>