<template>
    <div id="app">
          <div class='wrapper'>
            <ejs-maps>
                <e-layers>
                    <e-layer :shapeData='shapeData' :tooltipSettings='tooltipSettings' ></e-layer>
                </e-layers>
            </ejs-maps>
        </div>
    </div>
</template>

<script setup>
import { provide } from "vue";

import { MapsComponent as EjsMaps, MapsTooltip, LayerDirective as ELayer, LayersDirective as ELayers } from '@syncfusion/ej2-vue-maps';
import { world_map } from './world-map.js';

const shapeData = world_map;

const tooltipSettings = {
    visible: true,
    valuePath: 'name',
    fill: '#D0D0D0',
    textStyle: {
        color: 'green',
        fontFamily: 'Times New Roman',
        fontStyle: 'Sans-serif'
    },
    duration: 3000
};

provide('maps',  [MapsTooltip]);

</script>
<style>
  .wrapper {
    max-width: 400px;
    margin: 0 auto;
  }
</style>