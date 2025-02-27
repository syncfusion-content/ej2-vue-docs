<template>
  <div id='app'>
    <ejs-tooltip id="tooltip" ref="tooltip" content='Tooltip animation effect' opensOn='Custom'
      v-on:click='onCustomClick'>
      <div id="target">
        Show tooltip
      </div>
    </ejs-tooltip>
  </div>
</template>

<script setup>

import { TooltipComponent as EjsTooltip } from "@syncfusion/ej2-vue-popups";
import { ref } from 'vue';

const tooltip = ref(null);

const onCustomClick = (args) => {
  if (args.currentTarget.getAttribute("data-tooltip-id")) {
    let closeAnimation = { effect: 'FadeOut', duration: 1000 }
    tooltip.value.close(closeAnimation);
  } else {
    let openAnimation = { effect: 'FadeIn', duration: 1000 }
    tooltip.value.open(tooltip.value.$el, openAnimation);
  }
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";

#target {
  background-color: #cfd8dc;
  border: 3px solid #eceff1;
  box-sizing: border-box;
  margin: 80px auto;
  padding: 20px 0;
  width: 200px;
  text-align: center;
  color: #424242;
  font-size: 20px;
  user-select: none;
}
</style>