<template>
  <div id="app">
    <ejs-pivotview id="pivotview" ref="pivotview" :dataSourceSettings="dataSourceSettings" :gridSettings="gridSettings"
      :height="height" :showToolbar="showToolbar" :toolbar="toolbar" :toolbarRender="beforeToolbarRender"
      :displayOption="displayOption" :saveReport="saveReport" :showFieldList="showFieldList"> </ejs-pivotview>
  </div>
</template>
<script>
import { PivotViewComponent, Toolbar, FieldList } from "@syncfusion/ej2-vue-pivotview";
import { pivotData } from './pivotData.js';

export default {
  name: "App",
  components: {
    "ejs-pivotview": PivotViewComponent
  },
  data() {
    return {
      dataSourceSettings: {
        dataSource: pivotData,
        columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
        values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
        rows: [{ name: 'Country' }, { name: 'Products' }],
        formatSettings: [{ name: 'Amount', format: 'C0' }],
        filters: []
      },
      height: 350,
      gridSettings: { columnWidth: 140 },
      displayOption: { view: 'Both' },
      showToolbar: true,
      showFieldList: true,
      toolbar: [
        "Save",
        "Export",
        "FieldList"
      ]
    };
  },
  methods: {
    saveReport: function (args) {
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
    },
    beforeToolbarRender: function (args) {
      let pivotGridObj = document.getElementById('pivotview').ej2_instances[0];
      args.customToolbar.splice(2, 0, {
        prefixIcon: 'e-rename-report e-icons', tooltipText: 'Custom Button',
        click: this.customButton.bind(this),
      });
      args.customToolbar.splice(3, 0, {
        prefixIcon: 'e-pivotview-expand e-icons', tooltipText: 'Expand/Collapse',
        click: this.toolbarClicked.bind(this),
      });
      args.customToolbar[0].align = "Left";
      args.customToolbar[1].align = "Center";
      args.customToolbar[2].align = "Right";
    },
    customButton: function () {
      // Here you can customize the click event for custom button
    },
    toolbarClicked: function () {
      let pivotGridObj = document.getElementById('pivotview').ej2_instances[0];
      pivotGridObj.dataSourceSettings.expandAll = !pivotGridObj.dataSourceSettings.expandAll;
    }
  },
  provide: {
    pivotview: [
      Toolbar, FieldList
    ]
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/tailwind3.css";
</style>