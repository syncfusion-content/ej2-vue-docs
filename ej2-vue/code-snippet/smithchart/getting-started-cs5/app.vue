<template>
    <div class="control_wrapper">
        <ejs-smithchart id="smithchart" :legendSettings='legendSettings'>
            <e-seriesCollection>
                <e-series :title='title' :dataSource='dataSource' :name='name' :reactance='reactance'
                    :resistance='resistance' marker='marker'></e-series>
                <e-series :points='points' :name='name2'></e-series>
            </e-seriesCollection>
        </ejs-smithchart>
    </div>
</template>
<script>
import { SmithchartComponent, SeriesDirective, SeriesCollectionDirective, SmithchartLegend } from "@syncfusion/ej2-vue-charts";

export default {
    name: "App",
    components: {
        'ejs-smithchart': SmithchartComponent,
        'e-series': SeriesDirective,
        'e-seriesCollection': SeriesCollectionDirective
    },
    data: function () {
        return {
            title: { text: 'Transmission lines applied for both impedance and admittance' },
            legendSettings: {
                visible: true
            },
            dataSource: [
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
            ],
            name: 'Transmission1',
            reactance: 'reactance', resistance: 'resistance',
            marker: {
                visible: true,
                dataLabel: {
                    visible: true
                }
            },
            points: [{ resistance: 0, reactance: 0.15 }, { resistance: 0, reactance: 0.15 },
            { resistance: 0, reactance: 0.15 }, { resistance: 0.3, reactance: 0.2 },
            { resistance: 0.3, reactance: 0.2 }, { resistance: 0.3, reactance: 0.2 },
            { resistance: 0.3, reactance: 0.2 }, { resistance: 0.3, reactance: 0.2 },
            { resistance: 0.5, reactance: 0.4 }, { resistance: 1.0, reactance: 0.8 },
            { resistance: 2.5, reactance: 1.3 }, { resistance: 3.5, reactance: 1.6 },
            { resistance: 3.5, reactance: 1.6 }, { resistance: 3.5, reactance: 1.6 },
            { resistance: 4.5, reactance: 2.0 }, { resistance: 6.0, reactance: 4.5 },
            { resistance: 8, reactance: 6 }, { resistance: 10, reactance: 25 }],
            name2: 'Transmission2'
        }
    },
    provide: {
        smithchart: [SmithchartLegend]
    }
}
</script>
