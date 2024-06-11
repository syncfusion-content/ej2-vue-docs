<template>
    <div id="app">
        <div class='wrapper'>
            <ejs-maps :zoomSettings='zoomSettings' :locale='locale' >
                <e-layers>
                    <e-layer :shapeData='shapeData' :shapePropertyPath='shapePropertyPath' :shapeDataPath='shapeDataPath' :dataSource='dataSource' :shapeSettings='shapeSettings' >
                    </e-layer>
                </e-layers>
            </ejs-maps>
        </div>
    </div>
</template>

<script setup>
import { provide } from "vue";

import { MapsComponent as EjsMaps, Zoom, LayerDirective as ELayer, LayersDirective as ELayers } from '@syncfusion/ej2-vue-maps';
import { usMap } from './usa.js';
import { electionData } from './election-data.js';
import { L10n } from '@syncfusion/ej2-base';

L10n.load({
    'ar-AR': {
        'maps': {
            ZoomIn: 'تكبير',
            ZoomOut: 'تصغير',
            Zoom: 'زوم',
            Pan: 'مقلاة',
            Reset: 'إعادة تعيين'
        },
    }
});

const zoomSettings = {
    enable: true
};

const locale = 'ar-AR';

const shapeData = usMap;
const shapePropertyPath = 'name';
const shapeDataPath = 'State';
const dataSource = electionData;

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

provide('maps',  [Zoom]);

</script>
<style>
  .wrapper {
    max-width: 400px;
    margin: 0 auto;
  }
</style>