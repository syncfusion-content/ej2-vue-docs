<template>
    <div id="app">
        <div id="wrapper1">
            <ejs-maskedtextbox floatLabelType="Auto" placeholder="Enter a value" mask="999-999-9999"
                v-model="value"></ejs-maskedtextbox>
        </div>
        <div id="wrapper2">
            <ejs-maskedtextbox floatLabelType="Auto" placeholder="Enter a value" mask="999-999-9999"
                v-model="value"></ejs-maskedtextbox>
        </div>
    </div>
</template>
<script>

import { MaskedTextBoxComponent } from '@syncfusion/ej2-vue-inputs';

export default {
    name: "App",
    components: {
        "ejs-maskedtextbox": MaskedTextBoxComponent
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
}</style>