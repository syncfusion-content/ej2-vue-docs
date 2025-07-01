
import Vue from "vue";
import { GridPlugin, ContextMenu } from "@syncfusion/ej2-vue-grids";
import { salesDatas } from './datasource.js';
import { GridChart } from '@syncfusion/ej2-grid-chart';

Vue.use(GridPlugin);

new Vue({
	el: '#app',
	template: `
    <div id="app">
    <div class="col-lg-12 control-section">
    <div class="content-wrapper">
      <ejs-grid ref='gridInstance' id='GridChart' :dataSource='data' :height="417" :allowSelection="true" :selectionSettings="selectionSettings"
      :contextMenuItems="contextMenuItems" :contextMenuClick="contextMenuClick" :created="created">
        <e-columns>
          <e-column type='checkbox' width='50'></e-column>
          <e-column field='Product' headerText='Products' width='200' ></e-column>
          <e-column field='Month' headerText='Month' width='140' ></e-column>
          <e-column field='Online' headerText='Online' format='C2' textAlign='Right' width='160'></e-column>
          <e-column field='Retail' headerText='Retail' format='C2' textAlign='Right' width='160'></e-column>
          <e-column field='Total' headerText='Total' format='C2' textAlign='Right' width='160' ></e-column>
        </e-columns>
      </ejs-grid>
    </div>
  </div>
    </div>
`,

  data: () => {
    return {
      data: salesDatas,
      selectionSettings: { type: 'Multiple' },
      contextMenuItems: ['Bar', 'StackingBar', 'StackingBar100', 'Pie',
        'Column', 'StackingColumn', 'StackingColumn100',
        'Line', 'StackingLine', 'StackingLine100',
        'Area', 'StackingArea', 'StackingArea100',
        'Scatter'
      ],
      gridChart: null 
    }
  },
  methods: {
    created() {
      var grid = this.$refs.gridInstance.$el.ej2_instances[0];
      this.gridChart = new GridChart({
        enableRtl: grid.enableRtl,
        locale: grid.locale,
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
          }
        };
        const model= {
          chart: chartModel,
          accumulationChart: { }
        };
        const categorySeries= {
          category: ['Product', 'Month'],
          series: ['Online', 'Retail']
        };
        this.gridChart.render(chartArgs, model, categorySeries);
      }
    }
  },
  provide: {
    grid: [ContextMenu]
  }

});