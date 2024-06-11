<template>
    <div id="app">
        <div class='wrapper'>
            <ejs-maps>
                <e-layers>
                    <e-layer :shapeData='shapeData' :shapeSettings='shapeSettings' :dataLabelSettings='dataLabelSettings'
                        :tooltipSettings='tooltipSettings'></e-layer>
                </e-layers>
            </ejs-maps>
        </div>
    </div>
</template>

<script setup>
import { provide } from "vue";

import { MapsComponent as EjsMaps, DataLabel, MapsTooltip, LayersDirective as ELayers, LayerDirective as ELayer } from '@syncfusion/ej2-vue-maps';
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
    animationDuration: 4000
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