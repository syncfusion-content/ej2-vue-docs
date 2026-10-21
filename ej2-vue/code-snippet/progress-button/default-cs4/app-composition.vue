<template>
<ejs-progressbutton content="Progress" :enableProgress="true" cssClass='e-hide-spinner'></ejs-progressbutton>
</template>

<script setup>

import { ProgressButtonComponent as EjsProgressbutton } from "@syncfusion/ej2-vue-splitbuttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
</script>

<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/progress-button/index.css";
</style>