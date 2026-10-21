<template>
    <div>
        <div id="targetElement" style="position:relative;min-height:350px;border:1px solid;"></div>
        <!-- To render Floating Action Button -->
        <ejs-fab id='fab' iconCss='e-icons e-edit' content='Edit' v-on:click="onClick" target='#targetElement'>
        </ejs-fab>
    </div>
</template>

<script setup>

import { FabComponent as EjsFab } from "@syncfusion/ej2-vue-buttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);


const onClick = () => {
    alert("Edit is clicked!");
}

</script>

<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/floating-action-button/index.css";
</style>