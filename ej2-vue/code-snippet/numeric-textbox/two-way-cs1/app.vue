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
<script>

import { NumericTextBoxComponent } from '@syncfusion/ej2-vue-inputs';

export default {
    name: "App",
    components: {
        "ejs-numerictextbox": NumericTextBoxComponent
    },
    data: function () {
        return {
            value: null
        }
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";

#wrapper1 {
    min-width: 250px;
    float: left;
    margin-left: 100px;
}

#wrapper2 {
    min-width: 250px;
    float: right;
    margin-right: 100px;
}
</style>