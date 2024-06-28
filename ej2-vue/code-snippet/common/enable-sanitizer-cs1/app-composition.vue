<template>
  <div id='container'>
    <ejs-tooltip class="tooltipcontainer" content='<img src=text onerror=alert("XSS_Script_Attack") \/>'
      enable-html-sanitizer="true" target="#target">
      <div style="display: inline-block; position: relative; left: 50%;top: 100px;transform: translateX(-50%);">
        <ejs-button id='target'>Hover me for a tooltip!</ejs-button>
      </div>
    </ejs-tooltip>
  </div>
</template>

<script setup>
import { TooltipComponent as EjsTooltip } from "@syncfusion/ej2-vue-popups";
import { ButtonComponent as EjsButton } from "@syncfusion/ej2-vue-buttons";
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
</style>