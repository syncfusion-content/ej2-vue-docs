<template>
    <div id="app">
        <div class='wrapper'>
            <ejs-maps :legendSettings='legendSettings'>
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
import { World_Map } from './worldmap.js';
import { default_data } from './legenddata.js';

const shapeData = World_Map;
const legendSettings = {
    visible: true,
    valuePath:'continent'
};

const shapeDataPath = 'continent';

const shapePropertyPath = 'continent';
const dataSource = default_data;

const shapeSettings = {
    colorValuePath: 'color',
};

provide('maps',  [Legend]);

</script>
<style>
  .wrapper {
    max-width: 400px;
    margin: 0 auto;
  }
</style>