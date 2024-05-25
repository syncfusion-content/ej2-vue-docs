<template>
    <div id="map">
        <div class='wrapper'>
            <ejs-maps :titleSettings='titleSettings'>
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

const titleSettings = {
    text: 'Maps Component',
    textStyle: {
        color: 'red',
        fontStyle: 'italic',
        fontWeight: 'regular',
        fontFamily: 'arial',
        size: '14px'
    },
    alignment: 'Center'
};

const shapeData = world_map;
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