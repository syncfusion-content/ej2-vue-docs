<template>
    <div id="app">
        <ejs-chart id="container" :title='title' :primaryXAxis='primaryXAxis' :primaryYAxis="primaryYAxis"
            :legendSettings='legend' :chartArea="chartArea">
            <e-series-collection>
                <e-series :dataSource='columnData' type='Column' xName='x' yName='y' name='Product A' :marker="marker"
                    :dragSettings="dragSettings"> </e-series>
                <e-series :dataSource='lineData' type='Line' xName='x' yName='y' name='Product B' :marker="marker"
                    :dragSettings="dragSettings"> </e-series>
            </e-series-collection>
        </ejs-chart>
    </div>
</template>
<script>

import { ChartComponent, SeriesDirective, SeriesCollectionDirective, LineSeries, ColumnSeries, DateTime, Tooltip, Legend, DataEditing } from "@syncfusion/ej2-vue-charts";


export default {
    name: "App",
    components: {
        "ejs-chart": ChartComponent,
        "e-series-collection": SeriesCollectionDirective,
        "e-series": SeriesDirective
    },
    data() {
        return {
            columnData: [
                { x: new Date(2005, 0, 1), y: 21 }, { x: new Date(2006, 0, 1), y: 24 },
                { x: new Date(2007, 0, 1), y: 36 }, { x: new Date(2008, 0, 1), y: 38 },
                { x: new Date(2009, 0, 1), y: 54 }, { x: new Date(2010, 0, 1), y: 57 },
                { x: new Date(2011, 0, 1), y: 70 }
            ],
            lineData: [
                { x: new Date(2005, 0, 1), y: 21 }, { x: new Date(2006, 0, 1), y: 24 },
                { x: new Date(2007, 0, 1), y: 36 }, { x: new Date(2008, 0, 1), y: 38 },
                { x: new Date(2009, 0, 1), y: 54 }, { x: new Date(2010, 0, 1), y: 57 },
                { x: new Date(2011, 0, 1), y: 70 }
            ],
            primaryXAxis: {
                valueType: 'DateTime',
                labelFormat: 'y',
                intervalType: 'Years',
                edgeLabelPlacement: 'Shift',
                majorGridLines: { width: 0 }
            },
            primaryYAxis:
            {
                labelFormat: '{value}%',
                rangePadding: 'None',
                minimum: 0,
                maximum: 100,
                interval: 20,
                lineStyle: { width: 0 },
                majorTickLines: { width: 0 },
                minorTickLines: { width: 0 }
            },
            chartArea: {
                border: {
                    width: 0
                }
            },
            title: 'Sales History of Product X',
            legend: { visible: false },
            marker: {
                visible: true, width: 10, height: 10
            },
            dragSettings: {
                enable: true
            }
        };
    },
    provide: {
        chart: [LineSeries, ColumnSeries, DateTime, Tooltip, Legend, DataEditing]
    },
};
</script>
<style>
#container {
    height: 350px;
}
</style>