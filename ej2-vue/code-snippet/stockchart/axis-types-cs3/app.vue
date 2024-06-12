<template>
  <div class="control-section">
    <div>
      <ejs-stockchart
        id="stockchartcontainer"
        :primaryXAxis="primaryXAxis"
        :crosshair="crosshair"
        :tooltip="tooltip">
        <e-stockchart-series-collection>
          <e-stockchart-series :dataSource="seriesData" type="Line" xName='x' yName='y'></e-stockchart-series>
        </e-stockchart-series-collection>
      </ejs-stockchart>
    </div>
  </div>
</template>
<script>

import {
  StockChartComponent, StockChartSeriesCollectionDirective, StockChartSeriesDirective, DateTimeCategory, CandleSeries, RangeTooltip, LineSeries, SplineSeries, Tooltip, Crosshair,
  HiloOpenCloseSeries, HiloSeries, RangeAreaSeries, Trendlines, EmaIndicator, RsiIndicator,BollingerBands,  TmaIndicator, MomentumIndicator, SmaIndicator, AtrIndicator, AccumulationDistributionIndicator, MacdIndicator, StochasticIndicator, Export
} from "@syncfusion/ej2-vue-charts";



let datetimeCategoryData = [
  { x: new Date(2021, 1, 11) }, { x: new Date(2021, 1, 12) }, { x: new Date(2021, 1, 13) }, { x: new Date(2021, 1, 14) }, { x: new Date(2021, 1, 15) },
  { x: new Date(2021, 1, 19) }, { x: new Date(2021, 1, 20) }, { x: new Date(2021, 1, 21) }, { x: new Date(2021, 1, 22) }, { x: new Date(2021, 3, 1) },
  { x: new Date(2021, 3, 2) },  { x: new Date(2021, 4, 1) },  { x: new Date(2021, 4, 5) },  { x: new Date(2021, 4, 6) },  { x: new Date(2021, 4, 7) },
  { x: new Date(2021, 4, 11) }, { x: new Date(2021, 4, 13) }, { x: new Date(2021, 4, 15) }, { x: new Date(2021, 4, 16) }, { x: new Date(2021, 4, 17) },
  { x: new Date(2021, 4, 18) }, { x: new Date(2021, 4, 20) }, { x: new Date(2021, 4, 21) }, { x: new Date(2021, 4, 23) }, { x: new Date(2021, 4, 25) },
  { x: new Date(2021, 5, 1) },  { x: new Date(2021, 5, 2) },  { x: new Date(2021, 5, 6) },  { x: new Date(2021, 5, 7) },  { x: new Date(2021, 5, 8) },
  { x: new Date(2021, 5, 11) }, { x: new Date(2021, 5, 15) }, { x: new Date(2021, 5, 18) }, { x: new Date(2021, 5, 20) }, { x: new Date(2021, 5, 25) },
  { x: new Date(2021, 6, 1) },  { x: new Date(2021, 6, 2) },  { x: new Date(2021, 6, 3) },  { x: new Date(2021, 6, 4) },  { x: new Date(2021, 6, 5) },
  { x: new Date(2021, 6, 10) }, { x: new Date(2021, 6, 11) }, { x: new Date(2021, 6, 12) }, { x: new Date(2021, 6, 13) }, { x: new Date(2021, 6, 15) },
  { x: new Date(2021, 6, 16) }, { x: new Date(2021, 6, 17) }, { x: new Date(2021, 6, 18) }, { x: new Date(2021, 6, 19) }, { x: new Date(2021, 6, 20) }
];

let series1 = [];
let point1;
for (var j = 1; j < 46; j++) {
  point1 = {
    x: datetimeCategoryData[j].x,
    y: getRandomInRange(120, 130),
    high: getRandomInRange(88, 92),
    low: getRandomInRange(76, 86),
    open: getRandomInRange(75, 85),
    close: getRandomInRange(85, 90),
    volume: getRandomInRange(660187068, 965935749),
  };
  series1.push(point1);
}

function getRandomInRange(min, max) {
  const randomDecimal = Math.random();
  const randomValue = randomDecimal * (max - min) + min;
  return randomValue;
}

export default {
name: "App",
components: {
    'ejs-stockchart': StockChartComponent,
    'e-stockchart-series-collection': StockChartSeriesCollectionDirective,
    'e-stockchart-series': StockChartSeriesDirective
  },
  data() {
    return {
        seriesData: series1,
        primaryXAxis: {
          valueType: "DateTimeCategory",
          majorGridLines: { width: 0 },
          crosshairTooltip: { enable: true }
        },
        crosshair: {
         enable: true
        },
        tooltip: { enable: true, header: 'AAPL Stock Price' }
    };
  },
  provide: {
    stockChart: [
      DateTimeCategory, RangeTooltip, LineSeries, SplineSeries, CandleSeries, Tooltip, Crosshair, HiloOpenCloseSeries, HiloSeries, RangeAreaSeries, Trendlines, EmaIndicator, RsiIndicator,
      BollingerBands, TmaIndicator, MomentumIndicator, SmaIndicator, AtrIndicator, AccumulationDistributionIndicator, MacdIndicator, StochasticIndicator, Export
    ]
  }
};
</script>
<style>
  #container {
    height: 350px;
  }
</style>