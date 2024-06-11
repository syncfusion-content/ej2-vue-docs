<template>
    <div id="map">
        <div class='wrapper'>
            <ejs-maps :background='background' :border='border' :margin='margin'>
                <e-layers>
                    <e-layer :shapeData='shapeData' :shapeSettings='shapeSettings'></e-layer>
                </e-layers>
            </ejs-maps>
        </div>
    </div>
</template>
<script setup>

import { MapsComponent as EjsMaps, LayerDirective as ELayer, LayersDirective as ELayers } from '@syncfusion/ej2-vue-maps';
import { world_map } from './world-map.js';

const shapeData = world_map;
const background = '#CCD1D1';
const border = {
    color: 'green',
    width: 2
};
const margin = {
    bottom: 10,
    left: 20,
    right: 20,
    top: 10
};
const shapeSettings = {
    autofill: true
};

</script>
<style>
  .wrapper {
    max-width: 400px;
    margin: 0 auto;
  }
</style>