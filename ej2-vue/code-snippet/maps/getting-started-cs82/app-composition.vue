<template>
    <div id="app">
          <div class='wrapper'>
            <ejs-maps >
                <e-layers>
                    <e-layer :urlTemplate= 'urlTemplate'>
                    </e-layer>
                </e-layers>
            </ejs-maps>
        </div>
    </div>
</template>

<script setup>

import { MapsComponent as EjsMaps, LayerDirective as ELayer, LayersDirective as ELayers } from '@syncfusion/ej2-vue-maps';

const urlTemplate = 'https://tile.openstreetmap.org/level/tileX/tileY.png';

</script>
<style>
  .wrapper {
    max-width: 400px;
    margin: 0 auto;
  }
</style>