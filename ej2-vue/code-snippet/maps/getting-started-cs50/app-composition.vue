<template>
    <div id="app">
          <div class='wrapper'>
            <ejs-maps :baseLayerIndex= "baseLayerIndex">
                <e-layers>
                    <e-layer :shapeData='shapeData'></e-layer>
                    <e-layer :shapeData='shapeData1'></e-layer>
                </e-layers>
            </ejs-maps>
        </div>
    </div>
</template>

<script setup>

import { MapsComponent as EjsMaps, LayerDirective as ELayer, LayersDirective as ELayers } from '@syncfusion/ej2-vue-maps';
import { usMap } from './usa.js';
import { world_map } from './world-map.js';

const baseLayerIndex = 1;
const shapeData = world_map;
const shapeData1 = usMap;

</script>
<style>
  .wrapper {
    max-width: 400px;
    margin: 0 auto;
  }
</style>