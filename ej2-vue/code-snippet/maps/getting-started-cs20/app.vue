<template>
    <div id="map">
        <div class='wrapper'>
            <ejs-maps :titleSettings='titleSettings'>
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
            titleSettings: {
                text: 'Maps Component',
                textStyle: {
                    color: 'red',
                    fontStyle: 'italic',
                    fontWeight: 'regular',
                    fontFamily: 'arial',
                    size: '14px'
                },
                alignment: 'Center'
            },
            shapeData: world_map,
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