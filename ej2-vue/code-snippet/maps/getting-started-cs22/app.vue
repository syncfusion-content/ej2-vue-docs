<template>
    <div id="map">
        <div class='wrapper'>
            <ejs-maps :background='background' :border='border' :margin='margin'>
                <e-layers>
                    <e-layer :shapeData='shapeData' :shapeSettings='shapeSettings'></e-layer>
                </e-layers>
            </ejs-maps>
        </div>
    </div>
</template>
<script>

import { MapsComponent, LayerDirective, LayersDirective } from '@syncfusion/ej2-vue-maps';
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
            background: '#CCD1D1',
            border: {
                color: 'green',
                width: 2
            },
            margin: {
                bottom: 10,
                left: 20,
                right: 20,
                top: 10
            },
            shapeSettings: {
                autofill: true
            }
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