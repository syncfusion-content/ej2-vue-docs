<template>
    <div id="app">
    <div>
        <div id="link">
            <a id="category" @click="onClick" style="visibility:hidden; display:inline-block">Sales by Category</a>
            <p style="visibility:hidden; display:inline-block" id="symbol"> >> </p>
            <p id="text" style="display:inline-block;"></p>
        </div>
        <button type="button" id="back" style="visibility: hidden;" @click="onClick">Back</button>
        <ejs-accumulationchart ref="pie" id="container" style='display:block;' :legendSettings="legendSettings" :enableSmartLabels='enableSmartLabels' :title="title" :textRender="onTextRender" :chartMouseClick="onChartMouseClick">
            <e-accumulation-series-collection>
                <e-accumulation-series :dataSource='data' xName='x' yName='y' :startAngle="startAngle" :endAngle="endAngle" :innerRadius="innerRadius" radius="70%" :dataLabel="dataLabel" :explode="isExplode" explodeOffset='10%' :explodeIndex='explodeIndex'>
                </e-accumulation-series>
            </e-accumulation-series-collection>
        </ejs-accumulationchart>
    </div>
    </div>
</template>
<script setup>
import { provide, ref } from "vue";

import { extend } from '@syncfusion/ej2-base';
import { getElement, indexFinder, AccumulationLegend, PieSeries, AccumulationTooltip, AccumulationDataLabel, AccumulationChartComponent as EjsAccumulationchart,
    AccumulationSeriesCollectionDirective as EAccumulationSeriesCollection, AccumulationSeriesDirective as EAccumulationSeries
 } from "@syncfusion/ej2-vue-charts";

 const pie = ref(null);

const innerRadius = ref('0%');
const innerChart = ref(false);
const enableSmartLabels = ref(false);

const data = ref([
    { x: 'SUV', y: 25 }, { x: 'Car', y: 37 }, { x: 'Pickup', y: 15 },
    { x: 'Minivan', y: 23 }
]);

const suvs = ref([{ x: 'Toyota', y: 8 }, { x: 'Ford', y: 12 }, { x: 'GM', y: 17 }, { x: 'Renault', y: 6 }, { x: 'Fiat', y: 3 },
{ x: 'Hyundai', y: 16 }, { x: 'Honda', y: 8 }, { x: 'Maruthi', y: 10 }, { x: 'BMW', y: 20 }]);

const cars = ref([{ x: 'Toyota', y: 7 }, { x: 'Chrysler', y: 12 }, { x: 'Nissan', y: 9 }, { x: 'Ford', y: 15 },
{ x: 'Tata', y: 10 },
{ x: 'Mahindra', y: 7 }, { x: 'Renault', y: 8 }, { x: 'Skoda', y: 5 }, { x: 'Volkswagen', y: 15 }, { x: 'Fiat', y: 3 }]);

const pickups = ref([{ x: 'Nissan', y: 9 }, { x: 'Chrysler', y: 4 }, { x: 'Ford', y: 7 }, { x: 'Toyota', y: 20 },
{ x: 'Suzuki', y: 13 }, { x: 'Lada', y: 12 }, { x: 'Bentley', y: 6 }, { x: 'Volvo', y: 10 }, { x: 'Audi', y: 19 }]);

const minivans = ref([{ x: 'Hummer', y: 11 }, { x: 'Ford', y: 5 }, { x: 'GM', y: 12 }, { x: 'Chrysler', y: 3 },
{ x: 'Jaguar', y: 9 },
{ x: 'Fiat', y: 8 }, { x: 'Honda', y: 15 }, { x: 'Hyundai', y: 4 }, { x: 'Scion', y: 11 }, { x: 'Toyota', y: 17 }]);

const legendSettings = ref({
    visible: false,
});

const dataLabel = ref({
    visible: true, position: 'Inside', connectorStyle: { type: 'Curve', length: '5%' }, font: { size: '14px', color: 'white' }
});

