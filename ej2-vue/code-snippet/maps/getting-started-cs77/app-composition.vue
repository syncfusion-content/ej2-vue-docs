<template>
    <div id="app">
        <button id="print" @click="clickPrint">Print</button>
        <ejs-maps id='container' :allowPrint='allowPrint' ref="maps" height='450px' width='500px'>
            <e-layers>
                <e-layer :shapeData='shapeData' :dataLabelSettings='dataLabelSettings' :shapeSettings='shapeSettings' :tooltipSettings='tooltipSettings' ></e-layer>
            </e-layers>
        </ejs-maps>
    </div>
</template>
<script setup>
import { provide } from "vue";

import { MapsComponent as EjsMaps, MapsTooltip, DataLabel, Print, LayerDirective, LayersDirective } from '@syncfusion/ej2-vue-maps';
import { usMap } from './usa.js';

const dataLabelSettings = {
    visible: true,
    labelPath: 'name',
    smartLabelMode: 'Trim'
};

const shapeData = usMap;

const shapeSettings = {
    autofill: true
};

const tooltipSettings = {
    visible: true,
    valuePath: 'name'
};

const allowPrint = true;

provide('maps',  [MapsTooltip, DataLabel, Print]);

const clickPrint = function() {
    let map=document.getElementById('container');
    map.ej2_instances[0].print();
};

</script>