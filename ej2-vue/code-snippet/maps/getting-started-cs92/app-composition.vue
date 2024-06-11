<template>
    <div id="app">
          <div class='wrapper'>
            <ejs-maps  >
                <e-layers>
                    <e-layer :shapeData='shapeData' :selectionSettings= 'selectionSettings' :initialShapeSelection= 'initialShapeSelection'></e-layer>
                </e-layers>
            </ejs-maps>
        </div>
    </div>
</template>

<script setup>
import { provide } from "vue";

import { MapsComponent as EjsMaps, Marker, Selection, LayerDirective as ELayer, LayersDirective as ELayers } from '@syncfusion/ej2-vue-maps';
import { world_map } from './world-map.js';

const shapeData = world_map;
const selectionSettings = {
    enable: true,
    fill: 'green',
    border: { color: 'white', width: 2}
};

const initialShapeSelection = [
    { shapePath: 'continent', shapeValue: 'Africa' },
    { shapePath: 'name', shapeValue: 'India' }
];

provide('maps',  [Selection, Marker]);

</script>
<style>
  .wrapper {
    max-width: 400px;
    margin: 0 auto;
  }
</style>