<template>
    <div id="app">
        <ejs-accumulationchart id="container" :centerLabel="centerLabel">
            <e-accumulation-series-collection>
                <e-accumulation-series :dataSource='seriesData' xName='x' yName='y' innerRadius='65%'>
                </e-accumulation-series>
            </e-accumulation-series-collection>
        </ejs-accumulationchart>
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
            seriesData: [
                { x: 'Chrome', y: 61.3, text: 'Chrome: 61.3%' },
                { x: 'Safari', y: 24.6, text: 'Safari: 24.6%' },
                { x: 'Edge', y: 5.0, text: 'Edge: 5.0%' },
                { x: 'Samsung Internet', y: 2.7, text: 'Samsung Internet: 2.7%' },
                { x: 'Firefox', y: 2.6, text: 'Firefox: 2.6%' },
                { x: 'Others', y: 3.6, text: 'Others: 3.6%' }
            ],
            centerLabel: {
                text: 'Mobile<br>Browsers<br>Statistics',
                hoverTextFormat: '${point.x} <br> Browser Share <br> ${point.y}%'
            }
        };
    },
    provide: {
        accumulationchart: [PieSeries]
    }
};
</script>
<style>
#container {
    height: 350px;
}
</style>