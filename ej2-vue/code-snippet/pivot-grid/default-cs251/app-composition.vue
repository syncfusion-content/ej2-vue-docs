<template>
  <div id="app">
    <ejs-pivotview id="pivotview" ref="pivotview" :dataSourceSettings="dataSourceSettings" :gridSettings="gridSettings"
      :height="height" :showToolbar="showToolbar" :toolbar="toolbar" :toolbarRender="beforeToolbarRender"
      :displayOption="displayOption" :saveReport="saveReport" :showFieldList="showFieldList"> </ejs-pivotview>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { PivotViewComponent as EjsPivotview, Toolbar, FieldList } from "@syncfusion/ej2-vue-pivotview";
import { pivotData } from './pivotData.js';

const dataSourceSettings = {
  dataSource: pivotData,
  columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
  values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
  rows: [{ name: 'Country' }, { name: 'Products' }],
  formatSettings: [{ name: 'Amount', format: 'C0' }],
  filters: []
};
const height = 350;
const gridSettings = { columnWidth: 140 };
const displayOption = { view: 'Both' };
const showToolbar = true;
const showFieldList = true;
const toolbar = [
  "Save",
  "Export",
  "FieldList"
];

const saveReport = (args) => {
  let reports = [];
  let isSaved = false;
  if (
    localStorage.pivotviewReports &&
    localStorage.pivotviewReports !== ""
  ) {
    reports = JSON.parse(localStorage.pivotviewReports);
  }
  if (args.report && args.reportName && args.reportName !== "") {
    reports.map(function (item) {
      if (args.reportName === item.reportName) {
        item.report = args.report;
        isSaved = true;
      }
    });
    if (!isSaved) {
      reports.push(args);
    }
    localStorage.pivotviewReports = JSON.stringify(reports);
  }
};
const beforeToolbarRender = (args) => {
  args.customToolbar.splice(2, 0, {
    prefixIcon: 'e-rename-report e-icons', tooltipText: 'Custom Button',
    click: customButton.bind()
  });
  args.customToolbar.splice(3, 0, {
    prefixIcon: 'e-pivotview-expand e-icons', tooltipText: 'Expand/Collapse',
    click: toolbarClicked.bind()
  });
  args.customToolbar[0].align = "Left";
  args.customToolbar[1].align = "Center";
  args.customToolbar[2].align = "Right";
};
const customButton = () => {
  // Here you can customize the click event for custom button
};
const toolbarClicked = () => {
  let pivotGridObj = document.getElementById('pivotview').ej2_instances[0];
  pivotGridObj.dataSourceSettings.expandAll = !pivotGridObj.dataSourceSettings.expandAll;
};

provide('pivotview', [
  Toolbar, FieldList
]);

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/tailwind3.css";
</style>