<template>
  <div id="app">
    <ejs-accumulationchart id="container" :load='load' :loaded='loaded' :noDataTemplate='noDataTemplate'>
      <e-accumulation-series-collection>
        <e-accumulation-series :dataSource='seriesData' xName='x' yName='y'> </e-accumulation-series>
      </e-accumulation-series-collection>
    </ejs-accumulationchart>
    <div v-if="!hasData" class="no-data-button-overlay">
      <ejs-button content="Load Data" iconCss="e-icons e-refresh" cssClass="load-data-btn e-outline" :isPrimary="false"
        @click="loadData"></ejs-button>
    </div>
  </div>
</template>
<script>

import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, PieSeries } from "@syncfusion/ej2-vue-charts";

export default {
  name: "App",
  components: {
    'ejs-accumulationchart': AccumulationChartComponent,
    'e-accumulation-series-collection': AccumulationSeriesCollectionDirective,
    'e-accumulation-series': AccumulationSeriesDirective
  },
  data() {
    return {
      noDataTemplate: `
                <div id="noDataTemplateContainer" class="light-bg">
                    <div class="template-align">    
                        <img src="no-data.png" alt="No Data"/>
                    </div>
                    <div class="template-align">
                        <p style="font-size: 15px; margin: 10px 0 10px;"><strong>No data available to display.</strong></p>
                    </div>
                </div>`,
      seriesData: [
        { x: 'Jan', y: 3, fill: '#498fff', text: 'January' }, { x: 'Feb', y: 3.5, fill: '#ffa060', text: 'February' },
        { x: 'Mar', y: 7, fill: '#ff68b6', text: 'March' }, { x: 'Apr', y: 13.5, fill: '#81e2a1', text: 'April' }
      ]
    };
  },
  provide: {
    accumulationchart: [PieSeries]
  },
  methods: {
    load(args) {
      seriesData = hasData ? [
        { x: 'Jan', y: 3, fill: '#498fff', text: 'January' }, { x: 'Feb', y: 3.5, fill: '#ffa060', text: 'February' },
        { x: 'Mar', y: 7, fill: '#ff68b6', text: 'March' }, { x: 'Apr', y: 13.5, fill: '#81e2a1', text: 'April' }
      ] : [];
    },
    loaded(args) {
    },
    loadData() {
      seriesData = [
        { x: 'Jan', y: 3, fill: '#498fff', text: 'January' }, { x: 'Feb', y: 3.5, fill: '#ffa060', text: 'February' },
        { x: 'Mar', y: 7, fill: '#ff68b6', text: 'March' }, { x: 'Apr', y: 13.5, fill: '#81e2a1', text: 'April' }
      ];
      hasData = true;
      const chart = this.$refs.chart.ej2Instances;
      chart.series[0].animation.enable = true;
      chart.refresh();
    }
  }
};
</script>
<style>
#container {
  height: 350px;
}
</style>