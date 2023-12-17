
import Vue from "vue";
import { AccumulationChartPlugin, AccumulationLegend, FunnelSeries, AccumulationTooltip, AccumulationDataLabel } from "@syncfusion/ej2-vue-charts";

Vue.use(AccumulationChartPlugin);

;
new Vue({
    el: '#app',
    template: `
    <div id="app">
         <ejs-accumulationchart id="container" :legendSettings="legendSettings" :title="title" :tooltip="tooltip" :load="load" :resized="resized" >
            <e-accumulation-series-collection>
                <e-accumulation-series :dataSource='seriesData' type='Funnel' xName='x' yName='y' neckWidth='15%'
            neckHeight='18%' name='2017 Population' explode="false" :dataLabel="dataLabel"> </e-accumulation-series>
            </e-accumulation-series-collection>
        </ejs-accumulationchart>
    </div>
`,

    data() {
        return {
            seriesData: [
                { 'x': 'China', y: 1409517397, text: 'China' },
                { 'x': 'India', y: 1339180127, text: 'India' },
                { 'x': 'United States', y: 324459463, text: 'United States' },
                { 'x': 'Indonesia', y: 263991379, text: 'Indonesia' },
                { 'x': 'Brazil', y: 209288278, text: 'Brazil' },
                { 'x': 'Pakistan', y: 197015955, text: 'Pakistan' },
                { 'x': 'Nigeria', y: 190886311, text: 'Nigeria' },
                { 'x': 'Bangladesh', y: 164669751, text: 'Bangladesh' },
                { 'x': 'Russia', y: 143989754, text: 'Russia' },
                { 'x': 'Mexico', y: 129163276, text: 'Mexico' },
                { 'x': 'Japan', y: 127484450, text: ' Japan' },
                { 'x': 'Ethiopia', y: 104957438, text: 'Ethiopia' },
                { 'x': 'Philippines', y: 104918090, text: 'Philippines' },
                { 'x': 'Egypt', y: 97553151, text: 'Egypt' },
                { 'x': 'Vietnam', y: 95540800, text: 'Vietnam' },
                { 'x': 'Germany', y: 82114224, text: 'Germany' }],

            legendSettings: { visible: false },
            title: 'Top population countries in the world 2017',
            tooltip: { enable: true, format: '${point.x} : <b>${point.y}</b>' },
            dataLabel: {
                visible: true, position: 'Outside',
                connectorStyle: { length: '6%' }, name: 'text',
            },
        };
    },
    provide: {
        accumulationchart: [FunnelSeries, AccumulationTooltip, AccumulationDataLabel, AccumulationLegend]
    },
    methods: {
        load: function (args) {
            if (args.accumulation.availableSize) {
                if (args.accumulation.availableSize.width < args.accumulation.availableSize.height) {
                    args.accumulation.series[0].width = '80%';
                    args.accumulation.series[0].height = '70%';
                }
            }
        },
        resized: function (args) {
            let bounds = document.getElementById('container').getBoundingClientRect();
            if (bounds.width < bounds.height) {
                args.accumulation.series[0].width = '80%';
                args.accumulation.series[0].height = '70%';
            } else {
                args.accumulation.series[0].width = '60%';
                args.accumulation.series[0].height = '80%';
            }
        },
    }

});