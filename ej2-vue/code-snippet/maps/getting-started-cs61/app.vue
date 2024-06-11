<template>
    <div id="app">
          <div class='wrapper'>
            <ejs-maps >
                <e-layers>
                    <e-layer :shapeData='shapeData' :markerSettings='markerSettings'></e-layer>
                </e-layers>
            </ejs-maps>
        </div>
    </div>
</template>

<script>

import { MapsComponent, Marker, LayerDirective, LayersDirective } from '@syncfusion/ej2-vue-maps';
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
      shapeData: world_map,
        markerSettings: [
            {
                dataSource: [
                    { latitude: 49.95121990866204, longitude: 18.468749999999998 },
                    { latitude: 59.88893689676585, longitude: -109.3359375 },
                    { latitude: -6.64607562172573, longitude: -55.54687499999999 }
                ],
                visible: true,
                height: 20,
                width: 20,
                animationDuration: 0
            }
        ]
    }
},
provide: {
    maps: [Marker]
}
}
</script>
<style>
  .wrapper {
    max-width: 400px;
    margin: 0 auto;
  }
</style>