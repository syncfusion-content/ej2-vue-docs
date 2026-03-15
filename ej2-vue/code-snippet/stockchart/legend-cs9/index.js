import Vue from "vue";
import { chartData } from "./datasource.js";
import {
  StockChartPlugin, DateTime, LineSeries, RangeTooltip, StockLegend
} from "@syncfusion/ej2-vue-charts";

Vue.use(StockChartPlugin);

;
new Vue({
	el: '#app',
	template: `
  <div class="control-section">
    <div>
      <ejs-stockchart
        id="stockchartcontainer"
        :height="height"
        :primaryXAxis="primaryXAxis"
        :primaryYAxis="primaryYAxis"
        :legendSettings="legendSettings"
        :title="title">
        <e-stockchart-series-collection>
          <e-stockchart-series :dataSource="seriesData" type="Line" name="Google"></e-stockchart-series>
          <e-stockchart-series :dataSource="seriesData" type="Line" name="MicrosoftEdge"></e-stockchart-series>
        </e-stockchart-series-collection>
      </ejs-stockchart>
    </div>
  </div>
`,

  data() {
    return {
        iconMap: {
          'Google': 'https://img.icons8.com/?size=100&id=110580&format=png&color=000000',
          'MicrosoftEdge': 'https://img.icons8.com/?size=100&id=4rcnsWVaR2ja&format=png&color=000000'
        },
        seriesData: chartData,
        height: '455px',
        primaryXAxis: {
            majorTickLines: { color: 'transparent', width: 0 }
        },
        primaryYAxis: {
            lineStyle: { color: 'transparent' },
            majorTickLines: { color: 'transparent', width: 0 }
        },
        title: 'AAPL Stock Price',
        legendSettings: {
          visible: true,
          template: this.legendTemplate
        }
    };
  },
  provide: {
    stockChart: [DateTime, LineSeries, RangeTooltip, StockLegend]
  },
  methods: {
    legendTemplate(props) {
      const seriesName = props.series.name;
      const icon = this.iconMap[seriesName] || '';
      return `<div style="display:flex;align-items:center;gap:8px;padding:5px;cursor:pointer;">
          <img src="${icon}" width="24" height="24" style="object-fit:contain;border-radius:2px;" alt="${seriesName}" />
          <span style="font-size:13px;font-weight:500;">${seriesName}</span>
        </div>`;
    }
  }

});
