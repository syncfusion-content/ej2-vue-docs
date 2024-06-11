<template>
    <div id="app">
        <div class='wrapper'>
            <ejs-maps id='container' :legendSettings='legendSettings'>
            <e-layers>
                <e-layer :urlTemplate='urlTemplate' :shapeSettings='shapeSettings' :markerSettings='markerSettings'></e-layer>
            </e-layers>
        </ejs-maps>
        </div>
    </div>
</template>

<script setup>
import { provide } from "vue";

import { MapsComponent as EjsMaps, Marker, Legend, LayerDirective as ELayer, LayersDirective as ELayers } from '@syncfusion/ej2-vue-maps';
import { markerDataSource } from './marker-data.js';

const urlTemplate = 'https://tile.openstreetmap.org/level/tileX/tileY.png';

const legendSettings = {
    visible: true,
    type: 'Markers',
    useMarkerShape:true,
    toggleLegendSettings: {
        enable: true,
        applyShapeSettings: false,
        border: {
            color: 'green',
            width: 2
        }
    }
};

const shapeSettings = {
    fill: '#E5E5E5'
};

const markerSettings = [
    {
        colorValuePath: 'color',
        shapeValuePath:'shape',
        legendText: 'country',
        visible: true,
        dataSource: markerDataSource
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