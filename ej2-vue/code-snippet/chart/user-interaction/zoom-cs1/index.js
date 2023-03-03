
import Vue from "vue";
import { ChartPlugin, AreaSeries, Category, Zoom } from "@syncfusion/ej2-vue-charts";
import { L10n } from '@syncfusion/ej2-base';

Vue.use(ChartPlugin);

L10n.load({
    'ar-AR': {
        'chart': {
            ZoomIn: 'تكبير',
            ZoomOut: 'تصغير',
            Zoom: 'زوم',
            Pan: 'مقلاة',
            Reset: 'إعادة تعيين',
        },
    }
});
;
new Vue({
	el: '#app',
	template: `
    <div id="app">
       <ejs-chart id="container" :locale='locale' :title='title' :primaryXAxis='primaryXAxis' :zoomSettings='zoom'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Area' xName='x' yName='y' name='Product X'> </e-series>
                <e-series :dataSource='seriesData' type='Area' xName='x' yName='y1' name='Product Y'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
`,

  data() {
    return {
      seriesData: [
                { x: 1900, y: 4, y1: 2.6, y2: 2.8 }, { x: 1920, y: 3.0, y1: 2.8, y2: 2.5 },
                { x: 1940, y: 3.8, y1: 2.6, y2: 2.8 }, { x: 1960, y: 3.4, y1: 3, y2: 3.2 },
                { x: 1980, y: 3.2, y1: 3.6, y2: 2.9 }, { x: 2000, y: 3.9, y1: 3, y2: 2 }
              ],
        primaryXAxis: {
            title: 'Year',
            edgeLabelPlacement: 'Shift'
        },
        zoom: {
            enableMouseWheelZooming: true,
            enableDeferredZooming: true,
            enablePinchZooming: true,
            enableSelectionZooming: true
        },
      title: "Average Sales Comparison",
      locale: "ar-AR"
    };
  },
  provide: {
    chart: [AreaSeries, Category, Zoom]
  },

});