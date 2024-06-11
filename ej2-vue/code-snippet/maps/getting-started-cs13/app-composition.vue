<template>
    <div id="app">
          <div class='wrapper'>
            <ejs-maps >
                <e-layers>
                    <e-layer :shapeData='shapeData' :shapePropertyPath='shapePropertyPath' :shapeDataPath='shapeDataPath' :dataSource='dataSource' :shapeSettings='shapeSettings' ></e-layer>
                </e-layers>
            </ejs-maps>
        </div>
    </div>
</template>

<script setup>

import { MapsComponent as EjsMaps, LayerDirective as ELayer, LayersDirective as ELayers} from '@syncfusion/ej2-vue-maps';
import { world_map } from './world-map.js';
import { population_density } from './population-density.js';

const shapeData = world_map;
const shapeDataPath = 'name';
const shapePropertyPath = 'name';
const dataSource = population_density;
const shapeSettings = {
    colorValuePath: 'density',
    fill: '#E5E5E5',
    colorMapping: [
    {
        from: 0.00001, to: 100, color: 'rgb(153,174,214)'
    },
    {
        from: 100, to: 200, color: 'rgb(115,143,199)'
    },
    {
        from: 200, to: 300, color: 'rgb(77,112,184)'
    },
    {
        from: 300, to: 500, color: 'rgb(38,82,168)'
    },
    {
        from: 500, to: 19000, color: 'rgb(0,51,153)'
    }
    ]
};

</script>
<style>
  .wrapper {
    max-width: 400px;
    margin: 0 auto;
  }
</style>