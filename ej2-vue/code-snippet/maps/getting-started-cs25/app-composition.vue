<template>
    <div id="map">
        <div class='wrapper'>
            <ejs-maps>
                <e-layers>
                    <e-layer :shapeData='shapeData' :shapePropertyPath='shapePropertyPath'
                             :shapeDataPath='shapeDataPath' :dataSource='dataSource' :shapeSettings='shapeSettings'></e-layer>
                </e-layers>
            </ejs-maps>
        </div>
    </div>
</template>
<script setup>

import { MapsComponent as EjsMaps, LayerDirective as ELayer, LayersDirective as ELayers } from '@syncfusion/ej2-vue-maps';
import { world_map } from './world-map.js';

const shapeData = world_map;
const shapePropertyPath = 'continent';
const shapeDataPath = 'continent';

const dataSource = [
    { continent: "North America", color: '#71B081' },
    { continent: "South America", color: '#5A9A77' },
    { continent: "Africa", color: '#498770' },
    { continent: "Europe", color: '#39776C' },
    { continent: "Asia", color: '#266665' },
    { continent: "Oceania", color: '#124F5E' }
];

const shapeSettings = {
    colorValuePath: 'color',
};

</script>
<style>
  .wrapper {
    max-width: 400px;
    margin: 0 auto;
  }
</style>