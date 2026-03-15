<template>
  <div id="app">
    <ejs-accumulationchart id="container" :title='title' :tooltip='tooltip' 
                           :legendSettings='legendSettings' :legendRender='legendRender'>
      <e-accumulation-series-collection>
        <e-accumulation-series :dataSource='seriesData' type='Pie' xName='Browser' yName='Users' 
                               pointColorMapping='Color' :dataLabel='dataLabel'> </e-accumulation-series>
      </e-accumulation-series-collection>
    </ejs-accumulationchart>
  </div>
</template>
<script>

import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, PieSeries, AccumulationLegend, AccumulationDataLabel, AccumulationTooltip } from "@syncfusion/ej2-vue-charts";

export default {
  name: "App",
  components: {
    'ejs-accumulationchart': AccumulationChartComponent,
    'e-accumulation-series-collection': AccumulationSeriesCollectionDirective,
    'e-accumulation-series': AccumulationSeriesDirective
  },
  data() {
    return {
      seriesData: [
        { Browser: 'Chrome', Users: 37, Color: '#a16ee5' },
        { Browser: 'UC Browser', Users: 17, Color: '#f7ce69' },
        { Browser: 'iPhone', Users: 19, Color: '#55a5c2' },
        { Browser: 'Others', Users: 4, Color: '#7ddf1e' },
        { Browser: 'Opera', Users: 11, Color: '#ff6ea6' },
        { Browser: 'Android', Users: 12, Color: '#7953ac' }
      ],
      title: 'Mobile Browser Statistics',
      tooltip: { enable: true },
      dataLabel: {
        visible: true,
        format: '{value}M',
        position: 'Outside'
      },
      legendSettings: {
        visible: true,
        template: '<div style="display:flex; align-items:center; gap:8px; padding:4px 0; line-height:1.1;">' +
                  '<div style="display:flex; flex-direction:column;">' +
                  '<span class="browser-name" style="font-weight:800; font-size:14px; color:;"></span>' +
                  '<span class="browser-info" style="font-size:12px; opacity:0.85;"></span>' +
                  '</div>' +
                  '</div>'
      }
    };
  },
  provide: {
    accumulationchart: [PieSeries, AccumulationLegend, AccumulationDataLabel, AccumulationTooltip]
  },
  methods: {
    legendRender(args) {
      const chartInstance = document.getElementById('container')?.ej2_instances?.[0];
      if (chartInstance && chartInstance.series[0]) {
        const points = chartInstance.series[0].points;
        const pt = points.find((p) => p.x === args.text);

        const browser = args.text;
        const users = pt ? pt.y : 0;
        const color = args.fill;

        args.template = args.template
          .replace('color:;', 'color:' + color + ';')
          .replace('<span class="browser-name"', '<span class="browser-name">' + browser)
          .replace('<span class="browser-info"', '<span class="browser-info"><b>' + users + ' million</b> people use ' + browser);
      }
    }
  }
};
</script>
<style>
  #container {
    height: 350px;
  }
</style>
