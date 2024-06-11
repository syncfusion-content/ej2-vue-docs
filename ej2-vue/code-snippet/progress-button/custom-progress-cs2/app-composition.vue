<template>
    <div>
        <ejs-progressbutton content='Vertical Progress' :enableProgress="true" cssClass='e-hide-spinner e-vertical'
            duration=4000></ejs-progressbutton>
        <ejs-progressbutton content='Progress Top' :enableProgress="true" cssClass='e-hide-spinner e-progress-top'
            duration=4000></ejs-progressbutton>
        <ejs-progressbutton content='Reverse Progress' :enableProgress="true" cssClass='e-hide-spinner e-reverse-progress'
            duration=4000></ejs-progressbutton>
    </div>
</template>

<script setup>

import { ProgressButtonComponent as EjsProgressbutton } from "@syncfusion/ej2-vue-splitbuttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
</script>

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';

#container {
    visibility: hidden;
}

#loader {
    color: #008cff;
    height: 40px;
    left: 45%;
    position: absolute;
    top: 45%;
    width: 30%;
}

button {
    margin: 25px;
}

.e-reverse-progress .e-progress {
    right: 0;
    left: auto;
}</style>