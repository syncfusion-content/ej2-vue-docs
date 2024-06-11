<template>
  <div id='app'>
    <ejs-tooltip id='tooltip' :content='content' target='#target'>
      <p>A green home is a type of house designed to be <a id="target"><u>environmentally friendly</u></a>
        and sustainable. And also focuses on the efficient use of "energy, water, and building materials." As green homes
        have become more prevalent we have also seen the emergence of green affordable housing.
      </p>
    </ejs-tooltip>
  </div>
</template>

<script setup>
import { TooltipComponent as EjsTooltip } from "@syncfusion/ej2-vue-popups";
import { createApp } from 'vue';

const app = createApp();
var demoVue = app.component("tooltipContent", {
  template: `
    <div id="tooltipContent"><p><strong>Environmentally friendly</strong> or <strong>environment-friendly</strong>, <i>(also referred to as eco-friendly, nature-friendly, and green)</i> are marketing and sustainability terms referring to goods and services, laws, guidelines and policies that inflict reduced, minimal, or no harm upon ecosystems or the environment.</p></div>`,
  data() {
    return {
      data: {}
    };
  }
});

const content = () => {
  return { template: demoVue }
};

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";

#tooltipContent {
  padding: 10px;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
}
</style>