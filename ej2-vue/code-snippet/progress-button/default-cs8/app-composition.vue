<template>
 <ejs-progressbutton content='Progress Step' :enableProgress="true" cssClass="e-hide-spinner" :begin="begin"></ejs-progressbutton>
</template>

<script setup>

import { ProgressButtonComponent as EjsProgressbutton } from "@syncfusion/ej2-vue-splitbuttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
    const begin = function(args) {
        args.step = 20;
    }
</script>

<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/progress-button/index.css";
</style>