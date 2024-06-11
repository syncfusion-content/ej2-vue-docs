<template>
    <div id="map">
        <div class='wrapper'>
            <ejs-maps :mapsArea='mapsArea'>
                <e-layers>
                    <e-layer :shapeData='shapeData' :shapeSettings='shapeSettings'></e-layer>
                </e-layers>
            </ejs-maps>
        </div>
    </div>
</template>
<script setup>

import { MapsComponent as EjsMaps, LayerDirective as ELayer, LayersDirective as ELayers} from '@syncfusion/ej2-vue-maps';
import { world_map } from './world-map.js';

const shapeData = world_map;
const mapsArea = {
    background: '#CCD1D1',
    border: {
        width: 2,
        color: 'green'
    }
};
const shapeSettings = {
    autofill: true,
};

</script>
<style>
  .wrapper {
    max-width: 400px;
    margin: 0 auto;
  }
</style>