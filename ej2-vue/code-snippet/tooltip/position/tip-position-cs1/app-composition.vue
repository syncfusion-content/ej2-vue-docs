<template>
   <div id='app'>
        <ejs-tooltip content="Tooltip content" tipPointerPosition="Start" target="#target">
            <ejs-button id="target">Show tooltip</ejs-button>
        </ejs-tooltip>
    </div>
</template>
<script setup>
import { TooltipComponent as EjsTooltip } from "@syncfusion/ej2-vue-popups";
import { ButtonComponent as EjsTooltip } from "@syncfusion/ej2-vue-buttons";

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
#target {
  position: relative;
  left: 50%;
  margin-top: 100px;
  transform: translateX(-50%)
}
</style>