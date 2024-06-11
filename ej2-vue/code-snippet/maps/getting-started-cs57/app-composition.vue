<template>
    <div id="app">
        <div class='wrapper'>
            <ejs-maps :legendSettings='legendSettings' >
                <e-layers>
                    <e-layer :shapeData='shapeData' :shapePropertyPath='shapePropertyPath' :shapeDataPath='shapeDataPath' :bubbleSettings='bubbleSettings' ></e-layer>
                </e-layers>
            </ejs-maps>
        </div>
    </div>
</template>

<script setup>
import { provide } from "vue";

import { MapsComponent as EjsMaps, Bubble, Legend, LayerDirective as ELayer, LayersDirective as ELayers } from '@syncfusion/ej2-vue-maps';
import { world_map } from './world-map.js';

const legendSettings = {
    visible: true,
    type: 'Bubbles'
};

const shapeData = world_map;

const shapeDataPath = 'name';
const shapePropertyPath = 'name';

const bubbleSettings = [{
    visible: true,
    minRadius: 20,
    dataSource: [
        { color: 'green', name: 'India', population: '38332521' },
        { color: 'purple', name: 'New Zealand', population: '19651127' },
        { color: 'blue', name: 'Pakistan', population: '3090416' }
    ],
    maxRadius: 40,
    colorValuePath: 'color',
    valuePath: 'population'
}]

provide('maps',  [Bubble, Legend]);

</script>
<style>
  .wrapper {
    max-width: 400px;
    margin: 0 auto;
  }
</style>