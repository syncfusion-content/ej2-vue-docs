

<template>
    <div id="map">
        <div class='wrapper'>
            <ejs-maps :mapsArea='mapsArea'>
                <e-layers>
                    <e-layer :shapeData='shapeData' :shapeSettings='shapeSettings'></e-layer>
                </e-layers>
            </ejs-maps>
        </div>
    </div>
</template>
<script>
import Vue from 'vue';
import { MapsPlugin } from '@syncfusion/ej2-vue-maps';
import { world_map } from './world-map.js';
Vue.use(MapsPlugin);
export default {
    data () {
        return {
            shapeData: world_map,
            mapsArea: {
                background: '#CCD1D1',
                border: {
                    width: 2,
                    color: 'green'
                }
            },
            shapeSettings: {
                autofill: true,
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


