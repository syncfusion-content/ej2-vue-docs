<template>
    <div id="app">
          <div class='wrapper'>
            <ejs-maps >
                <e-layers>
                    <e-layer :shapeData='shapeData' :shapePropertyPath='shapePropertyPath' :shapeDataPath='shapeDataPath' :bubbleSettings='bubbleSettings' ></e-layer>
                </e-layers>
            </ejs-maps>
        </div>
    </div>
</template>

<script setup>
import { provide } from "vue";

import { MapsComponent as EjsMaps, Bubble, LayerDirective as ELayer, LayersDirective as ELayers  } from '@syncfusion/ej2-vue-maps';
import { world_map } from './world-map.js';

const shapeData = world_map;
const shapeDataPath = 'name';
const shapePropertyPath = 'name';
const bubbleSettings = [{
    visible: true,
    minRadius: 5,
    dataSource: [
        { name: 'India', population: '38332521' },
        { name: 'New Zealand', population: '19651127' },
        { name: 'Pakistan', population: '3090416' }
    ],
    fill: 'green',
    animationDelay: 100,
    animationDuration: 1000,
    maxRadius: 20,
    border: {
        color: 'blue',
        width: 2
    },
    opacity: 1,
    valuePath: 'population'
}];

</script>
<style>
  .wrapper {
    max-width: 400px;
    margin: 0 auto;
  }
</style>