import Vue from "vue";
import { PivotViewPlugin, FieldList, CalculatedField, Toolbar, PDFExport, ExcelExport, ConditionalFormatting } from "@syncfusion/ej2-vue-pivotview";
import { GroupingBar, Grouping, NumberFormatting, DrillThrough } from "@syncfusion/ej2-vue-pivotview";
import { pivot_dataset } from './pivotData.js';

Vue.use(PivotViewPlugin);

new Vue({
	el: '#app',
	template: `<div id="app">
      <ejs-pivotview id="pivotview" ref="pivotview"
        :dataSourceSettings="dataSourceSettings" :gridSettings="gridSettings" :height="height" :showFieldList="showFieldList" :allowCalculatedField="allowCalculatedField" 
        :allowExcelExport="allowExcelExport" :allowPdfExport="allowPdfExport" :showToolbar="showToolbar" :allowConditionalFormatting="allowConditionalFormatting"
        :allowNumberFormatting="allowNumberFormatting" :showGroupingBar="showGroupingBar" :groupingBarSettings="groupingBarSettings"
        :toolbar="toolbar" :saveReport="saveReport" :loadReport="loadReport" :fetchReport="fetchReport" :renameReport="renameReport"
        :removeReport="removeReport" :newReport="newReport" :displayOption="displayOption">
      </ejs-pivotview>
  </div>`,

  data () {
    return {
      dataSourceSettings: {
        dataSource: pivot_dataset,
        expandAll: true,
        enableSorting: true,
        allowLabelFilter: true,
        allowValueFilter: true,
        sortSettings: [
          { name: 'company', order: 'Descending' }
        ],
        formatSettings: [
          { name: 'balance', format: 'C' },
          { name: 'date', format: 'dd/MM/yyyy-hh:mm', type: 'date' }
        ],
        drilledMembers: [
          { name: 'product', items: ['Bike', 'Car'] },
          { name: 'gender', items: ['male'] }
        ],
        filterSettings: [
          { name: 'date', type: 'Date', condition: 'Between', value1: new Date('02/16/2000'), value2: new Date('02/16/2002') },
          { name: 'age', type: 'Number', condition: 'Between', value1: '25', value2: '35' },
          { name: 'eyeColor', type: 'Exclude', items: ['blue'] }
        ],
        rows: [
          { name: 'state' },
          { name: 'eyeColor' }
        ],
        columns: [
          { name: 'gender', caption: 'Population' },
          { name: 'isActive' }
        ],
        values: [
          { name: 'balance' },
          { name: 'quantity' }
        ],
        filters: [],
        conditionalFormatSettings: [
          {
            measure: 'balance',
            value1: 100000,
            conditions: 'LessThan',
            style: {
              backgroundColor: '#80cbc4',
              color: 'black',
              fontFamily: 'Tahoma',
              fontSize: '12px'
            }
          },
          {
            value1: 10,
            value2: 20,
            measure: 'quantity',
            conditions: 'Between',
            style: {
              backgroundColor: '#f48fb1',
              color: 'black',
              fontFamily: 'Tahoma',
              fontSize: '12px'
            }
          }
        ]
      },
      showGroupingBar: true,
        groupingBarSettings: {
          showFieldsPanel: true
        },
        displayOption: { view: 'Both' },
        chartSettings: {
          value: 'Amount', enableExport: true,
          chartSeries: {
            type: 'Column',
            animation: {
              enable: false
            }
          },
          enableMultipleAxis: false,
        },
        toolbar: [
          'New', 'Save', 'SaveAs', 'Rename', 'Remove', 'Load', 'Grid', 'Chart', 'MDX', 'Export', 'SubTotal', 'GrandTotal', 'Formatting', 'FieldList'
        ],
        editSettings: { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Normal' },
        allowExcelExport: true,
        allowConditionalFormatting: true,
        allowNumberFormatting: true,
        allowPdfExport: true,
        allowGrouping: true,
        showToolbar: true,
        allowCalculatedField: true,
        showFieldList: true,
        allowDeferLayoutUpdate: true,
        saveReport: function (args) {
          var reports = [];
          var isSaved = false;
          if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
            reports = JSON.parse(localStorage.pivotviewReports);
          }
          if (args.report && args.reportName && args.reportName !== '') {
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
        fetchReport: function (args) {
          var reportCollection = [];
          var reeportList = [];
          if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
            reportCollection = JSON.parse(localStorage.pivotviewReports);
          }
          reportCollection.map(function (item) {
            reeportList.push(item.reportName);
          });
          args.reportName = reeportList;
        },
        loadReport: function (args) {
          var reportCollection = [];
          if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
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
        },
        removeReport: function (args) {
          var reportCollection = [];
          if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
            reportCollection = JSON.parse(localStorage.pivotviewReports);
          }
          for (var i = 0; i < reportCollection.length; i++) {
            if (reportCollection[i].reportName === args.reportName) {
              reportCollection.splice(i, 1);
            }
          }
          if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
            localStorage.pivotviewReports = JSON.stringify(reportCollection);
          }
        },
        renameReport: function (args) {
          var reportCollection = [];
          if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
            reportCollection = JSON.parse(localStorage.pivotviewReports);
          }
          if (args.isReportExists) {
            for (var i = 0; i < reportCollection.length; i++) {
              if (reportCollection[i].reportName === args.rename) {
                reportCollection.splice(i, 1);
              }
            }
          }
          reportCollection.map(function (item) {
            if (args.reportName === item.reportName) {
              item.reportName = args.rename;
            }
          });
          if (localStorage.pivotviewReports && localStorage.pivotviewReports !== "") {
            localStorage.pivotviewReports = JSON.stringify(reportCollection);
          }
        },
        newReport: function () {
          pivotGridObj.setProperties({
            dataSourceSettings: {
              columns: [],
              rows: [],
              values: [],
              filters: []
            }
          }, false);
        },
      toolbarRender: function (args) {
        args.customToolbar.splice(6, 0, {
          type: 'Separator' 
        });
        args.customToolbar.splice(9, 0, {
          type: 'Separator' 
        });
      },
      gridSettings: {
        columnWidth: 140,
        contextMenuItems: [
          'Aggregate', 'CalculatedField', 'Drillthrough', 'Excel Export', 'Pdf Export', 'Csv Export', 'Expand', 'Collapse', 'Sort Ascending', 'Sort Descending'
        ]
      },
      width: '100%',
      height: 450
    }
  },

  provide: {
    pivotview: [
      FieldList, CalculatedField, Toolbar, PDFExport, ExcelExport, ConditionalFormatting, GroupingBar, GroupingBar, Grouping, NumberFormatting, DrillThrough
    ]
  }
});