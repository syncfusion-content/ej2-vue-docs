<template>
    <div id="app">
          <div class='wrapper'>
            <ejs-maps ref='maps'>
                <e-layers>
                    <e-layer :shapeData='shapeData' :selectionSettings='selectionSettings' ></e-layer>
                </e-layers>
            </ejs-maps>
        </div>
        <ejs-button id='selection' v-on:click='select'>selection</ejs-button>
        <ejs-button id='unselection' v-on:click='unselect'>unselection</ejs-button>
    </div>
</template>

<script setup>
import { provide, ref } from "vue";

import { MapsComponent as EjsMaps, Selection, LayerDirective as ELayer, LayersDirective as ELayers } from '@syncfusion/ej2-vue-maps';
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
import { world_map } from './world-map.js';

const maps = ref(null);
const shapeData = world_map;
const selectionSettings = {
    enable: true,
    fill: 'green',
    border: { color: 'white', width: 2}
};

provide('maps',  [Selection]);

const select = () => {
    maps.value.shapeSelection(0, "continent", "Asia", true);
};

const unselect = () => {
    maps.value.shapeSelection(0, "continent", "Asia", false);
};

</script>
<style>
  .wrapper {
    max-width: 400px;
    margin: 0 auto;
  }
</style>