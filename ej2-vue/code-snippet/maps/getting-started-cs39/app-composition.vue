<template>
    <div id="app">
        <div class='wrapper'>
            <ejs-maps :legendSettings='legendSettings' >
                <e-layers>
                    <e-layer :shapeData='shapeData' :shapeSettings='shapeSettings' :dataLabelSettings='dataLabelSettings'></e-layer>
                </e-layers>
            </ejs-maps>
        </div>
    </div>
</template>

<script setup>
import { provide } from "vue";
import { MapsComponent as EjsMaps, LayerDirective as ELayer, LayersDirective as ELayers, Legend, DataLabel } from '@syncfusion/ej2-vue-maps';
import { world_map } from './world-map.js';

const shapeData = world_map;
const shapeSettings = {
    autofill: true
};
const dataLabelSettings = {
    visible: true,
    labelPath: 'name',
    smartLabelMode: 'Trim'
};

const legendSettings = {
    visible: true
};

provide('maps',  [Legend, DataLabel]);


</script>
<style>
  .wrapper {
    max-width: 400px;
    margin: 0 auto;
  }
</style>