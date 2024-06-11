<template>
    <div id="app">
        <div class='wrapper'>
            <ejs-maps  :format='format' :useGroupingSeparator='useGroupingSeparator' >
                <e-layers>
                    <e-layer :shapeData='shapeData' :shapePropertyPath='shapePropertyPath' :shapeDataPath='shapeDataPath' :dataSource='dataSource' :shapeSettings='shapeSettings' :tooltipSettings='tooltipSettings'></e-layer>
                </e-layers>
            </ejs-maps>
        </div>
    </div>
</template>

<script setup>
import { provide } from "vue";

import { MapsComponent as EjsMaps, MapsTooltip, LayerDirective as ELayer, LayersDirective as ELayers } from '@syncfusion/ej2-vue-maps';
import { world_map } from './world-map.js';
import { setCulture } from '@syncfusion/ej2-base';
setCulture('de');

const format = 'c';
const useGroupingSeparator = true;
const shapeData = world_map;
const shapePropertyPath = 'name';
const shapeDataPath = 'Country';
const dataSource = [
    { "Country": "China", "Membership": "Permanent", population: '38332521' },
    { "Country": "France", "Membership": "Permanent", population: '19651127' },
    { "Country": "Russia", "Membership": "Permanent", population: '3090416' },
    { "Country": "Kazakhstan", "Membership": "Non-Permanent", population: '1232521' },
    { "Country": "Poland", "Membership": "Non-Permanent", population: '90332521' },
    { "Country": "Sweden", "Membership": "Non-Permanent", population: '383521' }
];
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

const tooltipSettings = {
    visible: true,
    valuePath: 'population'
};

provide('maps',  [MapsTooltip]);

</script>
<style>
  .wrapper {
    max-width: 400px;
    margin: 0 auto;
  }
</style>