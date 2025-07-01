import Vue from "vue";
import { GridPlugin, ContextMenu } from "@syncfusion/ej2-vue-grids";
import { GridChart } from '@syncfusion/ej2-grid-chart';
import { isNullOrUndefined } from "@syncfusion/ej2-base";
import { salesDatas } from './datasource.js';

Vue.use(GridPlugin);

new Vue({
  el: '#app',
  template: `
  <div id="app">
    <div class="col-lg-12 control-section">
      <div class="content-wrapper">
        <ejs-grid ref='gridInstance' id='GridChart' :dataSource='data' :height="417" :allowSelection="true"
          :selectionSettings="selectionSettings" :contextMenuItems="contextMenuItems"
          :contextMenuClick="contextMenuClick" :created="created">
          <e-columns>
            <e-column type='checkbox' width='50'></e-column>
            <e-column field='Product' headerText='Products' width='200'></e-column>
            <e-column field='Month' headerText='Month' width='140'></e-column>
            <e-column field='Online' headerText='Online' format='C2' textAlign='Right' width='160'></e-column>
            <e-column field='Retail' headerText='Retail' format='C2' textAlign='Right' width='160'></e-column>
            <e-column field='Total' headerText='Total' format='C2' textAlign='Right' width='160'></e-column>
          </e-columns>
        </ejs-grid>
      </div>
    </div>
  </div>
`
,
  data: () => {
    return {
      data: salesDatas,
      selectionSettings: { type: 'Multiple' },
      contextMenuItems: [
        'Bar', 'StackingBar', 'StackingBar100', 'Pie',
        'Column', 'StackingColumn', 'StackingColumn100',
        'Line', 'StackingLine', 'StackingLine100',
        'Area', 'StackingArea', 'StackingArea100',
        'Scatter'
      ],
      gridChart: null
    };
  },
  methods: {
    created() {
      const grid = this.$refs.gridInstance.$el.ej2_instances[0];
      this.gridChart = new GridChart({
        enablePropertyPanel: true,
        allowExport: true,
        enableRtl: grid.enableRtl,
        locale: grid.locale,
        updateChartSettings: this.updateChartSettings
      });
    },
    contextMenuClick(args) {
      if (args.chartType && args.gridInstance) {
        const chartArgs = {
          gridInstance: args.gridInstance,
          chartType: args.chartType,
          records: args.records,
        };
        const chartModel = {
          primaryXAxis: {
            valueType: 'Category',
            labelRotation: 315,
          },
          margin: {
            top: 20,
            bottom: 20,
            right: 20,
            left: 20
          },
          tooltip: {
            enable: true,
            textStyle: {
              size: '16px',
              fontFamily: 'Arial, Helvetica, sans-serif'
            }
          },
          title: 'Sales Data',
          titleStyle: {
            size: '24px',
            fontFamily: 'Arial, Helvetica, sans-serif',
            fontWeight: 'Bold'
          },
          subTitle: 'Sales data for various products over the months',
          load: (args) => {
            if (args.chart.titleStyle) {
              args.chart.titleStyle.color = '#1976d2';
            }
          }
        };
        const accumulationChartModel = {
          title: 'Sales Distribution'
        };
        const model = {
          chart: chartModel,
          accumulationChart: accumulationChartModel
        };
        const categorySeries = {
          category: ['Product', 'Month'],
          series: ['Online', 'Retail']
        };
        this.gridChart.render(chartArgs, model, categorySeries);
      }
    },
    updateChartSettings(args) {
      const chart = args.changes.chart;
      if (!chart) return;
      const chartMargin = chart.margin;
      if (chartMargin && !isNullOrUndefined(chartMargin)) {
        if (chartMargin.top < 20) chartMargin.top = 20;
        if (chartMargin.bottom < 20) chartMargin.bottom = 20;
        if (chartMargin.left< 20) chartMargin.left = 20;
        if (chartMargin.right < 20) chartMargin.right = 20;
      }
    }
  },
  provide: {
    grid: [ContextMenu]
  }
});
