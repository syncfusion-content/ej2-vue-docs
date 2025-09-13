<template>
  <div id="app">
    <ejs-accumulationchart id="container" ref='chart' :load='load' :loaded='loaded' :noDataTemplate='noDataTemplate'>
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
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";

export default {
  name: "App",
  components: {
    'ejs-accumulationchart': AccumulationChartComponent,
    'ejs-button': ButtonComponent,
    'e-accumulation-series-collection': AccumulationSeriesCollectionDirective,
    'e-accumulation-series': AccumulationSeriesDirective
  },
  data() {
    return {
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
      seriesData: []
    };
  },
  provide: {
    accumulationchart: [PieSeries]
  },
  methods: {
    load(args) {
      this.seriesData = this.hasData ? [
        { x: 'Jan', y: 3, fill: '#498fff', text: 'January' }, { x: 'Feb', y: 3.5, fill: '#ffa060', text: 'February' },
        { x: 'Mar', y: 7, fill: '#ff68b6', text: 'March' }, { x: 'Apr', y: 13.5, fill: '#81e2a1', text: 'April' }
      ] : [];
    },
    loaded(args) {
    },
    loadData() {
      this.seriesData = [
        { x: 'Jan', y: 3, fill: '#498fff', text: 'January' }, { x: 'Feb', y: 3.5, fill: '#ffa060', text: 'February' },
        { x: 'Mar', y: 7, fill: '#ff68b6', text: 'March' }, { x: 'Apr', y: 13.5, fill: '#81e2a1', text: 'April' }
      ];
      this.hasData = true;
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