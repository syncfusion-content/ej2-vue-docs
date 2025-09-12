<template>
  <div class="control-section">
    <div>
      <ejs-stockchart id="stockchartcontainer" ref='stockChart' :primaryXAxis="primaryXAxis" :primaryYAxis="primaryYAxis" :title="title"
        :load='load' :noDataTemplate='noDataTemplate'>
        <e-stockchart-series-collection>
          <e-stockchart-series :dataSource="seriesData" type="Candle" volume='volume' xName='date' low='low' high='high'
            open='open' close='close'></e-stockchart-series>
        </e-stockchart-series-collection>
      </ejs-stockchart>
      <div v-if="!hasData" class="no-data-button-overlay">
        <ejs-button content="Load Data" iconCss="e-icons e-refresh" cssClass="load-data-btn e-outline"
          :isPrimary="false" @click="loadData"></ejs-button>
      </div>
    </div>
  </div>
</template>
<script>

import { chartData } from "./datasource.js";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";
import {
  StockChartComponent, StockChartSeriesCollectionDirective, StockChartSeriesDirective, DateTime, CandleSeries, RangeTooltip, LineSeries, SplineSeries,
  HiloOpenCloseSeries, HiloSeries, RangeAreaSeries, Trendlines, EmaIndicator, RsiIndicator, BollingerBands, TmaIndicator, MomentumIndicator, SmaIndicator, AtrIndicator, AccumulationDistributionIndicator, MacdIndicator, StochasticIndicator, Export
} from "@syncfusion/ej2-vue-charts";



export default {
  name: "App",
  components: {
    'ejs-stockchart': StockChartComponent,
    'ejs-button': ButtonComponent,
    'e-stockchart-series-collection': StockChartSeriesCollectionDirective,
    'e-stockchart-series': StockChartSeriesDirective
  },
  data() {
    return {
      seriesData: chartData,
      hasData: false,
      noDataTemplate: `
                <div id="noDataTemplateContainer" class="light-bg">
                    <div class="template-align">    
                        <img src="no-data.png" alt="No Data"/>
                    </div>
                    <div class="template-align">
                        <p style="font-size: 15px; margin: 10px 0 10px;"><strong>No data available to display.</strong></p>
                    </div>
                </div>`,
      primaryXAxis: {
        valueType: "DateTime",
        majorGridLines: { color: "transparent" },
      },
      primaryYAxis: {
        majorTickLines: { color: "transparent", width: 0 }
      },
      title: 'AAPL Stock Price',
    };
  },
  provide: {
    stockChart: [
      DateTime, RangeTooltip, LineSeries, SplineSeries, CandleSeries, HiloOpenCloseSeries, HiloSeries, RangeAreaSeries, Trendlines, EmaIndicator, RsiIndicator,
      BollingerBands, TmaIndicator, MomentumIndicator, SmaIndicator, AtrIndicator, AccumulationDistributionIndicator, MacdIndicator, StochasticIndicator, Export
    ]
  },
  methods: {
    load(args) {
      this.seriesData = this.hasData ? chartData : [];
    },
    loaded(args) {
    },
    loadData() {
      this.seriesData = chartData;
      this.hasData = true;
      const stockChart = this.$refs.stockChart.ej2Instances;
      stockChart.series[0].animation.enable = true;
      stockChart.refresh();
    }
  }
};
</script>
<style>
#container {
  height: 350px;
}
#noDataTemplateContainer {
  height: inherit;
  width: inherit;
}

.no-data-button-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-top: 60px;
  /* Adjust this to position below the no-data message */
  z-index: 10;
}

.load-data-btn {
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 50px;
}

.light-bg {
  background-color: #fafafa;
  color: #000000;
}

.template-align img {
  max-width: 150px;
  /* Adjust size as needed */
  max-height: 150px;
  margin-top: 55px;
}

.template-align {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
</style>