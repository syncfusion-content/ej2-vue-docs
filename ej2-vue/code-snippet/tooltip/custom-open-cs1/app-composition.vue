<template>
    <div id='app'>
        <ejs-tooltip ref="tooltip" id="tooltip" content='Tooltip from custom mode' opensOn='Custom'
            v-on:dblclick='customOpen'>
            <div id="box">Double-click to open Tooltip.</div>
        </ejs-tooltip>
    </div>
</template>

<script setup>
import { TooltipComponent as EjsTooltip } from "@syncfusion/ej2-vue-popups";
import { ref } from 'vue';

const tooltip = ref(null);

const customOpen = (args) => {
    if (args.target.getAttribute('data-tooltip-id')) {
        tooltip.value.close();
    } else {
        tooltip.value.open(args.target);
    }
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";

#box {
    background-color: #cfd8dc;
    border: 3px solid #eceff1;
    box-sizing: border-box;
    margin: 80px auto;
    padding: 20px 0;
    width: 300px;
    text-align: center;
    color: #424242;
    font-size: 20px;
    user-select: none;
}
</style>