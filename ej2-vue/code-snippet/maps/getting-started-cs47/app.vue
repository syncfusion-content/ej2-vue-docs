<template>
    <div id="app">
          <div class='wrapper'>
            <ejs-maps :zoomSettings='zoomSettings' :centerPosition='centerPosition'>
                <e-layers>
                    <e-layer :shapeData='shapeData'></e-layer>
                </e-layers>
            </ejs-maps>
        </div>
    </div>
</template>

<script>

import { MapsComponent as EjsMaps, Zoom, LayerDirective as ELayer, LayersDirective as ELayers } from '@syncfusion/ej2-vue-maps';
import { world_map } from './world-map.js';

export default {
name: "App",
components: {
"ejs-maps":MapsComponent,
"e-layers":LayersDirective,
"e-layer":LayerDirective
},
data () {
    return {
        zoomSettings: {
            enable: true,
            zoomFactor: 13
        },
        centerPosition: {
            latitude: 25.54244147012483,
            longitude: -89.62646484375
        },
        shapeData: world_map,
    }
},
provide: {
    maps: [Zoom]
}
}
</script>
<style>
  .wrapper {
    max-width: 400px;
    margin: 0 auto;
  }
</style>