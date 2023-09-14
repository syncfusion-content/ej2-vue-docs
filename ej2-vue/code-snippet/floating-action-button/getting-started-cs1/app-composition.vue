

<template>
    <div>
        <div id="targetElement" style="position:relative;min-height:350px;border:1px solid;"></div>
        <!-- To render Floating Action Button -->
        <ejs-fab id='fab' content='Add' target='#targetElement'></ejs-fab>
    </div>
</template>

<script setup>
    import { FabComponent as EjsFab } from "@syncfusion/ej2-vue-buttons";
    import { enableRipple } from '@syncfusion/ej2-base';
    enableRipple(true);
</script>

<style>
    @import '../node_modules/@syncfusion/ej2-base/styles/material.css';
    @import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
</style>


