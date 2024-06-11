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
    visible: true,
    shape: 'Diamond',
    height: 15,
    fill: "green",
    width: 15,
    dataSource: [
        { latitude: 37.0000, longitude: -120.0000, name:'California'},
        { latitude: 40.7127, longitude: -74.0059, name:"New York" },
        { latitude: 42, longitude: -93, name:'Iowa' }
    ]
  },
  {
      visible: true,
      dataSource: [
        { latitude: 19.228825, longitude: 72.854118, name: "Mumbai"},
        { latitude: 28.610001, longitude: 77.230003, name: "Delhi" },
        { latitude: 13.067439, longitude: 80.237617, name: "Chennai"}
      ],
      shape: 'Circle',
      fill: "blue",
      height: 10,
      width: 10
  }];

provide('maps',  [Marker]);

</script>
<style>
  .wrapper {
    max-width: 400px;
    margin: 0 auto;
  }
</style>