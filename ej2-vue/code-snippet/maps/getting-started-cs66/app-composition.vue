<template>
    <div id="app">
          <div class='wrapper'>
            <ejs-maps >
                <e-layers>
                    <e-layer :shapeData='shapeData' :markerSettings='markerSettings'></e-layer>
                </e-layers>
            </ejs-maps>
        </div>
    </div>
</template>

<script setup>
import { provide } from "vue";

import { MapsComponent as EjsMaps, Marker, LayerDirective as ELayer, LayersDirective as ELayers } from '@syncfusion/ej2-vue-maps';
import { world_map } from './world-map.js';

const shapeData = world_map;

const markerSettings = [{
    dataSource: [
      { latitude: 49.95121990866204, longitude: 18.468749999999998, name:'Europe', color:'red', shape:'Triangle' },
      { latitude: 59.88893689676585, longitude: -109.3359375, name:'North America',
      color:'blue', shape:'Pentagon' },
      { latitude: -6.64607562172573, longitude: -55.54687499999999, name:'South America',
    color:'green', shape:'InvertedTriangle' }
    ],
    visible: true,
    shapeValuePath:'shape',
    colorValuePath:'color',
}];

provide('maps',  [Marker]);

</script>
<style>
  .wrapper {
    max-width: 400px;
    margin: 0 auto;
  }
</style>