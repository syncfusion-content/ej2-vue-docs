<template>
    <div id="map">
        <div class='wrapper'>
            <ejs-maps projectionType= 'Miller'>
                <e-layers>
                    <e-layer :shapeData='shapeData' :shapeSettings='shapeSettings' ></e-layer>
                </e-layers>
            </ejs-maps>
        </div>
    </div>
</template>
<script setup>

import { MapsComponent as EjsMaps, LayerDirective as ELayer, LayersDirective as ELayers } from '@syncfusion/ej2-vue-maps';
import { world_map } from './world-map.js';

const shapeData = world_map;
const shapeSettings = {
    autofill: true,
    palette: ['#33CCFF', '#FF0000', '#800000', '#FFFF00', '#808000']
};

</script>
<style>
  .wrapper {
    max-width: 400px;
    margin: 0 auto;
  }
</style>