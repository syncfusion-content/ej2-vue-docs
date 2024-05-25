<template>
    <div id="app">
          <div>
            <ejs-maps :zoomSettings='zoomSettings'>
                <e-layers>
                    <e-layer :shapeData='shapeData' :shapeSettings='shapeSettings'></e-layer>
                </e-layers>
            </ejs-maps>
        </div>
    </div>
</template>

<script setup>
import { provide } from "vue";

import { MapsComponent as EjsMaps, Zoom, LayerDirective as ELayer, LayersDirective as ELayers } from '@syncfusion/ej2-vue-maps';
import { world_map } from './world-map.js';

const shapeData = world_map;

const shapeSettings = {
  fill:'#C1DFF5'
};

const zoomSettings = {
    enable: true,
    toolbarSettings:{
        orientation:'Vertical',
        backgroundColor:'pink',
        borderWidth:3,
        borderColor:'green',
        verticalAlignment:'Near',
        buttonSettings: {
           toolbarItems: ['Zoom', 'ZoomIn', 'ZoomOut', 'Pan', 'Reset']
        }
    }
};

provide('maps',  [Zoom]);

</script>