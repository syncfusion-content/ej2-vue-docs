<template>
    <div id="app">
          <div class='wrapper'>
            <ejs-maps  :titleSettings='titleSettings' :zoomSettings='zoomSettings'  :useGroupingSeparator='useGroupingSeparator' format='n'>
                <e-layers>
                    <e-layer :shapeData='shapeData' :shapeSettings='shapeSettings' :markerClusterSettings='markerClusterSettings' :markerSettings='markerSettings'></e-layer>
                </e-layers>
            </ejs-maps>
        </div>
    </div>
</template>

<script setup>
import { provide } from "vue";

import { MapsComponent as EjsMaps, Marker, Zoom, MapsTooltip, LayerDirective, LayersDirective } from '@syncfusion/ej2-vue-maps';
import { world_map } from './world-map.js';
import { cluster } from './marker-cluster.js';

const useGroupingSeparator = true;
const zoomSettings = {
    enable: true,
};

const shapeData = world_map;
const shapeSettings = {
    fill: '#C1DFF5'
};

const titleSettings = {
    text: 'Top 13 largest cities in the World',
    textStyle: {
        size: '16px'
    }
};

const markerClusterSettings = {
     allowClustering: true,
     shape: 'Circle',
     height: 40,
     width: 40,
     labelStyle : { color: 'white'},
};

const markerSettings = [
    {
        dataSource: cluster,
        visible: true,
        shape: 'Balloon',
        height:20,
        width:20,
        animationDuration:0,
        tooltipSettings: {
            visible: true,
            valuePath: 'area',
        }
    },
];

provide('maps',  [Marker, Zoom, MapsTooltip]);

</script>
<style>
  .wrapper {
    max-width: 400px;
    margin: 0 auto;
  }
</style>