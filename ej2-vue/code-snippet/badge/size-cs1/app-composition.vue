<template>
    <div id='element'>
        <h1>Badge Component <span class="e-badge e-badge-primary size_1">New</span></h1>
        <h1>Badge Component <span class="e-badge e-badge-primary size_2">New</span></h1>
        <h1>Badge Component <span class="e-badge e-badge-primary size_3">New</span></h1>
    </div>
</template>
<script setup>

</script>
<style>
    @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
    @import "../node_modules/@syncfusion/ej2-vue-notifications/styles/material.css";

    #element {
        display: block;
        width: 400px;
        margin: auto;
        border: 1px solid #dddddd;
        border-radius: 3px;
        justify-content: center;
    }

    h1 {
        text-align: center;
    }

    .e-badge.size_1 {
        font-size: 12px;
    }

    .e-badge.size_2 {
        font-size: 16px;
    }

    .e-badge.size_3 {
        font-size: 18px;
    }

</style>