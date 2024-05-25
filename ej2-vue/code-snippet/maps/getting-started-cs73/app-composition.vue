<template>
    <div id="app">
          <div class='wrapper'>
            <ejs-maps >
                <e-layers>
                    <e-layer :shapeData='shapeData' >
                    <e-navigationLineSettings>
                    <e-navigationLineSetting visible = true :latitude ='latitude' :longitude ='longitude' :color ='color' :angle ='angle' :width="width" :dashArray='dashArray' >
                    </e-navigationLineSetting>
                    </e-navigationLineSettings>
                    </e-layer>
                </e-layers>
            </ejs-maps>
        </div>
    </div>
</template>

<script setup>
import { provide } from "vue";

import { MapsComponent as EjsMaps, NavigationLine, LayerDirective as ELayer, LayersDirective as ELayers,
NavigationLineSettingDirective as ENavigationLineSetting, NavigationLineSettingsDirective as ENavigationLineSettings
 } from '@syncfusion/ej2-vue-maps';
import { world_map } from './world-map.js';

const shapeData = world_map;
const latitude = [40.7128, 36.7783];
const longitude = [-74.0060, -119.4179];
const color = 'black';
const angle = 90;
const width = 2;
const dashArray = '4';

provide('maps',  [NavigationLine]);

</script>
<style>
  .wrapper {
    max-width: 400px;
    margin: 0 auto;
  }
</style>