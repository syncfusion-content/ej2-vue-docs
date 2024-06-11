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
import { World_Map } from './worldmap.js';
import { Population_Density } from './populationdensity.js';

const shapeData = World_Map;
const legendSettings = {
    visible: true,
    toggleLegendSettings: {
        enable: true,
        applyShapeSettings: false,
        border: {
            color: "green",
            width: 2
        }
    }
};
const shapeDataPath = 'name';
const shapePropertyPath = 'name';
const dataSource = Population_Density;
const shapeSettings = {
    colorValuePath: 'density',
     colorMapping: [
        {
            from: 0, to: 100, color: 'rgb(153,174,214)',
        },
        {
            from: 101, to: 200, color: 'rgb(115,143,199)',
        },
        {
            color: 'rgb(77,112,184)'
        },
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