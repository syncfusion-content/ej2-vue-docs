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

import { MapsComponent as EjsMaps, Marker, Zoom, MapsTooltip, Point, LayerDirective as ELayer, LayersDirective as ELayers } from '@syncfusion/ej2-vue-maps';
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
     offset: new Point(10, 20),
     opacity: 0.9,
     fill: 'green',
     connectorLineSettings: {
         color: 'orange',
         opacity: 0.8,
         width: 2
     }
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