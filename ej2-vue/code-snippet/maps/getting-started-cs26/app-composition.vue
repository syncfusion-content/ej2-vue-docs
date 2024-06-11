<template>
    <div id="map">
        <div class='wrapper'>
            <ejs-maps>
                <e-layers>
                    <e-layer :shapeData='shapeData' :shapePropertyPath='shapePropertyPath'
                             :shapeDataPath='shapeDataPath' :dataSource='dataSource' :shapeSettings='shapeSettings'></e-layer>
                </e-layers>
            </ejs-maps>
        </div>
    </div>
</template>
<script setup>

import { MapsComponent as EjsMaps, LayerDirective, LayersDirective } from '@syncfusion/ej2-vue-maps';
import { world_map } from './world-map.js';

const shapeData = world_map;
const shapePropertyPath = 'continent';

const shapeDataPath = 'continent';

const dataSource = [
    { continent: "North America", color: '#71B081', borderColor: '#CCFFE5', width: 2 },
    { continent: "South America", color: '#5A9A77', borderColor: 'red', width: 2 },
    { continent: "Africa", color: '#498770', borderColor: '#FFCC99', width: 2 },
    { continent: "Europe", color: '#39776C', borderColor: '#66B2FF', width: 2 },
    { continent: "Asia", color: '#266665', borderColor: '#999900', width: 2 },
    { continent: "Oceania", color: '#124F5E', borderColor: 'blue', width: 2 }
];

const shapeSettings = {
    borderColorValuePath: 'borderColor',
    borderWidthValuePath: 'width',
    colorValuePath: 'color'
};

</script>
<style>
  .wrapper {
    max-width: 400px;
    margin: 0 auto;
  }
</style>