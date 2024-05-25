<template>
    <div id="map">
        <div class='wrapper'>
            <ejs-maps height='300px' width='200px'>
                <e-layers>
                    <e-layer :shapeData='shapeData'></e-layer>
                </e-layers>
            </ejs-maps>
        </div>
    </div>
</template>
<script setup>

import { MapsComponent as EjsMaps} from '@syncfusion/ej2-vue-maps';
import { world_map } from './world-map.js';

const shapeData = world_map;

</script>
<style>
  .wrapper {
    max-width: 400px;
    margin: 0 auto;
  }
</style>