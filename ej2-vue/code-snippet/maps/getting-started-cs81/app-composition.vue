<template>
    <div id="app">
        <button id="print" @click="clickPrint">Print</button>
        <button id="export" @click="clickExport">export</button>
        <ejs-maps  id='container' :allowPdfExport='allowPdfExport'
        :allowPrint='allowPrint' :allowImageExport='allowImageExport' ref='maps' :titleSettings='titleSettings'>
            <e-layers>
                <e-layer :urlTemplate='urlTemplate'></e-layer>
            </e-layers>
        </ejs-maps>
    </div>
</template>

<script setup>
import { provide, ref } from "vue";

import { MapsComponent as EjsMaps, ImageExport, PdfExport, Print, LayerDirective as ELayer, LayersDirective as ELayers } from '@syncfusion/ej2-vue-maps';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

const maps = ref(null);

const urlTemplate = 'https://tile.openstreetmap.org/{level}/{tileX}/{tileY}.png';
const titleSettings = { text: 'OSM' };

const allowImageExport = true;

const allowPdfExport = true;

const allowPrint = true;

provide('maps',  [ImageExport, PdfExport, Print]);

const clickExport = function() {
    maps.value.ej2Instances.export("PNG", "GAUGE");
};

const clickPrint = function() {
    maps.value.ej2Instances.print();
};

</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';

</style>