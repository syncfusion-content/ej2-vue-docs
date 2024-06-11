<template>
    <div id="app">
        <div class='wrapper'>
            <ejs-maps >
                <e-layers>
                    <e-layer :shapeData='shapeData' :shapeSettings='shapeSettings'
                    :dataLabelSettings='dataLabelSettings'></e-layer>
                </e-layers>
            </ejs-maps>
        </div>
    </div>
</template>

<script setup>
import { provide } from "vue";

import { MapsComponent as EjsMaps, DataLabel, LayerDirective as ELayer, LayersDirective as ELayers } from '@syncfusion/ej2-vue-maps';
import { usMap } from './usa.js';

const shapeData = usMap;
const shapeSettings = {
    autofill:true
};
const dataLabelSettings = {
    visible: true,
    labelPath: 'name',
    smartLabelMode:'Hide'
};

provide('maps',  [DataLabel]);

</script>
<style>
  .wrapper {
    max-width: 400px;
    margin: 0 auto;
  }
</style>