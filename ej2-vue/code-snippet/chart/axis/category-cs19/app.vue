

<template>
    <div id="app">
         <ejs-chart id="container" :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Bar' xName='x' yName='y' name='Users' :marker='marker' tooltipMappingName='country'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
</template>
<script>
import Vue from "vue";
import { ChartPlugin, BarSeries, DateTime, Category, DataLabel} from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

export default {
  data() {
    return {
    seriesData:[
                    { x: 'Germany', y: 72, country: 'GER: 72'},
                    { x: 'Russia', y: 103.1, country: 'RUS: 103.1'},
                    { x: 'Brazil', y: 139.1, country: 'BRZ: 139.1'},
                    { x: 'India', y: 462.1, country: 'IND: 462.1'},
                    { x: 'China', y: 721.4, country: 'CHN: 721.4'},
                    { x: 'United States<br>Of America', y: 286.9, country: 'USA: 286.9'},
                    { x: 'Great Britain', y: 115.1, country: 'GBR: 115.1'},
                    { x: 'Nigeria', y: 97.2, country: 'NGR: 97.2'}
        ],
      primaryXAxis: {
             title: 'Country',
            valueType: 'Category',
            majorGridLines: { width: 0 },
            enableTrim: false,
        },
        primaryYAxis: {
          minimum: 0,
            maximum: 800,
           // labelFormat: Browser.isDevice ? '{value}' : '{value}M',
            labelStyle: {
                color: 'transparent'
            }
        },
        marker: {
                  dataLabel: { visible: true, position: 'Top', font: { fontWeight: '600',
                            color: '#ffffff'} }
                }
    };
  },
  provide: {
    chart: [BarSeries, DateTime, Category, DataLabel]
  }
};
</script>
<style>
 #container {
   height: 350px;
 }
</style>


