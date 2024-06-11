<template>
    <div id="map">
        <div class='wrapper'>
            <ejs-maps  :titleSettings='titleSettings' >
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

const shapeData = world_map;
const shapePropertyPath = 'name';
const shapeDataPath = 'Country';

const titleSettings = {
    text: 'UN security council countries'
};

const dataSource = [{  "Country": "China", "Membership": "Permanent"},
    {"Country": "France","Membership": "Permanent" },
    { "Country": "Russia","Membership": "Permanent"},
    {"Country": "Kazakhstan","Membership": "Non-Permanent"},
    { "Country": "Poland","Membership": "Non-Permanent"},
    {"Country": "Sweden","Membership": "Non-Permanent"}];

const shapeSettings = {
    colorValuePath: 'Membership',
    colorMapping: [
        {
            value: 'Permanent', color: '#D84444'
        },
        {
            value: 'Non-Permanent', color: '#316DB5'
        }]
};

</script>
<style>
  .wrapper {
    max-width: 400px;
    margin: 0 auto;
  }
</style>