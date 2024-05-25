<template>
    <div id="app">
        <div class='wrapper'>
            <ejs-maps >
                <e-maps-annotations>
                    <e-maps-annotation :content='contentTemplate' :x='x1' :y='y1' :zIndex='zindex'>
                    </e-maps-annotation>
                </e-maps-annotations>
                <e-layers>
                    <e-layer :shapeData='shapeData' >
                    </e-layer>
                </e-layers>
            </ejs-maps>
        </div>
    </div>
</template>

<script setup>
import { provide } from "vue";

import { MapsComponent as EjsMaps, Annotations, AnnotationDirective as EMapsAnnotation, AnnotationsDirective as EMapsAnnotations,
  LayerDirective as ELayer, LayersDirective as ELayers } from '@syncfusion/ej2-vue-maps';
import { world_map } from './world-map.js';
import { createApp } from 'vue';

const app = createApp({});

const mapTemplate = app.component('MapsComponent', {
  data: () => ({}),
  template: '<div id="first"><h1>Maps</h1></div>'
});

const shapeData = world_map;
const zindex = 1;
const x1 = '0%';
const y1 = '50%';

const contentTemplate = function () {
  return {
    template: mapTemplate 
  }
};

provide('maps',  [ Annotations ]);

</script>
<style>
  .wrapper {
    max-width: 400px;
    margin: 0 auto;
  }
</style>