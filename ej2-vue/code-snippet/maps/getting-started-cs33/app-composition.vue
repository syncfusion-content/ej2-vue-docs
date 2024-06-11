<template>
    <div id="template">
        <div class='wrapper'>
            <ejs-maps >
                <e-layers>
                    <e-layer :shapeData='shapeData' :shapeSettings='shapeSettings' :shapePropertyPath='shapePropertyPath' :shapeDataPath='shapeDataPath' :dataSource='dataSource'
                    :dataLabelSettings='dataLabelSettings'></e-layer>
                </e-layers>
            </ejs-maps>
        </div>
    </div>
</template>

<script setup>
import { provide } from "vue";

import { MapsComponent as EjsMaps, DataLabel, LayersDirective as ELayer, LayersDirective as ELayers } from '@syncfusion/ej2-vue-maps';
import { usMap } from './usa.js';
import { createApp } from 'vue';

const app = createApp({});


let contentVue = app.component("contentTemplate", {
    template: '<div><div><img src="https://ej2.syncfusion.com/demos/src/maps/images/weather-clear.png" style="width:22px;height:22px"> </div> {{data.Name}} </img></div>',
        data() {
            return {
                data: {}
            };
        }
});
let contentTemplate = function() {
    return { template: contentVue };
};

const shapeData = usMap;
const shapeSettings = {
    autofill:true
};
const shapePropertyPath = 'name';
const shapeDataPath = 'Name';
const dataSource = [
    { "Name": "Iowa", "Population": "29863010" },
    { "Name": "Utah", "Population": "1263010" },
    { "Name": "Texas"," Population": "963010" }
];
const dataLabelSettings = {
    visible: true,
    labelPath: 'Name',
    template: contentTemplate
};

provide('maps',  [DataLabel]);

</script>
<style>
  .wrapper {
    max-width: 400px;
    margin: 0 auto;
  }
</style>