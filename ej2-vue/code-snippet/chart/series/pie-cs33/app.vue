

<template>
    <div id="app">
         <ejs-accumulationchart id="container" :tooltip='tooltip'>
            <e-accumulation-series-collection>
                <e-accumulation-series :dataSource='seriesData' xName='x' yName='y' tooltipMappingName='text' radius='70%'> </e-accumulation-series>
            </e-accumulation-series-collection>
        </ejs-accumulationchart>
    </div>
</template>
<script>
import Vue from "vue";
import { AccumulationChartPlugin, PieSeries, AccumulationTooltip } from "@syncfusion/ej2-vue-charts";

Vue.use(AccumulationChartPlugin);

export default {
  data() {
    return {
      seriesData: [
                    { x: 'Jan', y: 13, text: 'Jan: 13' }, { x: 'Feb', y: 13, text: 'Feb: 13' },
                    { x: 'Mar', y: 17, text: 'Mar: 17' }, { x: 'Apr', y: 13.5, text: 'Apr: 13.5' }
            ],
       tooltip:{
           enable: true, format: '${point.tooltip}'
        }
    };
  },
  provide: {
     accumulationchart: [PieSeries, AccumulationTooltip]
  },
};
</script>
<style>
 #container {
     height: 350px;
 }
</style>


