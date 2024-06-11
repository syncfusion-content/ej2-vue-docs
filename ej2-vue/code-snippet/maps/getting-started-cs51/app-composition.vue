<template>
    <div id="app">
          <div class='wrapper'>
            <ejs-maps :legendSettings='legendSettings' >
                <e-layers>
                    <e-layer :shapeData='shapeData' :shapePropertyPath='shapePropertyPath' :shapeDataPath='shapeDataPath' :dataSource='dataSource' :shapeSettings='shapeSettings' ></e-layer>
                </e-layers>
            </ejs-maps>
        </div>
    </div>
</template>

<script setup>
import { provide } from "vue";

import { MapsComponent as EjsMaps, Legend, LayerDirective as ELayer, LayersDirective as ELayers } from '@syncfusion/ej2-vue-maps';
import { world_map } from './world-map.js';

const legendSettings = {
    visible: true,
    mode: 'Interactive',
    invertedPointer: true
};

const shapeData = world_map;

const dataSource = [
    { "Country": "China", "Membership": "Permanent" },
    { "Country": "France", "Membership": "Permanent" },
    { "Country": "Russia", "Membership": "Permanent" },
    { "Country": "Kazakhstan", "Membership": "Non-Permanent" },
    { "Country": "Poland", "Membership": "Non-Permanent" },
    { "Country": "Sweden", "Membership": "Non-Permanent" }
];

const shapePropertyPath = 'name';
const shapeDataPath = 'Country';

const shapeSettings = {
    colorValuePath: 'Membership',
    colorMapping: [
        {
            value: 'Permanent', color: '#D84444'
        },
        {
            value: 'Non-Permanent', color: '#316DB5'
        }
    ]
};

provide('maps',  [Legend]);

</script>
<style>
  .wrapper {
    max-width: 400px;
    margin: 0 auto;
  }
</style>