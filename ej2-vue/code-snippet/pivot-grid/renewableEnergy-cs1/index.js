
import Vue from "vue";
import { PivotViewPlugin, PivotCellSelectedEventArgs, FieldList } from "@syncfusion/ej2-vue-pivotview";
import { GridSettings } from '@syncfusion/ej2-pivotview/src/pivotview/model/gridsettings';
import { ChartPlugin, ColumnSeries, Category, Legend, Tooltip } from '@syncfusion/ej2-vue-charts';
import { renewableEnergy } from './datasource.js';

Vue.use(PivotViewPlugin);
Vue.use(ChartPlugin);

let onInit: boolean = true;
let measureList: { [key: string]: string } = {};
let chart: Chart;
let selectedCells: CellSelectedObject[];
let chartSeries: SeriesModel[];

new Vue({
	el: '#app',
	template: `
    <div id="app">
        <ejs-pivotview id="pivotview_chart" ref="pivotview_chart" :dataSourceSettings="dataSourceSettings" :gridSettings="gridSettings"
          :dataBound="dataBound" :cellSelected="cellSelected" :width="width" :height="height">
        </ejs-pivotview>
        <br/>
        <ejs-chart id="chart" ref="chart" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'   :legendSettings='legendSettings' :tooltip='tooltip'>
            <e-series-collection>
                <e-series> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
`,

  data () {
    return {
      dataSourceSettings: {
        dataSource: renewableEnergy,
        expandAll: true,
        enableSorting: true,
        drilledMembers: [{ name: 'Year', items: ['FY 2015', 'FY 2017', 'FY 2018'] }],
        formatSettings: [{ name: 'ProCost', format: 'C0' }],
        rows: [
            { name: 'Year', caption: 'Production Year' }
        ],
        columns: [
            { name: 'EnerType', caption: 'Energy Type' },
            { name: 'EneSource', caption: 'Energy Source' }
        ],
        values: [
            { name: 'ProCost', caption: 'Revenue Growth' }
        ],
        filters: []
      },
      gridSettings: {
        columnWidth: 120,
        allowSelection: true,
        selectionSettings: {mode: 'Cell', type: 'Multiple', cellSelectionMode: 'Box'}
      },
      width: '100%',
      height: 290,
      primaryXAxis: {
        valueType: 'Category'
      },
      primaryYAxis:{
        labelFormat: '${value}K'
      },
      legendSettings: {
        visible: true
      },
      title: "Sales Analysis",
      tooltip: {
        enable: true
      },
    }
  },
  provide: {
    chart: [ColumnSeries, Category, Legend, Tooltip ]
  },
  methods: {
    frameChartSeries: function () {
        let pivotGridObj = document.getElementById('pivotview_chart').ej2_instances[0];
        let columnGroupObject: { [key: string]: { x: string, y: number }[] } = {};
        let valuesContent = pivotGridObj.engineModule.valueContent;
        if (onInit) {
            for (let cCnt = 0; cCnt < valuesContent.length; cCnt++) {
                for (let cellIndex of Object.keys(valuesContent[cCnt])) {
                    let cell = valuesContent[cCnt][Number(cellIndex)];
                    if (cell.columnHeaders && cell.rowHeaders) {
                        let columnSeries = pivotGridObj.dataSourceSettings.values.length > 1 ?
                            (cell.columnHeaders.toString() + ' ~ ' + measureList[cell.actualText]) : cell.columnHeaders.toString();
                        if (columnGroupObject[columnSeries]) {
                            columnGroupObject[columnSeries].push({ x: cell.rowHeaders.toString(), y: Number(cell.value) });
                        } else {
                            columnGroupObject[columnSeries] = [{ x: cell.rowHeaders.toString(), y: Number(cell.value) }];
                        }
                    }
                }
            }
        } else {
            for (let cell of selectedCells) {
                if (cell.measure !== '') {
                    let columnSeries = (pivotGridObj.dataSourceSettings.values.length > 1 && measureList[cell.measure]) ?
                        (cell.columnHeaders.toString() + ' ~ ' + measureList[cell.measure]) : cell.columnHeaders.toString();
                    if (columnGroupObject[columnSeries]) {
                        columnGroupObject[columnSeries].push({ x: cell.rowHeaders == '' ? 'Grand Total' : cell.rowHeaders.toString(), y: Number(cell.value) });
                    } else {
                        columnGroupObject[columnSeries] = [{ x: cell.rowHeaders == '' ? 'Grand Total' : cell.rowHeaders.toString(), y: Number(cell.value) }];
                    }
                }
            }
        }
        let columnKeys: string[] = Object.keys(columnGroupObject);
        let chartSeries: SeriesModel[] = [];
        for (let key of columnKeys) {
            chartSeries.push({
                dataSource: columnGroupObject[key],
                xName: 'x',
                yName: 'y',
                type: 'Column',
                name: key
            });
        }
        return chartSeries;
    },
    chartUpdate: function () {
        let pivotGridObj = document.getElementById('pivotview_chart').ej2_instances[0];
        let chart = document.getElementById('chart').ej2_instances[0];
        if (onInit) {
            onInit = false;
        } else {
            chart.series = chartSeries;
            chart.primaryXAxis.title = pivotGridObj.dataSourceSettings.rows.map(function (args) { return args.caption || args.name }).join(' ~ ');
            chart.primaryYAxis.title = pivotGridObj.dataSourceSettings.values.map(function (args) { return args.caption || args.name }).join(' ~ ');
            chart.refresh();
        }
    },
    dataBound: function () {
        let pivotGridObj = document.getElementById('pivotview_chart').ej2_instances[0];
        if(onInit) {
            for (let value of pivotGridObj.dataSourceSettings.values) {
                measureList[value.name] = value.caption || value.name;
            }
            pivotGridObj.grid.selectionModule.selectCellsByRange(
            { cellIndex: 1, rowIndex: 1 },
            { cellIndex: 3, rowIndex: 3 }
            );
            chartSeries = this.frameChartSeries();
            this.chartUpdate();
        }
    },
    cellSelected: function (args: PivotCellSelectedEventArgs) {
        selectedCells = args.selectedCellsInfo;
        if (selectedCells && selectedCells.length > 0) {
            chartSeries = this.frameChartSeries();
            this.chartUpdate();
        }
    }
  }

});