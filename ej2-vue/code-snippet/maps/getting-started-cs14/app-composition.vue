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

import { MapsComponent as EjsMaps, LayerDirective as ELayer, LayersDirective as ELayers } from '@syncfusion/ej2-vue-maps';
import { world_map } from './world-map.js';
import { uncountries } from './countries.js';

const shapeData = world_map;
const shapeDataPath = 'Country';
const shapePropertyPath = 'name';
const dataSource = uncountries;
const shapeSettings = {
    fill: '#E5E5E5',
    colorMapping: [
        {
            value: 'Permanent',
            color: '#EDB46F'
        },
        {
            color: '#F1931B',
            value: 'Non-Permanent'
        }
    ],
    colorValuePath: 'Membership'
};

</script>
<style>
  .wrapper {
    max-width: 400px;
    margin: 0 auto;
  }
</style>