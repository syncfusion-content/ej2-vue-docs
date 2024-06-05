<template>
  <div id="app">
    <div id='container'>
      <ejs-tooltip class="tooltipcontainer" content='Tooltip content' target="#target">
        <div style="display: inline-block; position: relative; left: 50%;top: 100px;transform: translateX(-50%);">
          <ejs-button id='target'>Show Tooltip</ejs-button>
        </div>
      </ejs-tooltip>
    </div>
  </div>
</template>
<script>
import { TooltipComponent } from "@syncfusion/ej2-vue-popups";
import { ButtonComponent } from "@syncfusion/ej2-vue-buttons";

export default {
  name: "App",
  components: {
    "ejs-tooltip": TooltipComponent,
    "ejs-button": ButtonComponent
  },
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
</style>