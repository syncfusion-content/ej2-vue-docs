<template>
    <div>
        <div id="targetElement" style="position:relative;min-height:350px;border:1px solid;"></div>
        <!-- To render Floating Action Button -->
        <ejs-fab id='fab' iconCss='e-icons e-edit'
            content='<span class="text-container"><span class="textEle">Edit</span></span>' cssClass='fab-hover'
            target='#targetElement'></ejs-fab>
    </div>
</template>

<script setup>

import { FabComponent as EjsFab } from "@syncfusion/ej2-vue-buttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
</script>

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';

/* start of onhover customization */
.e-fab.e-btn.fab-hover {
    padding: 6px 0px 10px 10px;
}

.fab-hover .text-container {
    overflow: hidden;
    width: 0;
    margin: 0;
    transition: width .5s linear 0s, margin .2s linear .5s;
}

.fab-hover:hover .text-container {
    width: 35px;
    margin: 0 5px;
    transition: width .5s linear .2s, margin .2s linear 0s;
}

/* end of onhover customization */</style>