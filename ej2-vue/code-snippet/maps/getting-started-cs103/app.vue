

<template>
    <div id="app">
          <div class='wrapper'>
            <ejs-maps :zoomSettings='zoomSettings'>
                <e-layers>
                    <e-layer :shapeData='shapeData' :shapeSettings='shapeSettings'></e-layer>
                </e-layers>
            </ejs-maps>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import { MapsPlugin, Zoom} from '@syncfusion/ej2-vue-maps';
import { world_map } from './world-map.js';
Vue.use(MapsPlugin);
export default {
data () {
    return{
        shapeData: world_map,
        shapeSettings:{
          fill:'#C1DFF5'
        },
        zoomSettings: {
        enable: true,
            toolbarSettings:{
                buttonSettings: {
                   fill:'pink',
                   padding: 10,
                   toolbarItems: ['Zoom', 'ZoomIn', 'ZoomOut', 'Pan', 'Reset'],
                   color: 'red',
                   borderColor:'green',
                   radius:35,
                   selectionColor:'#d55e5e',
                   hightlightColor:'#5ed59a',
                   opacity:0.6,
                   borderWidth: 2
                }
            }
        }
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


