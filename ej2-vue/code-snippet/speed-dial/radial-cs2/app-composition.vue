<template>
    <div>
        <div id="targetElement" style="position:relative;min-height:350px;border:1px solid;"></div>
        <ejs-speeddial id='speeddial' openIconCss='e-icons e-edit' closeIconCss='e-icons e-close' target='#targetElement'
            mode='Radial' position='MiddleRight' :items='items' :radialSettings='radialSettings'></ejs-speeddial>
    </div>
</template>

<script setup>

import { SpeedDialComponent as EjsSpeeddial } from "@syncfusion/ej2-vue-buttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
const items = [
    { iconCss: 'e-icons e-cut' },
    { iconCss: 'e-icons e-copy' },
    { iconCss: 'e-icons e-paste' },
    { iconCss: 'e-icons e-edit' },
    { iconCss: 'e-icons e-save' }
], ;
const radialSettings = { offset: '80px', direction: 'AntiClockwise', startAngle: 90, endAngle: 270 };
</script>

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
</style>