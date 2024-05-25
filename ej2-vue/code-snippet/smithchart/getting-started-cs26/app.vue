<template>
    <div class="control_wrapper">
        <ejs-smithchart id="smithchart" :legendSettings='legendSettings'>
            <e-seriesCollection>
                <e-series :dataSource='dataSource' :name='name' :tooltip='tooltip' :reactance='reactance'
                    :resistance='resistance'></e-series>
                <e-series :points='points' :tooltip='tooltip' :name='name2'></e-series>
            </e-seriesCollection>
        </ejs-smithchart>
    </div>
</template>
<script>
import { SmithchartComponent, SeriesDirective, SeriesCollectionDirective, TooltipRender } from "@syncfusion/ej2-vue-charts";

export default {
    name: "App",
    components: {
        "ejs-smithchart": SmithchartComponent,
        "e-seriesCollection": SeriesCollectionDirective,
        "e-series": SeriesDirective
    },
    data: function () {
        return {
            legendSettings: {
                visible: true,
                position: 'Custom',
                location: {
                    x: 80,
                    y: 100
                }
            },
            tooltip: {
                visible: true
            },
            dataSource: [
                { resistance: 10, reactance: 25 }, { resistance: 8, reactance: 6 },
                { resistance: 6, reactance: 4.5 }, { resistance: 4.5, reactance: 2 },
                { resistance: 3.5, reactance: 1.6 }, { resistance: 2.5, reactance: 1.3 },
                { resistance: 2, reactance: 1.2 }, { resistance: 1.5, reactance: 1 },
                { resistance: 1, reactance: 0.8 }, { resistance: 0.5, reactance: 0.4 },
                { resistance: 0.3, reactance: 0.2 }, { resistance: 0, reactance: 0.15 },
            ],
            name: 'Transmission1',
            reactance: 'reactance', resistance: 'resistance',
            points: [{ resistance: 20, reactance: -50 }, { resistance: 10, reactance: -10 },
            { resistance: 9, reactance: -4.5 }, { resistance: 8, reactance: -3.5 },
            { resistance: 7, reactance: -2.5 }, { resistance: 6, reactance: -1.5 },
            { resistance: 5, reactance: -1 }, { resistance: 4.5, reactance: -0.5 },
            { resistance: 3.5, reactance: 0 }, { resistance: 2.5, reactance: 0.4 },
            { resistance: 2, reactance: 0.5 }, { resistance: 1.5, reactance: 0.5 },
            { resistance: 1, reactance: 0.4 }, { resistance: 0.5, reactance: 0.2 },
            { resistance: 0.3, reactance: 0.1 }, { resistance: 0, reactance: 0.05 }],
            name2: 'Transmission2'
        }
    },
    provide: {
        smithchart: [TooltipRender]
    }
}
</script>
