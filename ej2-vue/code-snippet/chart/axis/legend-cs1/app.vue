<template>
    <div id="app">
        <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis='primaryYAxis'
            :legendSettings='legendSettings'>
            <e-series-collection>
                <e-series :dataSource='seriesData' type='Line' xName='x' yName='y' name='December 2007' width=2
                    :marker='marker'> </e-series>
                <e-series :dataSource='seriesData' type='Line' xName='x' yName='y1' name='December 2008' width=2
                    :marker='marker1'> </e-series>
                <e-series :dataSource='seriesData' type='Line' xName='x' yName='y2' name='December 2009' width=2
                    :marker='marker2'> </e-series>
                <e-series :dataSource='seriesData' type='Line' xName='x' yName='y3' name='December 2010' width=2
                    :marker='marker3'> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
</template>
<script>
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, LineSeries, Category, Legend } from "@syncfusion/ej2-vue-charts";

export default {
    name: "App",
    components: {
        "ejs-chart": ChartComponent,
        "e-series-collection": SeriesCollectionDirective,
        "e-series": SeriesDirective
    },
    data() {
        return {
            seriesData: [
                { x: 'WW', y: 12, y1: 22, y2: 38.3, y3: 50 },
                { x: 'EU', y: 9.9, y1: 26, y2: 45.2, y3: 63.6 },
                { x: 'APAC', y: 4.4, y1: 9.3, y2: 18.2, y3: 20.9 },
                { x: 'LATAM', y: 6.4, y1: 28, y2: 46.7, y3: 65.1 },
                { x: 'MEA', y: 30, y1: 45.7, y2: 61.5, y3: 73 },
                { x: 'NA', y: 25.3, y1: 35.9, y2: 64, y3: 81.4 }
            ],
            primaryXAxis: {
                title: 'Countries',
                valueType: 'Category', interval: 1,
                labelIntersectAction: 'Rotate45'
            },
            primaryYAxis: {
                title: 'Penetration (%)',
                rangePadding: 'None', labelFormat: '{value}%',
                minimum: 0, maximum: 90
            },
            legendSettings: {
                padding: 10, shapePadding: 10,
                visible: true, border: {
                    width: 2, color: 'grey'
                },
                width: '200'
            },
            marker: {
                visible: true,
                width: 10, height: 10,
                shape: 'Diamond'
            },
            marker1: {
                visible: true,
                width: 10, height: 10,
                shape: 'Pentagon'
            },
            marker2: {
                visible: true,
                width: 10, height: 10,
                shape: 'Triangle',
            },
            marker3: {
                visible: true,
                width: 10, height: 10,
                shape: 'Circle'
            },
            title: "FB Penetration of Internet Audience"
        };
    },
    provide: {
        chart: [LineSeries, Category, Legend]
    }
};
</script>
<style>
#container {
    height: 350px;
}
</style>