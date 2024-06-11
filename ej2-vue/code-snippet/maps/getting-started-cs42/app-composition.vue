<template>
    <div id="app">
        <div class='wrapper'>
        <div style="border: 3px solid darkgray; width: 200; display:'block'; margin: auto;">
            <ejs-maps :height='height'>
                <e-layers>
                    <e-layer :shapeData='shapeData' :geometryType='geometryType'>
                    </e-layer>
                </e-layers>
            </ejs-maps>
            </div>
      </div>
</div>
</template>

<script setup>

import { MapsComponent as EjsMaps, LayerDirective as ELayer, LayersDirective as ELayers } from '@syncfusion/ej2-vue-maps';
import { seat } from './seat.js';

const geometryType = 'Normal';
const shapeData = seat;
const height = '400';

</script>
<style>
  .wrapper {
    max-width: 400px;
    margin: 0 auto;
  }
</style>