<template>
    <div>
        <div id="targetElement" style="position:relative;min-height:350px;border:1px solid;"></div>
        <!-- To render Floating Action Button with applied warning style -->
        <ejs-fab id='fab' iconCss='e-icons e-edit' cssClass='e-warning' target='#targetElement'></ejs-fab>
    </div>
</template>

<script>

import { FabComponent } from "@syncfusion/ej2-vue-buttons";
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);
export default {
    name: "App",
    components: {
        "ejs-fab": FabComponent
    }
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/floating-action-button/index.css";
</style>