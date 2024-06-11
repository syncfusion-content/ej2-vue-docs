<template>
    <div>
        <div id="targetElement" style="position:relative;min-height:350px;border:1px solid;"></div>
        <ejs-speeddial id='speeddial' content='Edit' target='#targetElement' :items='items'
            :clicked="clicked"></ejs-speeddial>
    </div>
</template>

<script setup>

import { SpeedDialComponent as EjsSpeeddial } from "@syncfusion/ej2-vue-buttons";
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

const items = [

    { text: 'Cut' },
    { text: 'Copy' },
    { text: 'Paste' }
];
const clicked = function (args) {
    alert(args.item.text + " is clicked");
}
</script>

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
</style>