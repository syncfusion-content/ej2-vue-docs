import Vue from "vue";
import { ChartPlugin, ScatterSeries } from "@syncfusion/ej2-vue-charts";

Vue.use(ChartPlugin);

;
new Vue({
    el: '#app',
    template: `
    <div id="app">
         <ejs-chart id="container" :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis' :title='title'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Scatter' xName='x' yName='y' :marker='marker' :emptyPointSettings='emptyPointSettings'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
`,

    data() {
        return {
            seriesData: [
                { x: 1, y: 15 }, { x: 2, y: 25 }, { x: 3, y: 35 }, { x: 4, y: null },
                { x: 5, y: 55 }, { x: 6, y: 60 }, { x: 7, y: 65 }, { x: 8, y: 70 },
                { x: 9, y: 75 }, { x: 10, y: 80 }, { x: 11, y: undefined }, { x: 12, y: 90 },
                { x: 13, y: 92 }, { x: 14, y: 94 }, { x: 15, y: 96 }, { x: 16, y: null },
                { x: 17, y: 98 }, { x: 18, y: 99 }, { x: 19, y: 100 }, { x: 20, y: 100 }
            ],
            primaryXAxis: {
                minimum: 0,
                maximum: 21,
                interval: 3,
                majorGridLines: { width: 0 },
                title: 'Study Hours (Per Week)'
            },
            primaryYAxis:
            {
                title: 'Test Scores (%)',
                minimum: 0,
                maximum: 120,
                interval: 20,
                labelFormat: '{value}%'
            },
            title: 'Relationship Between Study Hours and Test Scores',
            marker: {
                visible: false,
                width: 10,
                height: 10,
                shape: 'Circle'
            },
            emptyPointSettings: {
                mode: 'Zero'
            }
        };
    },
    provide: {
        chart: [ScatterSeries]
    }

});