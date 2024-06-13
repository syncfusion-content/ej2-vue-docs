<template>
    <div id="app">
        <ejs-accumulationchart id="container">
            <e-accumulation-series-collection>
                <e-accumulation-series :dataSource='seriesData' xName='x' yName='y' :dataLabel='datalabel'>
                </e-accumulation-series>
            </e-accumulation-series-collection>
        </ejs-accumulationchart>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { AccumulationChartComponent as EjsAccumulationchart, AccumulationSeriesCollectionDirective as EAccumulationSeriesCollection, AccumulationSeriesDirective as EAccumulationSeries, PieSeries, AccumulationDataLabel } from "@syncfusion/ej2-vue-charts";


const seriesData = [
    { x: 'Jan', y: 3, text: 'Jan: 3' }, { x: 'Feb', y: 3.5, text: 'Feb: 3.5' },
    { x: 'Mar', y: 7, text: 'Mar: 7' }, { x: 'Apr', y: 13.5, text: 'Apr: 13.5' },
    { x: 'May', y: 19, text: 'May: 19' }, { x: 'Jun', y: 23.5, text: 'Jun: 23.5' },
    { x: 'Jul', y: 26, text: 'Jul: 26' }, { x: 'Aug', y: 25, text: 'Aug: 25' },
    { x: 'Sep', y: 21, text: 'Sep: 21' }, { x: 'Oct', y: 15, text: 'Oct: 15' }];
const datalabel = {
    visible: true, name: 'text', position: 'Outside',
    connectorStyle: {
        //Length of the connector line in pixels
        length: '50px',
        //Width of the connector line in pixels
        width: 2,
        //dashArray of the connector line
        dashArray: '5,3',
        //Color of the connector line
        color: '#f4429e',
        //Specifies the type of the connector line either Line or Curve
        type: 'Curve'
    }
};

provide('accumulationchart', [PieSeries, AccumulationDataLabel]);

</script>
<style>
#container {
    height: 350px;
}
</style>