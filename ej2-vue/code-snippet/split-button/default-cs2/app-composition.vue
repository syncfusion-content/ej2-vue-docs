<template>
    <ejs-splitbutton :items='items' content='Paste'></ejs-splitbutton>
</template>

<script setup>
import { SplitButtonComponent as EjsSplitbutton } from "@syncfusion/ej2-vue-splitbuttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

const items = [
    {
        text: 'Cut'
    },
    {
        text: 'Copy'
    },
    {
        text: 'Paste'
    }];
</script>

<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/split-button/index.css";
</style>