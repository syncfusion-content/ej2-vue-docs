<template>
  <div id="app">
    <ejs-pivotview :dataSourceSettings="dataSourceSettings" :width="width" :height="height"
      :virtualScrollSettings="virtualScrollSettings" :enableVirtualization="enableVirtualization">
    </ejs-pivotview>
  </div>
</template>

<script setup>
import { provide } from "vue";
import { PivotViewComponent as EjsPivotview, VirtualScroll } from "@syncfusion/ej2-vue-pivotview";



/* tslint:disable */
function data(count) {
  let result = [];
  let dt = 0;
  for (let i = 1; i < count + 1; i++) {
    dt++;
    let round;
    let toString = i.toString();
    if (toString.length === 1) {
      round = "0000" + i;
    } else if (toString.length === 2) {
      round = "000" + i;
    } else if (toString.length === 3) {
      round = "00" + i;
    } else if (toString.length === 4) {
      round = "0" + i;
    } else {
      round = toString;
    }
    result.push({
      ProductID: "PRO-" + round,
      Year: "FY " + (dt + 2013),
      Price: Math.round(Math.random() * 5000) + 5000,
      Sold: Math.round(Math.random() * 80) + 10
    });
    if (dt / 4 == 1) {
      dt = 0;
    }
  }
  return result;
}
const dataSourceSettings = {
  dataSource: data(1000),
  enableSorting: false,
  expandAll: true,
  formatSettings: [{ name: 'Price', format: 'C0' }],
  rows: [{ name: 'ProductID' }],
  columns: [{ name: 'Year' }],
  values: [{ name: 'Price', caption: 'Unit Price' },
  { name: 'Sold', caption: 'Unit Sold' }
  ]
};
const width = '100%';
const height = 350;
const enableVirtualization = true;
const virtualScrollSettings = {
  allowSinglePage: true
};

provide('pivotview', [VirtualScroll]);

</script>

<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/tailwind3.css";
</style>