const startAngle = ref(0);

const explodeIndex = ref(2);

const isExplode = ref(false);

const endAngle = ref(360);

const title = ref('Automobile Sales by Category');

provide('accumulationchart',  [AccumulationLegend, PieSeries, AccumulationTooltip, AccumulationDataLabel]);

const onTextRender = (args) => {
    args.text = args.point.x + ' ' + args.point.y + ' %';
};

const onChartMouseClick = (args) => {
    let index = indexFinder(args.target);
    isExplode.value = false;
    if (getElement('container_Series_' + index.series + '_Point_' + index.point) && !innerChart.value) {
        innerRadius.value = '30%';
        switch (index.point) {
            case 0:
                data.value = suvs.value;
                title.value = 'Automobile Sales in the SUV Segment';
                getElement('text').innerHTML = 'SUV';
                break;
            case 1:
                data.value = cars.value;
                title.value = 'Automobile Sales in the Car Segment';
                getElement('text').innerHTML = 'Car';
                break;
            case 2:
                data.value = pickups.value;
                title.value = 'Automobile Sales in the Pickup Segment';
                getElement('text').innerHTML = 'Pickup';
                break;
            case 3:
                data.value = minivans.value;
                title.value = 'Automobile Sales in the Minivan Segment';
                getElement('text').innerHTML = 'Minivan';
                break;
        }
        let dataLabel = extend({}, dataLabel.value);
        dataLabel.position = 'Outside';
        dataLabel.font.color = 'black';
        dataLabel.value = dataLabel;
        let legendSettings = legendSettings.value;
        legendSettings.visible = false;
        legendSettings.value = legendSettings;
        enableSmartLabels.value = true;
        getElement('category').style.visibility = 'visible';
        getElement('symbol').style.visibility = 'visible';
        getElement('text').style.visibility = 'visible';
        innerChart.value = true;
    }
    if (args.target.indexOf('back') > -1) {
        data.value = [{ x: 'SUV', y: 25 }, { x: 'Car', y: 37 }, { x: 'Pickup', y: 15 }, { x: 'Minivan', y: 23 }]
        isExplode.value = false;
        let dataLabel = extend({}, dataLabel.value);
        dataLabel.position = 'Inside';
        dataLabel.font.color = 'white';
        dataLabel.value = dataLabel;
        let legendSettings = legendSettings.value;
        legendSettings.visible = false;
        legendSettings.value = legendSettings;
        enableSmartLabels.value = false;
        innerRadius.value = '0%';
        getElement('category').style.visibility = 'hidden';
        getElement('symbol').style.visibility = 'hidden';
        getElement('text').style.visibility = 'hidden';
        innerChart.value = false;
    }
};

const onClick = (e) => {
    isExplode.value = false;
    data.value = [{ x: 'SUV', y: 25 }, { x: 'Car', y: 37 }, { x: 'Pickup', y: 15 }, { x: 'Minivan', y: 23 }]
    let dataLabel = extend({}, dataLabel.value);
    dataLabel.position = 'Inside';
    dataLabel.font.color = 'white';
    dataLabel.value = dataLabel;
    let legendSettings = legendSettings.value;
    legendSettings.visible = false;
    legendSettings.value = legendSettings;
    enableSmartLabels.value = false;
    innerRadius.value = '0%';
    getElement('category').style.visibility = 'hidden';
    getElement('symbol').style.visibility = 'hidden';
    getElement('text').style.visibility = 'hidden';
    e.target.style.visibility = 'hidden';
    getElement('symbol').style.visibility = 'hidden';
    getElement('text').style.visibility = 'hidden';
    innerChart.value = false;
};

provide('accumulationchart',  [AccumulationLegend, PieSeries, AccumulationTooltip, AccumulationDataLabel]);


</script>

<style scoped>
#category:hover {
    cursor: pointer;
}
</style>