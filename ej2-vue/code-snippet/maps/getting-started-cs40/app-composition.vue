<template>
    <div id="app">
          <div class='wrapper'>
            <ejs-maps  :titleSettings='titleSettings' :legendSettings='legendSettings' >
                <e-layers>
                    <e-layer :shapeData='shapeData' :shapePropertyPath='shapePropertyPath' :shapeDataPath='shapeDataPath' :dataSource='dataSource' :shapeSettings='shapeSettings' :tooltipSettings='tooltipSettings' :dataLabelSettings='dataLabelSettings'></e-layer>
                </e-layers>
            </ejs-maps>
        </div>
    </div>
</template>

<script setup>
import { provide } from "vue";
import { MapsComponent as EjsMaps, LayerDirective as ELayer, LayersDirective as ELayers, Legend, DataLabel, MapsTooltip } from '@syncfusion/ej2-vue-maps';
import { usMap } from './usa.js';
import { electionData } from './election-data.js';

const titleSettings = {
    text: 'USA Election Results - 2016'
};

const shapeData = usMap;
const dataSource = electionData;
const shapePropertyPath = 'name';
const shapeDataPath = 'State';
const shapeSettings = {
    colorValuePath: 'Candidate',
    colorMapping: [
    {
        value: 'Trump', color: '#D84444'
    },
    {
        value: 'Clinton', color: '#316DB5'
    }]
};

const dataLabelSettings = {
    visible: true,
    labelPath: 'State',
    smartLabelMode: 'Trim'
};

const tooltipSettings = {
    visible: true,
    valuePath: 'State'
};

const legendSettings = {
    visible: true
};

provide('maps',  [Legend, DataLabel, MapsTooltip]);

</script>
<style>
  .wrapper {
    max-width: 400px;
    margin: 0 auto;
  }
</style>