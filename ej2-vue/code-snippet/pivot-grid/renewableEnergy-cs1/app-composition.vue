<template>
    <div id="app">
        <ejs-pivotview id="pivotview_chart" ref="pivotview_chart" :dataSourceSettings="dataSourceSettings"
            :gridSettings="gridSettings" :dataBound="dataBound" :cellSelected="cellSelected" :width="width"
            :height="height">
        </ejs-pivotview>
        <br />
        <ejs-chart id="chart" ref="chart" :title="title" :primaryXAxis="primaryXAxis" :primaryYAxis="primaryYAxis"
            :legendSettings="legendSettings" :tooltip="tooltip">
            <e-series-collection>
                <e-series> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
  </template>
  
  <script setup>
  import { provide } from "vue";
  import {
    PivotViewComponent as EjsPivotview
  } from "@syncfusion/ej2-vue-pivotview";
  import {
    ChartComponent as EjsChart,
    SeriesCollectionDirective as ESeriesCollection, SeriesDirective as ESeries,
    ColumnSeries,
    Category,
    Legend,
    Tooltip,
  } from "@syncfusion/ej2-vue-charts";
  
  import { renewableEnergy } from "./datasource.js";
  
  let onInit = true;
  let measureList = {};
  let chart;
  let selectedCells;
  let chartSeries;
  const dataSourceSettings = {
    dataSource: renewableEnergy,
    expandAll: true,
    enableSorting: true,
    drilledMembers: [
        { name: "Year", items: ["FY 2015", "FY 2017", "FY 2018"] },
    ],
    formatSettings: [{ name: "ProCost", format: "C0" }],
    rows: [{ name: "Year", caption: "Production Year" }],
    columns: [
        { name: "EnerType", caption: "Energy Type" },
        { name: "EneSource", caption: "Energy Source" },
    ],
    values: [{ name: "ProCost", caption: "Revenue Growth" }],
    filters: [],
  };
  const gridSettings = {
    columnWidth: 120,
    allowSelection: true,
    selectionSettings: {
        mode: "Cell",
        type: "Multiple",
        cellSelectionMode: "Box",
    },
  };
  const width = "100%";
  const height = 290;
  const primaryXAxis = {
    valueType: "Category",
  };
  const primaryYAxis = {
    labelFormat: "${value}K",
  };
  const legendSettings = {
    visible: true,
  };
  const title = "Sales Analysis";
  const tooltip = {
    enable: true,
  };
  
  provide('chart', [ColumnSeries, Category, Legend, Tooltip],);
  
  const frameChartSeries = () => {
    let pivotGridObj =
        document.getElementById("pivotview_chart").ej2_instances[0];
    let columnGroupObject = {};
    let valuesContent = pivotGridObj.engineModule.valueContent;
    if (onInit) {
        for (let cCnt = 0; cCnt < valuesContent.length; cCnt++) {
            for (let cellIndex of Object.keys(valuesContent[cCnt])) {
                let cell = valuesContent[cCnt][Number(cellIndex)];
                if (cell.columnHeaders && cell.rowHeaders) {
                    let columnSeries =
                        pivotGridObj.dataSourceSettings.values.length > 1
                            ? cell.columnHeaders.toString() +
                            " ~ " +
                            measureList[cell.actualText]
                            : cell.columnHeaders.toString();
                    if (columnGroupObject[columnSeries]) {
                        columnGroupObject[columnSeries].push({
                            x: cell.rowHeaders.toString(),
                            y: Number(cell.value),
                        });
                    } else {
                        columnGroupObject[columnSeries] = [
                            { x: cell.rowHeaders.toString(), y: Number(cell.value) },
                        ];
                    }
                }
            }
        }
    } else {
        for (let cell of selectedCells) {
            if (cell.measure !== "") {
                let columnSeries =
                    pivotGridObj.dataSourceSettings.values.length > 1 &&
                        measureList[cell.measure]
                        ? cell.columnHeaders.toString() +
                        " ~ " +
                        measureList[cell.measure]
                        : cell.columnHeaders.toString();
                if (columnGroupObject[columnSeries]) {
                    columnGroupObject[columnSeries].push({
                        x:
                            cell.rowHeaders == ""
                                ? "Grand Total"
                                : cell.rowHeaders.toString(),
                        y: Number(cell.value),
                    });
                } else {
                    columnGroupObject[columnSeries] = [
                        {
                            x:
                                cell.rowHeaders == ""
                                    ? "Grand Total"
                                    : cell.rowHeaders.toString(),
                            y: Number(cell.value),
                        },
                    ];
                }
            }
        }
    }
    let columnKeys = Object.keys(columnGroupObject);
    let chartSeries = [];
    for (let key of columnKeys) {
        chartSeries.push({
            dataSource: columnGroupObject[key],
            xName: "x",
            yName: "y",
            type: "Column",
            name: key,
        });
    }
    return chartSeries;
  };
  const chartUpdate = () => {
    let pivotGridObj =
        document.getElementById("pivotview_chart").ej2_instances[0];
    let chart = document.getElementById("chart").ej2_instances[0];
    if (onInit) {
        onInit = false;
    } else {
        chart.series = chartSeries;
        chart.primaryXAxis.title = pivotGridObj.dataSourceSettings.rows
            .map(function (args) {
                return args.caption || args.name;
            })
            .join(" ~ ");
        chart.primaryYAxis.title = pivotGridObj.dataSourceSettings.values
            .map(function (args) {
                return args.caption || args.name;
            })
            .join(" ~ ");
        chart.refresh();
    }
  };
  const dataBound = () => {
    let pivotGridObj =
        document.getElementById("pivotview_chart").ej2_instances[0];
    if (onInit) {
        for (let value of pivotGridObj.dataSourceSettings.values) {
            measureList[value.name] = value.caption || value.name;
        }
        pivotGridObj.grid.selectionModule.selectCellsByRange(
            { cellIndex: 1, rowIndex: 1 },
            { cellIndex: 3, rowIndex: 3 }
        );
        chartSeries = frameChartSeries();
        chartUpdate();
    }
  };
  const cellSelected = (args) => {
    selectedCells = args.selectedCellsInfo;
    if (selectedCells && selectedCells.length > 0) {
        chartSeries = frameChartSeries();
        chartUpdate();
    }
  };
  
  </script>
  <style>
  @import "../node_modules/@syncfusion/ej2-vue-pivotview/styles/material.css";
  </style>