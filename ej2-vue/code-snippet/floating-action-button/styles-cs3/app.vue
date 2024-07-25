

<template>
    <div>
        <div id="targetElement" style="position:relative;min-height:350px;border:1px solid;"></div>
        <!-- To render Floating Action Button -->
        <ejs-fab id='fab' iconCss='e-icons e-people' content='Contact' cssClass='custom-css' target='#targetElement'></ejs-fab>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { FabPlugin } from "@syncfusion/ej2-vue-buttons";
    import { enableRipple } from '@syncfusion/ej2-base';

    enableRipple(true);
    Vue.use(FabPlugin);

    export default {}
</script>

<style>
    @import '../node_modules/@syncfusion/ej2-base/styles/material.css';
    @import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';

    /* Outline customization of fab */
    .custom-css.e-fab.e-btn {
        border-color: darkgrey;
        border-width: 4px;
    }
</style>


