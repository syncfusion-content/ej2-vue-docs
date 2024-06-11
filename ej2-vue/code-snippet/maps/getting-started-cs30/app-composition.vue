<template>
    <div id="app">
        <div class='wrapper'>
            <ejs-maps >
                <e-layers>
                    <e-layer :shapeData='shapeData' :shapeSettings='shapeSettings'
                    :dataLabelSettings='dataLabelSettings' :tooltipSettings='tooltipSettings'></e-layer>
                </e-layers>
            </ejs-maps>
        </div>
    </div>
</template>

<script setup>
import { provide } from "vue";

import { MapsComponent as EjsMaps, DataLabel, MapsTooltip, LayerDirective as ELayer, LayersDirective as ELayers } from '@syncfusion/ej2-vue-maps';
import { usMap } from './usa.js';

const shapeData = usMap;
const shapeSettings = {
    autofill: true
};

const dataLabelSettings = {
    visible: true,
    smartLabelMode: 'Hide',
    intersectionAction: 'Trim',
    labelPath: 'name',
    border: {
        color: 'green',
        width: 2
    },
    fill: 'transparent',
    opacity: 0.9,
    textStyle: {
        size: '17px',
        fontStyle: 'Sans-serif',
        fontWeight: 'normal'
    }
};

const tooltipSettings = {
    visible: true,
    valuePath: 'name'
};

provide('maps',  [DataLabel, MapsTooltip]);

</script>
<style>
  .wrapper {
    max-width: 400px;
    margin: 0 auto;
  }
</style>