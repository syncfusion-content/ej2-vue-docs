<template>
<div id="app">
    <div id="wrapper1">
        <ejs-numerictextbox floatLabelType="Auto" placeholder="Enter a value" v-model="value"></ejs-numerictextbox>
    </div>
    <div id="wrapper2">
        <ejs-numerictextbox floatLabelType="Auto" placeholder="Enter a value" v-model="value"></ejs-numerictextbox>
    </div>
</div>
</template>
<script setup>

import { NumericTextBoxComponent as EjsNumerictextbox } from '@syncfusion/ej2-vue-inputs';
import { ref } from 'vue';

const value = ref(null);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
#wrapper1{
    min-width: 250px;
    float: left;
    margin-left: 100px;
}
#wrapper2{
    min-width: 250px;
    float: right;
    margin-right: 100px;
}

</style>