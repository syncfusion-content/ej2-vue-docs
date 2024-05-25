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

<script setup>
import { provide } from "vue";

import { MapsComponent as EjsMaps, Marker, MapsTooltip, LayerDirective as ELayer, LayersDirective as ELayers} from '@syncfusion/ej2-vue-maps';
import { usMap } from './usa.js';

const shapeData = usMap;

const markerSettings = [{
    dataSource: [
        { latitude: 40.7424509, longitude: -74.0081468, city: 'New York' }
    ],
    visible:true,
    shape:'Circle',
    fill:'white',
    width:3,
    animationDuration:0,
    border: { width:2, color:'green'},
    tooltipSettings: {
        visible: true,
        valuePath:'city'
    }
}];

provide('maps',  [Marker, MapsTooltip]);

</script>
<style>
  .wrapper {
    max-width: 400px;
    margin: 0 auto;
  }
</style>