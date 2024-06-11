<template>
    <div id="app">
          <div class='wrapper'>
            <ejs-maps>
                <e-layers>
                    <e-layer :shapeData='shapeData' :shapePropertyPath='shapePropertyPath' :shapeDataPath='shapeDataPath' :dataSource='dataSource' :tooltipSettings='tooltipSettings' :bubbleSettings='bubbleSettings'
                    :markerSettings='markerSettings'></e-layer>
                </e-layers>
            </ejs-maps>
        </div>
    </div>
</template>

<script setup>
import { provide } from "vue";

import { MapsComponent as EjsMaps, MapsTooltip, Marker, Bubble, LayersDirective as ELayers, LayerDirective as ELayer } from '@syncfusion/ej2-vue-maps';
import { world_map} from './world-map.js';

const shapeData = world_map;
const shapePropertyPath = 'name';

const shapeDataPath = 'name';

const dataSource = [
            { "Continent": "North America", 'color': '#71B081',
            data: { "continent": "North America", 'color': '#71B081' }
            },
            { "Continent": "South America", 'color': '#5A9A77',
            data: { "continent": "South America", 'color': '#5A9A77' }
            },
            { "Continent": "Africa", 'color': '#498770',
            data: { "continent": "Africa", 'color': '#498770' }
            },
            { "Continent": "Europe", 'color': '#39776C',
            data: { "continent": "Europe", 'color': '#39776C' }
            },
            { "Continent": "Asia", 'color': '#266665',
            data: { "continent": "Asia", 'color': '#266665' }
            },
            { "Continent": "Australia", 'color': '#124F5E',
            data: { "continent": "Australia", 'color': '#124F5E' }
            }
];

const tooltipSettings = {
    visible: true,
    valuePath: 'data.continent'
};

const bubbleSettings = [
    {
        visible: true,
        valuePath: 'data.value',
        colorValuePath: 'data.color',
        animationDuration: 0,
        minRadius: 20,
        maxRadius: 90,
        opacity: 0.8,
        dataSource: [
            { 'name': 'India', 'value': 18.89685398845257, 'population': 391292635,
            data: { 'color': 'red', 'population': 391292635, 'value': 189685398845257 }
            }
        ],
        tooltipSettings: {
            visible: true,
            valuePath: 'data.population',
            template:"<div>${data.population}</div>"
        }
    }
];

const markerSettings = [
    {
        visible: true,
        dataSource: [
            { latitude: 37.6276571, longitude: -122.4276688, name: 'San Bruno',
            data: { x: 37.6276571, y: -122.4276688, name: 'San Bruno', shape: 'Pentagon',
            color: 'red', imageUrl: 'images/ballon.png' }
            },
            { latitude: 33.5302186, longitude: -117.7418381, name: 'Laguna Niguel',
            data: { x: 33.5302186, y: -117.7418381, name: 'Laguna Niguel', color: 'blue',
            shape: 'Pentagon', imageUrl: 'images/ballon.png' }
            }
        ],
        shapeValuePath: "data.shape",
        colorValuePath: "data.color",
        height: 20,
        width: 20,
        offset: {
            y: -10,
            x: 0
        },
        longitudeValuePath: "data.y",
        latitudeValuePath: "data.x",
        tooltipSettings: {
            visible: true,
            valuePath: 'data.name',
            format: "${data.name}: ${data.x} : ${data.y}"
        },
        animationDuration: 0
    }
];

provide('maps',  [Marker, Bubble, MapsTooltip]);

</script>
<style>
  .wrapper {
    max-width: 400px;
    margin: 0 auto;
  }
</style>