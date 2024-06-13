<template>
    <div id="app">
          <div class='wrapper'>
            <ejs-maps :zoomSettings= 'zoomSettings'>
                <e-layers>
                    <e-layer :urlTemplate= 'urlTemplate'>
                    </e-layer>
                </e-layers>
            </ejs-maps>
        </div>
    </div>
</template>

<script setup>
import { provide } from "vue";

import { MapsComponent as EjsMaps, Zoom, LayerDirective as ELayer, LayersDirective as ELayers } from '@syncfusion/ej2-vue-maps';

const urlTemplate = 'https://tile.openstreetmap.org/level/tileX/tileY.png';

const zoomSettings = {
    enable: true,
    toolbarSettings:{
      buttonSettings: {
        toolBarItems: ['Zoom', 'ZoomIn', 'ZoomOut', 'Pan', 'Reset']
      }
    }
};

provide('maps',  [ Zoom ]);

</script>
<style>
  .wrapper {
    max-width: 400px;
    margin: 0 auto;
  }
</style>
