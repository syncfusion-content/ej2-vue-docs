<template>
    <ejs-progressbutton content="Slide Left" :enableProgress="true" :animationSettings="animationSettings"
        :spinSettings="spinSettings"></ejs-progressbutton>
</template>

<script setup>

import { ProgressButtonComponent as EjsProgressbutton } from "@syncfusion/ej2-vue-splitbuttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
const animationSettings = { effect: 'SlideLeft', duration: 500, easing: 'linear' };
const spinSettings = { position: 'Center' };
</script>

<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/progress-button/index.css";
</style>