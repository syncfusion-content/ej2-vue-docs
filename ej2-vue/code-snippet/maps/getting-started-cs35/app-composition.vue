<template>
    <div id="map">
        <div class='wrapper'>
            <ejs-maps >
                <e-layers>
                    <e-layer :shapeData='shapeData' :shapePropertyPath='shapePropertyPath' :shapeDataPath='shapeDataPath' :dataSource='dataSource' ></e-layer>
                </e-layers>
            </ejs-maps>
        </div>
    </div>
</template>
<script setup>
import { MapsComponent as EjsMaps, LayerDirective as ELayer, LayersDirective as ELayers } from '@syncfusion/ej2-vue-maps';
import { world_map } from './world-map.js';

const shapeData = world_map;
const shapePropertyPath = 'name';
const shapeDataPath = 'Country';
const dataSource = [{  "Country": "China", "Membership": "Permanent"},
    {"Country": "France","Membership": "Permanent" },
    { "Country": "Russia","Membership": "Permanent"},
    {"Country": "Kazakhstan","Membership": "Non-Permanent"},
    { "Country": "Poland","Membership": "Non-Permanent"},
    {"Country": "Sweden","Membership": "Non-Permanent"}
];

</script>
<style>
  .wrapper {
    max-width: 400px;
    margin: 0 auto;
  }
</style>