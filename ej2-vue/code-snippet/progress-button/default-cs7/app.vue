<template>
    <ejs-progressbutton content="Slide Left" :enableProgress="true" :animationSettings="animationSettings"
        :spinSettings="spinSettings"></ejs-progressbutton>
</template>

<script>

import { ProgressButtonComponent } from "@syncfusion/ej2-vue-splitbuttons";
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
export default {
    name: "App",
    components: {
        "ejs-progressbutton": ProgressButtonComponent
    },
    data() {
        return {
            animationSettings: { effect: 'SlideLeft', duration: 500, easing: 'linear' },
            spinSettings: { position: 'Center' }
        };
    }
}
</script>

<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
</style>