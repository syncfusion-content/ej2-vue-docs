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

<script>

import { MapsComponent, Zoom, LayerDirective, LayersDirective } from '@syncfusion/ej2-vue-maps';

export default {
name: "App",
components: {
"ejs-maps":MapsComponent,
"e-layers":LayersDirective,
"e-layer":LayerDirective
},
data () {
    return{
       zoomSettings: {
        enable: true,
        toolbarSettings: {
          buttonSettings: {
            toolbarItems: ['Zoom', 'ZoomIn', 'ZoomOut', 'Pan', 'Reset']
          }
        }
       },
       urlTemplate: 'https://tile.openstreetmap.org/level/tileX/tileY.png'
    }
},
provide: {
    maps: [ Zoom ]
}
}
</script>
<style>
  .wrapper {
    max-width: 400px;
    margin: 0 auto;
  }
</style>
