<template>
    <div class="control_wrapper">
        <ejs-smithchart id="smithchart" :title='title' :legendSettings='legendSettings'>
            <e-seriesCollection>
                <e-series :dataSource='dataSource' :name='name' :reactance='reactance'
                    :resistance='resistance' :marker='marker'></e-series>
                <e-series :points='points' :name='name2'></e-series>
            </e-seriesCollection>
        </ejs-smithchart>
    </div>
</template>
<script setup>
import { provide } from "vue";
import { SmithchartComponent as EjsSmithchart, SeriesDirective as ESeries, SeriesCollectionDirective as ESeriesCollection, SmithchartLegend } from "@syncfusion/ej2-vue-charts";

const title = { text: 'Transmission lines applied for both impedance and admittance' };
const legendSettings = {
    visible: true
};
const dataSource = [
    { resistance: 0, reactance: 0.05 }, { resistance: 0, reactance: 0.05 },
    { resistance: 0, reactance: 0.05 }, { resistance: 0, reactance: 0.05 },
    { resistance: 0, reactance: 0.05 }, { resistance: 0, reactance: 0.05 },
    { resistance: 0, reactance: 0.05 }, { resistance: 0, reactance: 0.05 },
    { resistance: 0, reactance: 0.05 }, { resistance: 0, reactance: 0.05 },
    { resistance: 0.3, reactance: 0.1 }, { resistance: 0.5, reactance: 0.2 },
    { resistance: 1.5, reactance: 0.5 }, { resistance: 2.0, reactance: 0.5 },
    { resistance: 2.5, reactance: 0.4 }, { resistance: 3.5, reactance: 0.0 },
    { resistance: 2.5, reactance: 0.4 }, { resistance: 3.5, reactance: 0.0 },
    { resistance: 2.5, reactance: 0.4 }, { resistance: 3.5, reactance: 0.0 },
    { resistance: 4.5, reactance: -0.5 }, { resistance: 5.0, reactance: -1.0 }
];
const name = 'Transmission1';
const reactance = 'reactance';
const resistance = 'resistance';
const marker = {
    visible: true,
    dataLabel: {
        visible: true
    }
};
const points = [{ resistance: 0, reactance: 0.15 }, { resistance: 0, reactance: 0.15 },
{ resistance: 0, reactance: 0.15 }, { resistance: 0.3, reactance: 0.2 },
{ resistance: 0.3, reactance: 0.2 }, { resistance: 0.3, reactance: 0.2 },
{ resistance: 0.3, reactance: 0.2 }, { resistance: 0.3, reactance: 0.2 },
{ resistance: 0.5, reactance: 0.4 }, { resistance: 1.0, reactance: 0.8 },
{ resistance: 2.5, reactance: 1.3 }, { resistance: 3.5, reactance: 1.6 },
{ resistance: 3.5, reactance: 1.6 }, { resistance: 3.5, reactance: 1.6 },
{ resistance: 4.5, reactance: 2.0 }, { resistance: 6.0, reactance: 4.5 },
{ resistance: 8, reactance: 6 }, { resistance: 10, reactance: 25 }];
const name2 = 'Transmission2';

provide('smithchart', [SmithchartLegend]);

</script>