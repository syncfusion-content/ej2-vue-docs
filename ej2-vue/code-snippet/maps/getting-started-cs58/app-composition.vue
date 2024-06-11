<template>
    <div id="app">
        <div class='wrapper'>
            <ejs-maps :legendSettings='legendSettings' >
                <e-layers>
                    <e-layer :shapeData='shapeData' :markerSettings='markerSettings' ></e-layer>
                </e-layers>
            </ejs-maps>
        </div>
    </div>
</template>

<script setup>
import { provide } from "vue";

import { MapsComponent as EjsMaps, Marker, Legend, LayerDirective as ELayer, LayersDirective as ELayers } from '@syncfusion/ej2-vue-maps';
import { world_map } from './world-map.js';

const legendSettings = {
    visible: true,
    type: 'Markers'
};

const shapeData = world_map;

const markerSettings = [
    {
        visible: true,
        legendText: 'name',
        dataSource: [
            { latitude: 37.6276571, longitude: -122.4276688, name: 'San Bruno' },
            { latitude: 33.5302186, longitude: -117.7418381, name: 'Laguna Niguel' },
            { latitude: 40.7424509, longitude: -74.0081468, name: 'New York' }
        ],
        shape: 'Circle'
    }
];

provide('maps',  [Legend, Marker]);

</script>
<style>
  .wrapper {
    max-width: 400px;
    margin: 0 auto;
  }
</style>