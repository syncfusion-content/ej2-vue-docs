<template>
    <div id="app">
        <div class='wrapper'>
            <ejs-maps id='maps'>
               <e-layers>
                    <e-layer :shapeData='shapeData'></e-layer>
                </e-layers>
            </ejs-maps>
        </div>
    </div>
</template>

<script setup>
import { MapsComponent as EjsMaps, LayersDirective as ELayers, LayerDirective as ELayer } from '@syncfusion/ej2-vue-maps';
import { world_map } from './world-map.js';

const shapeData = world_map;

</script>
<style>
  .wrapper {
    max-width: 400px;
    margin: 0 auto;
  }
</style>