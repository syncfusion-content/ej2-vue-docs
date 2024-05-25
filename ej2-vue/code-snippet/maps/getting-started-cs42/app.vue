<template>
    <div id="app">
        <div class='wrapper'>
        <div style="border: 3px solid darkgray; width: 200; display: 'block'; margin: auto;">
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

<script>

import { MapsComponent, LayerDirective, LayersDirective } from '@syncfusion/ej2-vue-maps';
import { seat } from './seat.js';

export default {
name: "App",
components: {
"ejs-maps":MapsComponent,
"e-layers":LayersDirective,
"e-layer":LayerDirective
},
data () {
    return {
      geometryType: 'Normal',
      shapeData: seat,
      height: '400'
    }
}
}
</script>
<style>
  .wrapper {
    max-width: 400px;
    margin: 0 auto;
  }
</style>