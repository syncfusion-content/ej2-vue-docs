<template>
    <div id="app">
          <div class='wrapper'>
            <ejs-maps id='container' :titleSettings='titleSettings' :zoomSettings='zoomSettings'>
               <e-layers>
                   <e-layer :shapeData='shapeData' :markerSettings='marker'>
                    </e-layer>
                </e-layers>
            </ejs-maps>
        </div>
    </div>
</template>

<script setup>
import { provide } from "vue";

import { MapsComponent as EjsMaps, Marker, Zoom, MapsTooltip, LayerDirective as ELayer, LayersDirective as ELayers, MarkersDirective as EMarkers, MarkerDirective as EMarker} from '@syncfusion/ej2-vue-maps';
import { world_map } from './world-map.js';

const shapeData = world_map;

const titleSettings = {
    text: 'Attractive places around the world',
    textStyle: {
        size: '16px'
    }
};

const marker = [{
    clusterSettings: {
        allowClustering: true,
        allowDeepClustering: false,
        allowClusterExpand: true,
        labelStyle: {
            color: 'white',
            size: '10px'
        },
        shape: 'Image',
        height: 40, width: 40,
        imageUrl: './cluster-france.svg'
    },
    visible: true,
    dataSource: [
        { latitude: 48.8584, longitude: 2.2945, name: 'Eiffel Tower', state: 'Paris', country: 'France' },
        { latitude: 48.8606, longitude: 2.3376, name: 'Louvre Museum', state: 'Paris', country: 'France' },
        { latitude: 48.8529, longitude: 2.3500, name: 'Notre-Dame Cathedral', state: 'Paris', country: 'France' },
        { latitude: 48.6360, longitude: 1.5115, name: 'Mont Saint-Michel', state: 'Normandy', country: 'France' }
    ],
    shape: 'Circle',
    height: 15,
    width: 15,
    fill: '#b38600',
    border: {
        color: '#e6f2ff',
        width: 2
    },
    tooltipSettings: {
        visible: true,
        valuePath: 'name',
        format: '<b>Name:</b> ${name} <br/> <b>State:</b> ${state} <br/> <b>Country:</b> ${country}'
    },
    animationDuration: 0
},
{
    clusterSettings: {
        allowClustering: true,
        allowDeepClustering: false,
        allowClusterExpand: true,
        shape: 'Image',
        height: 40, width: 40,
        labelStyle: {
            color: 'white',
            size: '10px'
        },
        imageUrl: './cluster-usa.svg'
    },
    visible: true,
    shape: 'Circle',
    height: 15,
    width: 15,
    fill: '#bf4040',
    border: {
        color: '#e6f2ff',
        width: 2
    },
    dataSource: [
        { latitude: 35.019028, longitude: -85.339439, name: 'Ruby Falls', state: 'Tennessee', country: 'United States of America' },
        { latitude: 35.654613, longitude: -105.996979, name: 'Meow Wolf Santa Fe', state: 'New Mexico', country: 'United States of America' },
        { latitude: 36.107216, longitude: -115.175804, name: 'City Center of Las Vegas', state: 'Nevada', country: 'United States of America' },
        { latitude: 36.879047, longitude: -111.510498, name: 'Horseshoe Bend', state: 'Arizona', country: 'United States of America' },
        { latitude: 36.011955, longitude: -113.810951, name: 'Grand Canyon West Skywalk', state: 'Arizona', country: 'United States of America' }
    ],
    tooltipSettings: {
        visible: true,
        valuePath: 'name',
        format: '<b>Name:</b> ${name} <br/> <b>State:</b> ${state} <br/> <b>Country:</b> ${country}'
    },
    animationDuration: 0
},
{
    clusterSettings: {
        allowDeepClustering: false,
        allowClusterExpand: true,
        allowClustering: true,
        shape: 'Image',
        height: 40, width: 40,
        labelStyle: {
            size: '10px',
            color: 'white'
        },
        imageUrl: './cluster-india.svg'
    },
    dataSource: [
        { latitude: 26.985901, longitude: 75.850700, name: 'Amber Fort, Amer', state: 'Rajastan', country: 'India' },
        { latitude: 22.957390, longitude: 77.625275, name: 'Bhimbetka, Raisen District', state: 'Madhya Pradesh', country: 'India' },
        { latitude: 26.809330, longitude: 75.540527, name: 'Bagru Fort, Bagru', state: 'Rajasthan', country: 'India' },
        { latitude: 25.489504, longitude: 80.330116, name: 'Kalinjar Fort, Banda', state: 'Uttar Pradesh', country: 'India' },
        { latitude: 27.988890, longitude: 76.388336, name: 'Neemrana', state: 'Rajasthan', country: 'India' }
    ],
    visible: true,
    shape: 'Circle',
    fill: '#00b3b3',
    border: {
        color: '#e6f2ff',
        width: 2
    },
    height: 15,
    width: 15,
    tooltipSettings: {
        visible: true,
        format: '<b>Name:</b> ${name} <br/> <b>State:</b> ${state} <br/> <b>Country:</b> ${country}',
        valuePath: 'name'
    },
    animationDuration: 0
}];
        
const zoomSettings = {
    enable: true,
    toolbarSettings: {
        buttonSettings: {
            toolbarItems: ['Zoom', 'ZoomIn', 'ZoomOut', 'Pan', 'Reset']
        }
    }
};
const animationDuration = 0;

provide('maps',  [Marker, Zoom , MapsTooltip]);

</script>
<style>
  .wrapper {
    max-width: 400px;
    margin: 0 auto;
  }
</style>