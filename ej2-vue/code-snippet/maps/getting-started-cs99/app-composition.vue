<template>
    <div id="app">
          <div class='wrapper'>
            <ejs-maps>
                <e-layers>
                    <e-layer :shapeData='shapeData' :shapePropertyPath='shapePropertyPath' :shapeDataPath='shapeDataPath' :dataSource='dataSource' :tooltipSettings='tooltipSettings' ></e-layer>
                </e-layers>
            </ejs-maps>
        </div>
    </div>
</template>

<script setup>
import { provide } from "vue";

import { MapsComponent as EjsMaps, MapsTooltip, LayersDirective as ELayers, LayerDirective as ELayer } from '@syncfusion/ej2-vue-maps';
import { world_map } from './world-map.js';
import { default_data } from './default-data.js';

const shapeData = world_map;

const shapePropertyPath = 'continent';

const shapeDataPath = 'continent';

const dataSource = default_data;

const tooltipSettings = {
    visible: true,
    valuePath: 'continent',
    template: '<div style="width:60px; text-align:center; background-color: white; border: 2px solid black; padding-bottom: 10px;padding-top: 10px;padding-left: 10px;padding-right: 10px;"><span>${continent}</span></div>',
    textStyle: {
        color: 'black'
    }
};

provide('maps',  [MapsTooltip]);

</script>
<style>
  .wrapper {
    max-width: 400px;
    margin: 0 auto;
  }
</style>