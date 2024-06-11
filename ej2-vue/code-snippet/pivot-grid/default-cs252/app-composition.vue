<template>
  <div id="app">
    <ejs-pivotview id="pivotview" ref="pivotview" :dataSourceSettings="dataSourceSettings" :gridSettings="gridSettings"
      :height="height" :allowExcelExport="allowExcelExport" :allowConditionalFormatting="allowConditionalFormatting"
      :allowPdfExport="allowPdfExport" :showToolbar="showToolbar" :allowCalculatedField="allowCalculatedField"
      :showFieldList="showFieldList" :toolbar="toolbar" :saveReport="saveReport" :loadReport="loadReport"
      :fetchReport="fetchReport" :renameReport="renameReport" :removeReport="removeReport" :newReport="newReport"
      :beforeExport="beforeExport" :displayOption="displayOption"> </ejs-pivotview>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { PivotViewComponent as EjsPivotview, FieldList, CalculatedField, Toolbar, PDFExport, ExcelExport, ConditionalFormatting } from "@syncfusion/ej2-vue-pivotview";
import { pivotData } from './pivotData.js';

const dataSourceSettings = {
  dataSource: pivotData,
  expandAll: false,
  columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
  values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
  rows: [{ name: 'Country' }, { name: 'Products' }],
  formatSettings: [{ name: 'Amount', format: 'C0' }],
  filters: []
};
const height = 350;
const gridSettings = { columnWidth: 140 };
const allowExcelExport = true;
const allowConditionalFormatting = true;
const allowPdfExport = true;
const displayOption = { view: 'Both' };
const showToolbar = true;
const allowCalculatedField = true;
const showFieldList = true;
const toolbar = [
  "New",
  "Save",
  "SaveAs",
  "Rename",
  "Remove",
  "Load",
  "Grid",
  "Chart",
  "Export",
  "SubTotal",
  "GrandTotal",
  "ConditionalFormatting",
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
const fetchReport = (args) => {
  let reportCollection = [];
  let reportList = [];
  if (
    localStorage.pivotviewReports &&
    localStorage.pivotviewReports !== ""
  ) {
    reportCollection = JSON.parse(localStorage.pivotviewReports);
  }
  reportCollection.map(function (item) {
    reportList.push(item.reportName);
  });
  args.reportName = reportList;
};
const loadReport = (args) => {
  let pivotGridObj = document.getElementById('pivotview').ej2_instances[0];
  let reportCollection = [];
  if (
    localStorage.pivotviewReports &&
    localStorage.pivotviewReports !== ""
  ) {
    reportCollection = JSON.parse(localStorage.pivotviewReports);
  }
  reportCollection.map(function (item) {
    if (args.reportName === item.reportName) {
      args.report = item.report;
    }
  });
  if (args.report) {
    pivotGridObj.dataSourceSettings = JSON.parse(args.report).dataSourceSettings;
  }
};
const removeReport = (args) => {
  let reportCollection = [];
  if (
    localStorage.pivotviewReports &&
    localStorage.pivotviewReports !== ""
  ) {
    reportCollection = JSON.parse(localStorage.pivotviewReports);
  }
  for (let i = 0; i < reportCollection.length; i++) {
    if (reportCollection[i].reportName === args.reportName) {
      reportCollection.splice(i, 1);
    }
  }
  if (
    localStorage.pivotviewReports &&
    localStorage.pivotviewReports !== ""
  ) {
    localStorage.pivotviewReports = JSON.stringify(reportCollection);
  }
};
const renameReport = (args) => {
  let reportCollection = [];
  if (
    localStorage.pivotviewReports &&
    localStorage.pivotviewReports !== ""
  ) {
    reportCollection = JSON.parse(localStorage.pivotviewReports);
  }
  reportCollection.map(function (item) {
    if (args.reportName === item.reportName) {
      item.reportName = args.rename;
    }
  });
  if (
    localStorage.pivotviewReports &&
    localStorage.pivotviewReports !== ""
  ) {
    localStorage.pivotviewReports = JSON.stringify(reportCollection);
  }
};
const newReport = () => {
  let pivotGridObj = document.getElementById('pivotview').ej2_instances[0];
  pivotGridObj.setProperties(
    {
      dataSourceSettings: {
        columns: [],
        rows: [],
        values: [],
        filters: []
      }
    },
    false
  );
};
const beforeExport = (args) => {
  args.excelExportProperties = {
    header: {
      headerRows: 2,
      rows: [
        { cells: [{ colSpan: 4, value: "Pivot Table", style: { fontColor: '#C67878', fontSize: 20, hAlign: 'Center', bold: true, underline: true } }] }
      ]
    },
    footer: {
      footerRows: 4,
      rows: [
        { cells: [{ colSpan: 4, value: "Thank you for your business!", style: { hAlign: 'Center', bold: true } }] },
        { cells: [{ colSpan: 4, value: "!Visit Again!", style: { hAlign: 'Center', bold: true } }] }
      ]
    }
  };
  args.pdfExportProperties = {
    header: {
      fromTop: 0,
      height: 130,
      contents: [
        {
          type: 'Text',
          value: "Pivot Table",
          position: { x: 0, y: 50 },
          style: { textBrushColor: '#000000', fontSize: 13, dashStyle: 'Solid', hAlign: 'Center' }
        }
      ]
    },
    footer: {
      fromBottom: 160,
      height: 150,
      contents: [
        {
          type: 'PageNumber',
          pageNumberType: 'Arabic',
          format: 'Page {$current} of {$total}',
          position: { x: 0, y: 25 },
          style: { textBrushColor: '#02007a', fontSize: 15 }
        }
      ]
    }
  };
};

provide('pivotview', [
  FieldList,
  CalculatedField,
  Toolbar,
  PDFExport,
  ExcelExport,
  ConditionalFormatting
]);

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/material.css";
</style>