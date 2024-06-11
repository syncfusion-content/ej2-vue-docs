<template>
    <div id="app">
        <div class='wrapper'>
            <ejs-maps :legendSettings='legendSettings'>
                <e-layers>
                    <e-layer :shapeData='shapeData' :shapePropertyPath='shapePropertyPath' :shapeDataPath='shapeDataPath' :dataSource='dataSource' :shapeSettings='shapeSettings' ></e-layer>
                </e-layers>
            </ejs-maps>
        </div>
    </div>
</template>

<script setup>
import { provide } from "vue";

import { MapsComponent as EjsMaps, Legend, LayerDirective as ELayer, LayersDirective as ELayers } from '@syncfusion/ej2-vue-maps';
import { world_map } from './world-map.js';
import { population_density } from './population-density.js';

const shapeData = world_map;
const legendSettings = {
    visible: true
};

const shapeDataPath = 'name';
const shapePropertyPath = 'name';
const dataSource = population_density;
const shapeSettings = {
    colorValuePath: 'density',
    colorMapping: [
        {
            from: 0, to: 100, color: ['red','blue']
        },
        {
            from: 101, to: 200, color: ['green','yellow']
        },
        {
            color: 'green'
        }
    ]
};

provide('maps',  [Legend]);

</script>
<style>
  .wrapper {
    max-width: 400px;
    margin: 0 auto;
  }
</style>